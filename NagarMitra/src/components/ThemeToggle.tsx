import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative h-10 w-10 rounded-full bg-muted/50 hover:bg-muted transition-colors"
    >
      <motion.div
        initial={false}
        animate={{
          scale: resolvedTheme === "dark" ? 0 : 1,
          rotate: resolvedTheme === "dark" ? -90 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-orange" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: resolvedTheme === "dark" ? 1 : 0,
          rotate: resolvedTheme === "dark" ? 0 : 90,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-primary" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
