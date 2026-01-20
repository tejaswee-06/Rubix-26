import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              src={logo}
              alt="Nagar Mitra"
              className="h-10 md:h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold gradient-text font-display">
                Nagar Mitra
              </h1>
              <p className="text-[10px] text-muted-foreground -mt-1">
                Empowering Vendors
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            <Link to="/login" className="hidden md:block">
              <Button
                variant="outline"
                className="rounded-full border-primary/50 hover:bg-primary/10 hover:border-primary"
              >
                Login
              </Button>
            </Link>
            
            <Link to="/register/vendor" className="hidden md:block">
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
                Register Now
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start rounded-xl ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : ""
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              <Link to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full rounded-xl">
                  Login
                </Button>
              </Link>
              <Link to="/register/vendor" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button className="w-full rounded-xl bg-primary text-primary-foreground">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
