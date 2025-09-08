import React from "react";
import { Shield, FileText, Eye, Lock, Globe, Users, Calendar } from "lucide-react";

export default function TermsAndConditions() {
  const sections = [
    {
      icon: Eye,
      title: "Information Collection",
      content:
        "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.",
    },
    {
      icon: Lock,
      title: "Data Protection",
      content:
        "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.",
    },
    {
      icon: Shield,
      title: "Information Sharing",
      content:
        "We don't share any personally identifying information publicly or with third-parties, except when required to by law.",
    },
    {
      icon: Globe,
      title: "External Links",
      content:
        "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.",
    },
    {
      icon: Users,
      title: "Your Rights",
      content:
        "You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-background to-accent/5 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Legal Information
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight mb-6">
            Terms & <span className="text-primary">Conditions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. It is POBLE&#39;s policy to respect your privacy regarding
            any information we may collect from you across our website, http://www.poble.com.au, and
            other sites we own and operate.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="group relative">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-accent/20 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Acceptance and Contact */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-accent/20">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Effective Date</span>
              </div>
              <h3 className="text-xl font-bold">Agreement & Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your continued use of our website will be regarded as acceptance of our practices
                around privacy and personal information. If you have any questions about how we
                handle user data and personal information, feel free to contact us.
              </p>
              <div className="pt-4 border-t border-accent/20">
                <p className="text-sm text-muted-foreground font-medium">
                  This policy is effective as of 21 November 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
