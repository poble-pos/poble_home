import { LucideIcon } from "lucide-react";

interface ServiceItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceItem({ icon: Icon, title, description }: ServiceItemProps) {
  return (
    <div className="group relative">
      {/* Background gradient effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Main content */}
      <div className="relative bg-card/50 backdrop-blur-sm border border-accent/20 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
        <div className="flex gap-6 items-start h-full">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>

            {/* Hover indicator */}
            <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-medium">Learn more</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
