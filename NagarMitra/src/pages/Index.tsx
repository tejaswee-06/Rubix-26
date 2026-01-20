import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  MapPin,
  FileCheck,
  UserCircle,
  Clipboard,
  QrCode,
  Star,
  ShieldAlert,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurText from "@/components/BlurText";
import { StatCard } from "@/components/StatCard";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import heroBg from "@/assets/hero-bg.png";

const stats = [
  { icon: Building2, value: 50, suffix: "+", label: "Cities Covered" },
  { icon: FileCheck, value: 12500, suffix: "+", label: "Permits Issued" },
  { icon: MapPin, value: 150, suffix: "+", label: "Vending Zones" },
];

const features = [
  {
    icon: UserCircle,
    title: "Digital Vendor Registration",
    description: "Quick and easy registration with digital profile management for all street vendors.",
    link: "/features/vendor-registration",
    color: "primary" as const,
  },
  {
    icon: FileCheck,
    title: "Permit Management",
    description: "Apply, track, and renew permits online with real-time status updates.",
    link: "/features/permit-management",
    color: "teal" as const,
  },
  {
    icon: MapPin,
    title: "Zone Allocation",
    description: "Smart zone and time-slot allocation for fair and organized vending.",
    link: "/features/zone-allocation",
    color: "orange" as const,
  },
  {
    icon: Clipboard,
    title: "Compliance Tracking",
    description: "Digital checklists and alerts to maintain hygiene and safety standards.",
    link: "/features/compliance",
    color: "primary" as const,
  },
  {
    icon: QrCode,
    title: "QR Verification",
    description: "Instant vendor verification through unique QR codes for transparency.",
    link: "/features/qr-verification",
    color: "teal" as const,
  },
  {
    icon: Star,
    title: "Feedback System",
    description: "Public reviews and safety ratings for improved vendor accountability.",
    link: "/features/feedback",
    color: "orange" as const,
  },
  {
    icon: ShieldAlert,
    title: "Grievance Portal",
    description: "Transparent dispute resolution with complete audit trails.",
    link: "/features/grievance",
    color: "primary" as const,
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Real-time analytics on footfall, peak hours, and revenue trends.",
    link: "/features/market-insights",
    color: "teal" as const,
  },
];

const steps = [
  {
    icon: UserCircle,
    title: "Register & Create Profile",
    description: "Sign up with your details, upload documents, and create your vendor profile in minutes.",
  },
  {
    icon: FileCheck,
    title: "Apply for Permit",
    description: "Choose your vending zone, time slot, and submit your permit application online.",
  },
  {
    icon: CheckCircle2,
    title: "Get Verified & Start",
    description: "Receive your digital permit with QR code and start your vending journey legally.",
  },
];

const benefits = {
  vendors: [
    "Easy permit application from anywhere",
    "Digital ID with QR verification",
    "Fair zone allocation system",
    "Access to market insights",
    "Grievance resolution support",
  ],
  authorities: [
    "Centralized vendor database",
    "Real-time compliance monitoring",
    "GIS-based zone management",
    "Automated alerts & reports",
    "Transparent audit trails",
  ],
};

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        {/* Animated Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-50 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                🇮🇳 A Government of India Initiative
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display leading-tight">
              <BlurText
                text="Making Street Vending Simple, Safe & Transparent"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              A digital platform that helps street vendors manage permits easily 
              while helping cities stay organized and fair.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/register/vendor">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon pulse-neon"
                >
                  Register as Vendor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-primary/50 hover:bg-primary/10"
                >
                  Authority Login
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  {...stat}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-display">
              How Nagar Mitra Works
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Get started with your digital vending journey in three simple steps
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                number={index + 1}
                {...step}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-display">
              Benefits for Everyone
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vendors Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 shadow-card"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <UserCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">For Vendors</h3>
              <ul className="space-y-4">
                {benefits.vendors.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Authorities Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 shadow-card"
            >
              <div className="h-14 w-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">For Authorities</h3>
              <ul className="space-y-4">
                {benefits.authorities.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">Comprehensive Platform</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-display">
              Features Overview
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Everything you need to manage street vending efficiently
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Ready to Join the{" "}
              <span className="gradient-text">Digital Revolution?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of vendors who have already simplified their permit management 
              with Nagar Mitra.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register/vendor">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
