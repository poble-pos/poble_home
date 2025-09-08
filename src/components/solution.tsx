import { BarChart3, Monitor, Settings, Users, Wifi } from "lucide-react";

const solutions = [
  {
    icon: Monitor,
    title: "POS System",
    subtitle: "Point of Sale",
    description:
      "Complete point-of-sale solution with inventory management, sales tracking, and customer management. Perfect for retail and restaurant businesses.",
    features: ["Sales analytics", "Customer database", "Tyro payment support"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Queue Management",
    subtitle: "Smart Queueing",
    description:
      "Advanced queue management system that optimizes customer flow and reduces perceived wait times with digital ticketing.",
    features: ["SMS notifications", "Real-time dashboard"],
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    subtitle: "Business Intelligence",
    description:
      "Comprehensive analytics and reporting tools that provide insights into sales performance, customer behavior, and operational efficiency.",
    features: ["Sales reports", "Customer insights", "Performance metrics"],
    color: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-600",
  },
  {
    icon: Wifi,
    title: "Cloud Integration",
    subtitle: "Connected Solutions",
    description:
      "Seamless cloud integration that connects all your systems, enabling real-time data synchronization across multiple locations.",
    features: ["Multi-location sync", "Remote access", "API integration"],
    color: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-600",
  },
];

export default function Solution() {
  return (
    <div className="bg-gradient-to-b from-accent/5 to-background py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4" />
            Our Solutions
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Complete Business <span className="text-primary">Solutions Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of cloud-based solutions designed to transform your
            business operations and enhance customer experience.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 ">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative">
              {/* Background gradient effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${solution.color} rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              {/* Main card */}
              <div
                className={`relative border rounded-xl p-6 h-full transition-all duration-300 group-hover:border group-hover:shadow-lg group-hover:-translate-y-1 bg-white hover:bg-transparent`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <solution.icon className={`w-6 h-6 ${solution.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">{solution.subtitle}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1">
                    {solution.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn more indicator */}
                  {/*<div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">*/}
                  {/*  <span className="text-xs font-medium">Learn more</span>*/}
                  {/*  <svg*/}
                  {/*    className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"*/}
                  {/*    fill="none"*/}
                  {/*    stroke="currentColor"*/}
                  {/*    viewBox="0 0 24 24"*/}
                  {/*  >*/}
                  {/*    <path*/}
                  {/*      strokeLinecap="round"*/}
                  {/*      strokeLinejoin="round"*/}
                  {/*      strokeWidth={2}*/}
                  {/*      d="M9 5l7 7-7 7"*/}
                  {/*    />*/}
                  {/*  </svg>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
