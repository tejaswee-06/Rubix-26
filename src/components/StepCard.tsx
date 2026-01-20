import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function StepCard({ number, icon: Icon, title, description, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-start gap-6">
        {/* Step Number */}
        <div className="relative flex-shrink-0">
          <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-neon">
            <span className="text-2xl font-bold text-primary-foreground font-display">
              {number}
            </span>
          </div>
          {/* Connector Line */}
          {number < 3 && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent hidden md:block" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pt-2">
          <div className="flex items-center gap-3 mb-2">
            <Icon className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
