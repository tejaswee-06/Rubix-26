import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Building2, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@/assets/logo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("vendor");

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <img src={logo} alt="Nagar Mitra" className="h-16 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground font-display">
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-1">
            Sign in to continue to Nagar Mitra
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted">
              <TabsTrigger
                value="vendor"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
              >
                <User className="h-4 w-4 mr-2" />
                Vendor
              </TabsTrigger>
              <TabsTrigger
                value="authority"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
              >
                <Building2 className="h-4 w-4 mr-2" />
                Authority
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vendor" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vendor-email">Email or Phone</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="vendor-email"
                    type="email"
                    placeholder="Enter your email or phone"
                    className="pl-10 rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendor-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="vendor-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Button className="w-full rounded-xl bg-primary text-primary-foreground shadow-neon h-12">
                Sign In as Vendor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </TabsContent>

            <TabsContent value="authority" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="authority-email">Official Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="authority-email"
                    type="email"
                    placeholder="Enter official email"
                    className="pl-10 rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="authority-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="authority-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="p-3 bg-muted/50 rounded-xl text-sm text-muted-foreground">
                <Building2 className="h-4 w-4 inline mr-2" />
                Authority login requires official government credentials
              </div>
              <Button className="w-full rounded-xl bg-teal text-secondary-foreground h-12">
                Sign In as Authority
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link to="/register/vendor" className="text-primary hover:underline font-medium">
              Register as Vendor
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
