import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-background"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-accent/5"></div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Transform Your Business with Our{" "}
                <span className="text-primary">Cloud-Based POS</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                Innovative, secure, and easy to use. Streamline your operations with our
                cutting-edge point-of-sale solution designed for modern businesses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by 10,000+ businesses worldwide
              </p>
              <div className="flex items-center gap-6 opacity-60">
                <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-medium">
                  Partner 1
                </div>
                <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-medium">
                  Partner 2
                </div>
                <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-medium">
                  Partner 3
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
              <Image
                src="/intro-img.svg"
                alt="Cloud-based POS solution interface"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            <div className="absolute -top-4 -left-4 bg-card border border-accent/20 rounded-lg p-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Cloud Sync</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-card border border-accent/20 rounded-lg p-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Real-time Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>
    </div>
  );
}
