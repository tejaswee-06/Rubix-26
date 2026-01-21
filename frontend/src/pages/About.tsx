import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Smartphone,
  Building2,
  UserCircle,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Eye,
  HandHeart,
  Users,
  Target,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepCard } from "@/components/StepCard";

const problems = [
  {
    icon: Shield,
    title: "Legal Security",
    description:
      "Helping vendors understand and obtain necessary permits, ensuring they operate with legal protection and confidence.",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Digital Integration",
    description:
      "Moving from paper-based systems to easy mobile access, making permit management accessible anytime, anywhere.",
    color: "teal",
  },
  {
    icon: Building2,
    title: "Urban Harmony",
    description:
      "Promoting organized street vending that benefits both vendors and the city, creating thriving urban spaces.",
    color: "orange",
  },
];

const steps = [
  {
    icon: UserCircle,
    title: "Registration",
    description:
      "Vendors register on the platform with their basic information and required documents.",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description:
      "Authorities verify submitted documents and conduct necessary background checks.",
  },
  {
    icon: CheckCircle2,
    title: "Permit Issuance",
    description:
      "Upon approval, vendors receive their digital permit with QR code verification.",
  },
];

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear processes and real-time tracking ensure vendors always know their application status.",
  },
  {
    icon: HandHeart,
    title: "Accessibility",
    description:
      "Designed to be simple and inclusive, ensuring every vendor can navigate the system easily.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description:
      "Giving street vendors the tools and recognition they need to thrive in the formal economy.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero / Mission Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                <Target className="inline h-4 w-4 mr-2" />
                Our Mission
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display leading-tight">
              Bridging Street Vendors &{" "}
              <span className="gradient-text">Urban Governance</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Nagar Mitra aims to simplify permits and compliance for street
              vendors, creating a transparent bridge between informal commerce
              and formal urban governance. We believe every vendor deserves
              dignity, security, and the opportunity to thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Problems We Solve */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-display">
              Key Problems We Solve
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Addressing the core challenges faced by street vendors and urban
              authorities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {problems.map((problem, index) => {
              const colorClasses = {
                primary: {
                  bg: "bg-primary/10",
                  text: "text-primary",
                  border: "border-primary/20",
                },
                teal: {
                  bg: "bg-teal/10",
                  text: "text-teal",
                  border: "border-teal/20",
                },
                orange: {
                  bg: "bg-orange/10",
                  text: "text-orange",
                  border: "border-orange/20",
                },
              }[problem.color];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-card border ${colorClasses.border} rounded-2xl p-8 shadow-card text-center card-hover`}
                >
                  <div
                    className={`h-16 w-16 rounded-2xl ${colorClasses.bg} flex items-center justify-center mx-auto mb-6`}
                  >
                    <problem.icon className={`h-8 w-8 ${colorClasses.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">The Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-display">
              How It Works
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A simple three-step journey from registration to permit issuance
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

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-display">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
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
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join Nagar Mitra today and take the first step towards a secure,
              transparent vending experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register/vendor">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon"
                >
                  Register as Vendor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg"
                >
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
