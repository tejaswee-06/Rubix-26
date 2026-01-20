import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Map,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const zones = [
  {
    name: "Zone A - Main Market",
    capacity: 150,
    occupied: 120,
    color: "bg-primary",
    status: "Available",
  },
  {
    name: "Zone B - Railway Station",
    capacity: 80,
    occupied: 78,
    color: "bg-orange",
    status: "Almost Full",
  },
  {
    name: "Zone C - Bus Stand",
    capacity: 100,
    occupied: 65,
    color: "bg-primary",
    status: "Available",
  },
  {
    name: "Zone D - Commercial Area",
    capacity: 120,
    occupied: 120,
    color: "bg-destructive",
    status: "Full",
  },
];

const timeSlots = [
  { slot: "Morning", time: "6 AM - 12 PM", available: true },
  { slot: "Afternoon", time: "12 PM - 6 PM", available: true },
  { slot: "Evening", time: "6 PM - 10 PM", available: false },
  { slot: "Full Day", time: "6 AM - 10 PM", available: true },
];

const features = [
  {
    icon: Map,
    title: "Zone Visualization",
    description: "Interactive maps showing all available zones",
  },
  {
    icon: Clock,
    title: "Flexible Time Slots",
    description: "Choose your preferred vending hours",
  },
  {
    icon: Users,
    title: "Fair Distribution",
    description: "Algorithm-based allocation for fair access",
  },
  {
    icon: CheckCircle2,
    title: "Conflict Prevention",
    description: "System prevents double-booking automatically",
  },
];

export default function ZoneAllocation() {
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
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-orange/10 mb-6">
              <MapPin className="h-8 w-8 text-orange" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Zone & Time-Slot Allocation
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Fair and transparent zone allocation system with flexible time slots 
              for organized and conflict-free vending.
            </p>
            <Link to="/register/vendor">
              <Button size="lg" className="rounded-full px-8 bg-orange text-accent-foreground">
                Request Zone
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Zone Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 font-display"
          >
            Available Zones
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-2xl border-border shadow-card h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className={`h-3 w-3 rounded-full ${zone.color}`} />
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          zone.status === "Available"
                            ? "bg-primary/10 text-primary"
                            : zone.status === "Almost Full"
                            ? "bg-orange/10 text-orange"
                            : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {zone.status}
                      </span>
                    </div>
                    <CardTitle className="text-base">{zone.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Capacity</span>
                        <span className="font-medium">{zone.occupied}/{zone.capacity}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${zone.color}`}
                          style={{ width: `${(zone.occupied / zone.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Slots */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 font-display"
          >
            Time Slot Selection
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {timeSlots.map((slot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-2xl border text-center cursor-pointer transition-all ${
                  slot.available
                    ? "border-border hover:border-primary bg-card shadow-card"
                    : "border-border bg-muted/50 opacity-60 cursor-not-allowed"
                }`}
              >
                <Clock className={`h-6 w-6 mx-auto mb-2 ${slot.available ? "text-primary" : "text-muted-foreground"}`} />
                <h3 className="font-semibold text-foreground">{slot.slot}</h3>
                <p className="text-sm text-muted-foreground">{slot.time}</p>
                {!slot.available && (
                  <span className="text-xs text-destructive mt-2 block">Fully Booked</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-card"
              >
                <div className="h-12 w-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
