import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileCheck,
  Clock,
  Bell,
  CheckCircle2,
  XCircle,
  RefreshCcw,
  ArrowRight,
  Calendar,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const permitStages = [
  { status: "Submitted", date: "Jan 10, 2026", completed: true },
  { status: "Document Verification", date: "Jan 12, 2026", completed: true },
  { status: "Field Inspection", date: "Jan 15, 2026", completed: true },
  { status: "Approval", date: "Jan 18, 2026", completed: false, current: true },
  { status: "Permit Issued", date: "Pending", completed: false },
];

const features = [
  {
    icon: FileText,
    title: "Online Application",
    description: "Apply for permits digitally without visiting offices",
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Track your application status at every stage",
  },
  {
    icon: Bell,
    title: "Auto Reminders",
    description: "Get notified before permit expiry for timely renewal",
  },
  {
    icon: RefreshCcw,
    title: "Easy Renewal",
    description: "One-click renewal process for existing permit holders",
  },
];

export default function PermitManagement() {
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
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-teal/10 mb-6">
              <FileCheck className="h-8 w-8 text-teal" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Permit Issuance & Renewal
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Streamlined permit management with online application, real-time tracking, 
              and automated renewal reminders.
            </p>
            <Link to="/register/vendor">
              <Button size="lg" className="rounded-full px-8 bg-teal text-secondary-foreground">
                Apply for Permit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 font-display"
          >
            Application Status Timeline
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            <Card className="rounded-2xl border-border shadow-card">
              <CardContent className="p-6">
                {permitStages.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          stage.completed
                            ? "bg-primary text-primary-foreground"
                            : stage.current
                            ? "bg-teal/20 text-teal border-2 border-teal"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {stage.completed ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <span className="text-sm font-medium">{index + 1}</span>
                        )}
                      </div>
                      {index < permitStages.length - 1 && (
                        <div
                          className={`w-0.5 h-12 ${
                            stage.completed ? "bg-primary" : "bg-border"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-medium ${
                            stage.current ? "text-teal" : "text-foreground"
                          }`}
                        >
                          {stage.status}
                        </h3>
                        <span className="text-sm text-muted-foreground">{stage.date}</span>
                      </div>
                      {stage.current && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Currently in progress...
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-card card-hover"
              >
                <div className="h-12 w-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
              Need to Renew Your Permit?
            </h2>
            <p className="text-muted-foreground mb-6">
              Existing vendors can renew permits with just one click
            </p>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-teal text-teal hover:bg-teal/10">
              <RefreshCcw className="mr-2 h-5 w-5" />
              Renew Permit
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
