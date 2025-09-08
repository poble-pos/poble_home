import ServiceItem from "@/components/service-item";
import { BarChart3, Cloud, Shield, Users, Zap, TrendingUp } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Centralized Cloud-Based Reporting",
    description:
      "Utilize cloud-based technology to give you full access whenever, wherever. Always up to date with the latest trends. No need to worry about your data anymore, it will be backed up automatically.",
  },
  {
    icon: Cloud,
    title: "Real-Time Data Synchronization",
    description:
      "Keep all your business data synchronized across multiple devices and locations in real-time. Never miss important updates or lose critical information.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption and security protocols protect your sensitive business data. Multi-factor authentication and regular security audits ensure maximum protection.",
  },
  {
    icon: Users,
    title: "Multi-User Collaboration",
    description:
      "Enable seamless collaboration across your team with role-based access controls. Manage permissions and track user activities with comprehensive audit trails.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description:
      "Experience blazing-fast transaction processing and instant data retrieval. Our optimized cloud infrastructure ensures minimal downtime and maximum efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics & Insights",
    description:
      "Gain valuable business insights with our advanced analytics dashboard. Track performance metrics, identify trends, and make data-driven decisions.",
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-background to-accent/5 py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            All Sets Ready for <span className="text-primary">Only You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive cloud-based solutions designed to streamline your business operations and
            drive growth with cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
