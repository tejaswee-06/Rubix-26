import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  delay?: number;
  color?: "primary" | "secondary" | "accent" | "teal" | "orange";
}

const colorClasses = {
  primary: "bg-primary/10 text-primary group-hover:bg-primary/20",
  secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary/20",
  accent: "bg-accent/10 text-accent group-hover:bg-accent/20",
  teal: "bg-teal/10 text-teal group-hover:bg-teal/20",
  orange: "bg-orange/10 text-orange group-hover:bg-orange/20",
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  link,
  delay = 0,
  color = "primary",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={link}>
        <div className="relative h-full bg-card border border-border rounded-2xl p-6 shadow-card card-hover overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative">
            <div className={`h-12 w-12 rounded-xl ${colorClasses[color]} flex items-center justify-center transition-colors mb-4`}>
              <Icon className="h-6 w-6" />
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {description}
            </p>
            
            <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
