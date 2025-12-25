import { Mail, Linkedin, Github, Facebook, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nurakash16@gmail.com",
      href: "mailto:nurakash16@gmail.com",
      color: "text-red-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/nur-alam-akash",
      href: "https://www.linkedin.com/in/nur-alam-akash/",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@nurakash16",
      href: "https://github.com/nurakash16",
      color: "text-gray-800"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "nuralam.akash.3",
      href: "https://www.facebook.com/nuralam.akash.3",
      color: "text-blue-700"
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to build reliable industrial software or VLSI solutions? Let's discuss your next project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  const gradients: Record<string, string> = {
                    "Email": "from-red-500 to-pink-500",
                    "LinkedIn": "from-blue-600 to-blue-700",
                    "GitHub": "from-gray-700 to-gray-800",
                    "Facebook": "from-blue-600 to-blue-800"
                  };
                  return (
                    <div 
                      key={index} 
                      className="modern-card p-6 group hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <a 
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <div className={`w-14 h-14 bg-gradient-to-br ${gradients[contact.label]} rounded-2xl flex items-center justify-center mr-5 group-hover:rotate-3 transition-transform duration-300 pulse-glow`}>
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{contact.label}</h4>
                          <p className="text-blue-600 hover:text-blue-700 transition-colors font-medium">{contact.value}</p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Let's Collaborate</h3>
              
              {/* Availability Info */}
              <div className="modern-card p-6 mb-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200/50">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Ready to Start?</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-800">Location</h5>
                      <p className="text-gray-600 text-sm">Available for remote and on-site opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 text-blue-600 mt-1 flex items-center justify-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Availability</h5>
                      <p className="text-gray-600 text-sm">Open to full-time and project-based work</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Professional Summary */}
              <div className="modern-card p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Software Engineer at Sincos Group building industrial dashboards and IoT/PLC integrations, with a strong foundation in VLSI design and CMOS layout. Always excited to discuss innovative projects and technical challenges.
                </p>
                
                <div className="space-y-3">
                  <a href="mailto:nurakash16@gmail.com" className="modern-button w-full text-center block">
                    <Mail className="h-5 w-5 mr-2 inline" />
                    Send Email
                  </a>
                  <a href="https://www.linkedin.com/in/nur-alam-akash/" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-700 hover:bg-gray-50 w-full text-center py-3 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 block">
                    <Linkedin className="h-5 w-5 mr-2 inline" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
