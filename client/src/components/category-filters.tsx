import { Button } from "@/components/ui/button";
import { Grid3x3, Wrench, Hammer, Shield, Calculator, Calendar, Zap } from "lucide-react";

interface CategoryFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function CategoryFilters({ selectedCategory, setSelectedCategory }: CategoryFiltersProps) {
  const categories = [
    { id: "all", label: "All Categories", icon: Grid3x3 },
    { id: "maintenance", label: "Maintenance", icon: Wrench },
    { id: "repairs", label: "Repairs", icon: Hammer },
    { id: "safety", label: "Safety", icon: Shield },
    { id: "budgeting", label: "Budgeting", icon: Calculator },
    { id: "seasonal", label: "Seasonal", icon: Calendar },
    { id: "energy", label: "Energy Efficiency", icon: Zap },
  ];

  return (
    <section className="py-6 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 text-dark-text">Browse by Category</h3>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant="outline"
                className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
