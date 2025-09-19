import { QueryClient, QueryFunction } from "@tanstack/react-query";

function normalizeApiBase(rawBase: string | undefined): string {
  const defaultBase = "/api";
  
  // In development, always use "/api" to avoid CORS issues
  if (import.meta.env.DEV) {
    return defaultBase;
  }
  
  if (!rawBase || !rawBase.trim()) return defaultBase;
  let base = rawBase.trim();

  // If given a same-origin base, prefer the default "/api" to avoid CORS
  try {
    const url = new URL(base, typeof window !== "undefined" ? window.location.origin : "http://localhost");
    if (typeof window !== "undefined" && url.origin === window.location.origin) {
      base = defaultBase;
    } else {
      // Ensure the path ends with /api
      if (!url.pathname.endsWith("/api")) {
        url.pathname = url.pathname.replace(/\/$/, "") + "/api";
      }
      base = url.toString().replace(/\/$/, "");
    }
  } catch {
    // Treat as path; ensure it ends with /api
    if (!base.endsWith("/api")) {
      base = base.replace(/\/$/, "") + "/api";
    }
  }
  return base;
}

const API_BASE = normalizeApiBase(import.meta.env.VITE_API_BASE as string | undefined);

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(`${API_BASE}/${url}`, {   // prepend API_BASE
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: { on401: UnauthorizedBehavior }) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(`${API_BASE}/${queryKey.join("/")}`, {   // prepend API_BASE
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
