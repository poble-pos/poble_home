import Image from "next/image";
import { CheckCircle, Cloud, Users } from "lucide-react";

export default function AboutUsContent() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Based Architecture",
      description: "Access your data anywhere, anytime with our secure cloud infrastructure",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-User Support",
      description: "Collaborate seamlessly with your team across multiple locations",
    },
  ];

  const benefits = [
    "Real-time data synchronization across all devices",
    "Automatic updates and maintenance",
    "Lower upfront costs compared to traditional systems",
    "Scalable solution that grows with your business",
    "Customer support and training",
  ];

  return (
    <div>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Explore Your Next Potential <span className="text-primary">with Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            POBLE comprises cloud-based multi-modular solutions.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Built for Business <span className={"text-primary"}>Growth</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We established our company to support business owners struggling with all the
                hassles of business operations. We&#39;re building comprehensive tools that move
                every business feature to the cloud, helping entrepreneurs focus on what matters
                most.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                POBLE wants to grow together with you. We&#39;re here to explore the possibilities
                that our cloud system will offer for the next stages of your business journey.
              </p>
            </div>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 pl-0">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative p-8">
              <Image
                src="/about-img.svg"
                alt="About POBLE - Cloud POS Solutions"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Cloud System Benefits */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative p-8">
              <Image
                src="/about-extra-1.svg"
                alt="Cloud-based POS system advantages"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Yes, Our Cloud-Based System <span className="text-primary">Can Do It All</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditional Point of Sale systems have significant limitations. They run on closed
                networks with data stored only on local servers, preventing access from anywhere,
                anytime.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With our experienced team, POBLE provides a comprehensive cloud-based POS system.
                Your data is stored online securely, allowing authorized users to access information
                from anywhere using internet-connected portable devices.
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">Key Advantages</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
