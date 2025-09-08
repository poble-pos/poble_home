import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Cloud, Shield, Users } from "lucide-react";

export default function AboutUs() {
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
    <div className="bg-gradient-to-b from-background to-accent/5 pb-5">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            About POBLE
          </div>
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
              <h3 className="text-2xl md:text-3xl font-bold">Built for Business Growth</h3>
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
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-accent/20"
                >
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
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
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
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
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

            <div className="bg-card/30 rounded-lg p-6 border border-accent/20">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Key Advantages
              </h4>
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

        {/* User-Friendly System */}
        {/*<div className="grid lg:grid-cols-2 gap-16 items-center">*/}
        {/*  <div className="space-y-6">*/}
        {/*    <div className="space-y-4">*/}
        {/*      <h3 className="text-2xl md:text-3xl font-bold">*/}
        {/*        Securing Customers with <span className="text-primary">User-Friendly Design</span>*/}
        {/*      </h3>*/}
        {/*      <p className="text-lg text-muted-foreground leading-relaxed">*/}
        {/*        Business owners often struggle with complex POS systems and worry about setup costs.*/}
        {/*        POBLE&#39;s intuitive design attracts users with its simplicity and ease of use.*/}
        {/*      </p>*/}
        {/*      <p className="text-lg text-muted-foreground leading-relaxed">*/}
        {/*        Our simple tutorial mode builds user confidence and encourages feedback for*/}
        {/*        continuous improvement. This two-way communication enhances our development process.*/}
        {/*      </p>*/}
        {/*    </div>*/}

        {/*    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-accent/20">*/}
        {/*      <h4 className="font-semibold mb-4">Cost Comparison</h4>*/}
        {/*      <div className="grid md:grid-cols-2 gap-6">*/}
        {/*        <div className="space-y-2">*/}
        {/*          <h5 className="font-medium text-destructive">Traditional POS</h5>*/}
        {/*          <ul className="text-sm text-muted-foreground space-y-1">*/}
        {/*            <li>• High upfront costs</li>*/}
        {/*            <li>• Hardware installation fees</li>*/}
        {/*            <li>• Manual maintenance costs</li>*/}
        {/*            <li>• Technician requirements</li>*/}
        {/*          </ul>*/}
        {/*        </div>*/}
        {/*        <div className="space-y-2">*/}
        {/*          <h5 className="font-medium text-primary">POBLE Cloud POS</h5>*/}
        {/*          <ul className="text-sm text-muted-foreground space-y-1">*/}
        {/*            <li>• Minimal upfront investment</li>*/}
        {/*            <li>• Low service fees</li>*/}
        {/*            <li>• Automatic updates</li>*/}
        {/*            <li>• Use existing devices</li>*/}
        {/*          </ul>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">*/}
        {/*      Learn More About Our Solutions*/}
        {/*    </Button>*/}
        {/*  </div>*/}

        {/*  <div className="relative">*/}
        {/*    <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/30 rounded-3xl blur-2xl"></div>*/}
        {/*    <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">*/}
        {/*      <Image*/}
        {/*        src="/about-extra-2.svg"*/}
        {/*        alt="User-friendly POS system interface"*/}
        {/*        width={500}*/}
        {/*        height={400}*/}
        {/*        className="w-full h-auto rounded-lg"*/}
        {/*      />*/}
        {/*    </div>*/}

        {/*    <div className="absolute -top-4 -right-4 bg-card border border-accent/20 rounded-lg p-3 shadow-lg backdrop-blur-sm">*/}
        {/*      <div className="flex items-center gap-2">*/}
        {/*        <div className="w-2 h-2 bg-primary rounded-full"></div>*/}
        {/*        <span className="text-sm font-medium">Easy Setup</span>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
