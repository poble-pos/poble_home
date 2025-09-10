import { LucideIcon } from "lucide-react";

interface ServiceItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceItem({ icon: Icon, title, description }: ServiceItemProps) {
  return (
    <div className="group relative">
      {/* Main content */}
      <div className="relative shadow rounded-xl p-8 h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg border bg-white">
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
          </div>
        </div>
      </div>
    </div>
  );
}
