import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

export function StatCard({ icon: Icon, value, suffix, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500" />
      <div className="relative bg-card border border-border rounded-2xl p-6 shadow-card group-hover:shadow-neon transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground font-display">
              <AnimatedCounter end={value} suffix={suffix} />
            </div>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
