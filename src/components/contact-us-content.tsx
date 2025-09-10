"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUsContent() {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      subtitle: "Main Location",
      value: "87 Egerton St, Silverwater NSW 2128",
      description: "Visit us during business hours for in-person consultations",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "General Inquiries",
      value: "info@poble.com.au",
      description: "Send us your questions and we'll respond within 24 hours",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Direct Line",
      value: "02 9350 9508",
      description: "Speak directly with our team for immediate assistance",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-600",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
  ];

  return (
    <div className="">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Let&#39;s Start Building <span className="text-primary">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business operations? Get in touch with our team to discuss how
            POBLE&#39;s cloud-based solutions can help you achieve your business goals.
          </p>
        </div>
        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 w-full max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <div key={index} className="group relative">
              {/* Background gradient effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${method.color} rounded-2xl blur-sm opacity-0 transition-opacity duration-300`}
              ></div>
              {/* Main card */}
              <div className="relative rounded-xl p-8 h-full border transition-all duration-300 shadow">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{method.title}</h3>
                  </div>
                  <div className="space-y-3 text-slate-700">
                    <div className={"flex items-center gap-2 justify-start"}>
                      <span>
                        <method.icon className={`w-5 h-5 text-primary`} />
                      </span>
                      <span className="text-lg font-medium">{method.value}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-500">{method.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Business Hours */}
        <div className="grid lg:grid-cols-1 gap-12 mb-16 w-full mx-auto max-w-5xl">
          <div className="relative">
            <div className="relative backdrop-blur-sm rounded-2xl p-8 border shadow">
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
              </div>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b last:border-0"
                  >
                    <span className="text-muted-foreground font-medium">{schedule.day}</span>
                    <span className="text-foreground font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
