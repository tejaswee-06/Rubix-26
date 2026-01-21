import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  UserCircle,
  CheckCircle2,
  Upload,
  FileCheck,
  ArrowRight,
  Shield,
  Clock,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: UserCircle,
    title: "Personal Information",
    description: "Enter your basic details like name, phone, and address",
  },
  {
    icon: FileCheck,
    title: "Vending Category",
    description: "Select what type of products you sell and preferred zone",
  },
  {
    icon: Upload,
    title: "Document Upload",
    description: "Upload Aadhaar, photo, and address proof",
  },
  {
    icon: CheckCircle2,
    title: "Verification",
    description: "Get verified and receive your digital vendor ID",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Legal Protection",
    description: "Operate with confidence with official documentation",
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: "Complete registration in under 10 minutes",
  },
  {
    icon: Globe,
    title: "24/7 Access",
    description: "Manage your profile anytime, anywhere",
  },
];

export default function VendorRegistrationFeature() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-6">
              <UserCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Digital Vendor Registration & Profiling
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Complete your vendor registration online with our simple, secure, 
              and paperless process. Get your digital vendor ID in minutes.
            </p>
            <Link to="/register/vendor">
              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground shadow-neon">
                Start Registration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 font-display"
          >
            Registration Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 font-display"
          >
            Why Register Digitally?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-card"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of registered vendors today
            </p>
            <Link to="/register/vendor">
              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground shadow-neon">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
