import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileCheck,
  MapPin,
  AlertTriangle,
  QrCode,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const vendorStats = [
  { label: "Permit Status", value: "Active", icon: FileCheck, color: "text-primary" },
  { label: "Zone Assigned", value: "Zone A", icon: MapPin, color: "text-teal" },
  { label: "Time Slot", value: "6AM - 12PM", icon: Clock, color: "text-orange" },
  { label: "Compliance Score", value: "92%", icon: Star, color: "text-yellow" },
];

const alerts = [
  { type: "warning", message: "Permit renewal due in 15 days", date: "Jan 25, 2026" },
  { type: "info", message: "New compliance checklist available", date: "Jan 18, 2026" },
  { type: "success", message: "Monthly inspection passed", date: "Jan 15, 2026" },
];

const alertIcons = {
  warning: AlertTriangle,
  info: CheckCircle2,
  success: CheckCircle2,
};

const alertColors = {
  warning: "text-orange bg-orange/10 border-orange/20",
  info: "text-primary bg-primary/10 border-primary/20",
  success: "text-primary bg-primary/10 border-primary/20",
};

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-20 px-4 py-8">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold text-foreground font-display">
              Vendor Dashboard
            </h1>
          </div>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your vending activity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {vendorStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="rounded-2xl border-border shadow-card">
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className={`text-2xl font-bold ${stat.color} mt-1`}>{stat.value}</p>
                        </div>
                        <div className={`h-12 w-12 rounded-xl bg-muted flex items-center justify-center ${stat.color}`}>
                          <stat.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Compliance Score Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="rounded-2xl border-border shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Compliance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Overall Score</span>
                        <span className="font-bold text-primary">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">Hygiene</p>
                        <p className="font-bold text-primary">95%</p>
                      </div>
                      <div className="text-center">
                        <div className="h-12 w-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-2">
                          <CheckCircle2 className="h-6 w-6 text-teal" />
                        </div>
                        <p className="text-xs text-muted-foreground">Safety</p>
                        <p className="font-bold text-teal">90%</p>
                      </div>
                      <div className="text-center">
                        <div className="h-12 w-12 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-2">
                          <CheckCircle2 className="h-6 w-6 text-orange" />
                        </div>
                        <p className="text-xs text-muted-foreground">Documentation</p>
                        <p className="font-bold text-orange">91%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Market Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="rounded-2xl border-border shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Today's Market Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-xl">
                      <p className="text-2xl font-bold text-foreground">
                        <AnimatedCounter end={1250} />
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Footfall Today</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-xl">
                      <p className="text-2xl font-bold text-primary">10-12 AM</p>
                      <p className="text-xs text-muted-foreground mt-1">Peak Hours</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-xl">
                      <p className="text-2xl font-bold text-teal">High</p>
                      <p className="text-xs text-muted-foreground mt-1">Demand Level</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* QR Code Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="rounded-2xl border-border shadow-card overflow-hidden">
                <div className="bg-gradient-primary p-4">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <QrCode className="h-5 w-5" />
                    <span className="font-semibold">Your Vendor QR</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="bg-muted rounded-xl p-6 flex items-center justify-center mb-4">
                    <div className="h-32 w-32 bg-foreground rounded-lg flex items-center justify-center">
                      <QrCode className="h-20 w-20 text-background" />
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Vendor ID: <span className="font-mono font-medium text-foreground">NM-2026-001234</span>
                  </p>
                  <Button variant="outline" className="w-full mt-4 rounded-xl">
                    Download QR Code
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Alerts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="rounded-2xl border-border shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange" />
                    Alerts & Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {alerts.map((alert, index) => {
                    const AlertIcon = alertIcons[alert.type as keyof typeof alertIcons];
                    return (
                      <div
                        key={index}
                        className={`p-3 rounded-xl border ${alertColors[alert.type as keyof typeof alertColors]}`}
                      >
                        <div className="flex items-start gap-3">
                          <AlertIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">{alert.message}</p>
                            <p className="text-xs opacity-70 mt-1">{alert.date}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="rounded-2xl border-border shadow-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start rounded-xl">
                    <FileCheck className="h-4 w-4 mr-2" />
                    Renew Permit
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-xl">
                    <MapPin className="h-4 w-4 mr-2" />
                    Change Zone
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-xl">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    File Grievance
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
