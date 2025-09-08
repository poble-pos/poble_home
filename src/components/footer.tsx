import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-8 text-primary">Get In Touch</h3>

              <div className="flex items-start gap-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-slate-300 leading-relaxed">
                      87 Egerton St
                      <br />
                      Silverwater NSW 2128
                      <br />
                      Australia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a
                      href="tel:0293509508"
                      className="text-slate-300 hover:text-primary transition-colors duration-300"
                    >
                      02 9350 9508
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                      href="mailto:info@poble.com.au"
                      className="text-slate-300 hover:text-primary transition-colors duration-300"
                    >
                      info@poble.com.au
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">POBLE</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Cloud-based multi-modular solutions specifically targeting retail, restaurant, and
                stock-based businesses.
              </p>

              {/* Accent decoration */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-4 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-slate-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Copyright Poble. All Rights Reserved
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
