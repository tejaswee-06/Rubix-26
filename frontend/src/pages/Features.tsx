import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  UserCircle,
  FileCheck,
  MapPin,
  Map,
  Clipboard,
  MessageSquare,
  QrCode,
  Star,
  ShieldAlert,
  TrendingUp,
  Zap,
  Calendar,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const mainFeatures = [
  {
    icon: UserCircle,
    title: "Digital Vendor Registration & Profiling",
    description: "Complete digital onboarding with identity verification, category selection, and profile management.",
    link: "/features/vendor-registration",
    color: "primary",
  },
  {
    icon: FileCheck,
    title: "Permit Issuance & Renewal",
    description: "Streamlined permit application, tracking, auto-renewal reminders, and digital certificates.",
    link: "/features/permit-management",
    color: "teal",
  },
  {
    icon: MapPin,
    title: "Zone & Time-Slot Allocation",
    description: "Fair and conflict-free zone allocation with customizable time slots for organized vending.",
    link: "/features/zone-allocation",
    color: "orange",
  },
  {
    icon: Map,
    title: "GIS-Based Vendor Mapping",
    description: "Interactive maps showing vendor locations, zones, and restricted areas in real-time.",
    link: "/features/gis-mapping",
    color: "primary",
  },
  {
    icon: Clipboard,
    title: "Compliance Checklist & Alerts",
    description: "Digital hygiene and safety checklists with automated compliance scoring and alerts.",
    link: "/features/compliance",
    color: "teal",
  },
  {
    icon: MessageSquare,
    title: "Grievance & Dispute Logging",
    description: "Transparent complaint management with ticket tracking and resolution timelines.",
    link: "/features/grievance",
    color: "orange",
  },
  {
    icon: QrCode,
    title: "QR Code Vendor Verification",
    description: "Instant verification of vendor authenticity through unique QR codes.",
    link: "/features/qr-verification",
    color: "primary",
  },
  {
    icon: Star,
    title: "Feedback & Safety Reviews",
    description: "Public rating system for vendor accountability and quality improvement.",
    link: "/features/feedback",
    color: "teal",
  },
  {
    icon: ShieldAlert,
    title: "Anti-Renting / Misuse Tracking",
    description: "AI-powered detection of permit misuse and unauthorized activities.",
    link: "/features/misuse-detection",
    color: "orange",
  },
  {
    icon: TrendingUp,
    title: "Market Real-Time Statistics",
    description: "Live analytics on footfall, peak hours, and revenue trends for informed decisions.",
    link: "/features/market-insights",
    color: "primary",
  },
];

const wowFeatures = [
  {
    icon: BarChart3,
    title: "Congestion-Aware Map",
    description: "Real-time congestion indicators with color-coded zones.",
    link: "/wow/congestion-map",
  },
  {
    icon: Zap,
    title: "Vendor Compliance Score",
    description: "Dynamic scoring with improvement recommendations.",
    link: "/wow/compliance-score",
  },
  {
    icon: Map,
    title: "Smart Zone Recommendation",
    description: "AI-powered zone suggestions based on vendor profile.",
    link: "/wow/smart-zones",
  },
  {
    icon: Calendar,
    title: "Festival/Event Allocation",
    description: "Special permits for festivals and events.",
    link: "/wow/event-allocation",
  },
];

const colorClasses: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  teal: "bg-teal/10 text-teal",
  orange: "bg-orange/10 text-orange",
};

export default function Features() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium">Platform Features</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 font-display">
              Everything You Need for{" "}
              <span className="gradient-text">Smart Vending</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive tools designed to simplify street vending management 
              for vendors and municipal authorities alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center font-display"
          >
            Core Features
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={feature.link} className="group block h-full">
                  <div className="h-full bg-card border border-border rounded-2xl p-6 shadow-card card-hover">
                    <div className={`h-12 w-12 rounded-xl ${colorClasses[feature.color]} flex items-center justify-center mb-4`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WOW Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              ✨ Advanced
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4 font-display">
              WOW Features
            </h2>
            <p className="text-muted-foreground mt-2">
              Innovative features powered by AI and real-time analytics
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {wowFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={feature.link} className="group block">
                  <div className="relative bg-card border border-border rounded-2xl p-6 shadow-card overflow-hidden card-hover">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-glow opacity-50 -translate-y-1/2 translate-x-1/2" />
                    <div className="relative">
                      <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                        <feature.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join Nagar Mitra today and experience hassle-free vending management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register/vendor">
                <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground shadow-neon">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Demo Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
