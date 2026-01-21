import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Clipboard,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Dot,
  TrendingUp,
  Loader,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { complianceAPI, alertsAPI } from "@/lib/api";

interface ChecklistItem {
  id: number;
  title: string;
  category: string;
  status: "completed" | "pending" | "expired";
  expiryDate: string;
}

interface Alert {
  id: number;
  message: string;
  type: "critical" | "warning";
  date: string;
  isRead: boolean;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "expired":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-4 w-4" />;
    case "pending":
      return <Clock className="h-4 w-4" />;
    case "expired":
      return <AlertTriangle className="h-4 w-4" />;
    default:
      return null;
  }
};

const getScoreColor = (score: number) => {
  if (score >= 80) return "text-green-500";
  if (score >= 50) return "text-yellow-500";
  return "text-red-500";
};

export default function CompliancePage() {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [complianceScore, setComplianceScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [completedCount, setCompletedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // Fetch compliance data
  const fetchComplianceData = async () => {
    try {
      setLoading(true);
      const response = await complianceAPI.getCompliance();
      setChecklistItems(response.data.checklist);
      setComplianceScore(response.data.score);
      setCompletedCount(response.data.completed);
      setTotalCount(response.data.total);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching compliance data:", err);
      setError("Failed to load compliance data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch alerts data
  const fetchAlertsData = async () => {
    try {
      const response = await alertsAPI.getAlerts();
      setAlerts(response.data.alerts);
    } catch (err: any) {
      console.error("Error fetching alerts:", err);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchComplianceData();
    fetchAlertsData();
  }, []);

  const handleChecklistToggle = async (id: number) => {
    try {
      await complianceAPI.markCompleted(id);
      await fetchComplianceData();
    } catch (err: any) {
      console.error("Error updating checklist:", err);
      setError("Failed to update checklist item.");
    }
  };

  const handleMarkAlertAsRead = async (id: number) => {
    try {
      await alertsAPI.markRead(id);
      await fetchAlertsData();
    } catch (err: any) {
      console.error("Error marking alert as read:", err);
    }
  };

  const unreadCount = alerts.filter((alert) => !alert.isRead).length;

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Card className="rounded-2xl border-border shadow-card">
          <CardContent className="p-12 text-center">
            <Loader className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
            <p className="text-muted-foreground">Loading compliance data...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-teal/10 mb-6">
              <Clipboard className="h-8 w-8 text-teal" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Compliance Checklist & Alerts
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay on top of your compliance requirements with automated alerts,
              real-time tracking, and digital checklists for all your
              certifications and licenses.
            </p>
            <Link to="/dashboard">
              <Button
                size="lg"
                className="rounded-full px-8 bg-teal text-secondary-foreground"
              >
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <section className="py-4 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-xl border-red-200 bg-red-50">
              <CardContent className="p-4 flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800">{error}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Compliance Score Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 font-display"
          >
            Your Compliance Score
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Main Score Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <Card className="rounded-2xl border-border shadow-card h-full">
                <CardContent className="p-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Overall Compliance Status
                    </p>
                    <p className="text-3xl font-bold text-foreground mb-4">
                      {complianceScore}%
                    </p>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">
                        {completedCount} of {totalCount} completed
                      </span>
                    </div>
                  </div>

                  <div className="relative h-40 w-40 flex items-center justify-center">
                    <svg
                      className="w-40 h-40 transform -rotate-90"
                      viewBox="0 0 120 120"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-border"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${(complianceScore / 100) * 314} 314`}
                        className={`transition-colors duration-500 ${getScoreColor(
                          complianceScore,
                        )}`}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span
                        className={`text-2xl font-bold ${getScoreColor(
                          complianceScore,
                        )}`}
                      >
                        {complianceScore}%
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">
                        Score
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Status Legend */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl border-border shadow-card h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Status Guide
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm text-muted-foreground">
                        Completed
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm text-muted-foreground">
                        Pending
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <span className="text-sm text-muted-foreground">
                        Expired
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-2">
                      Recommendations:
                    </div>
                    <ul className="text-xs space-y-2 text-muted-foreground">
                      <li>• Renew Fire Safety Certificate immediately</li>
                      <li>• Schedule FSSAI renewal before Feb 1</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 font-display"
          >
            Your Checklist ({checklistItems.length} items)
          </motion.h2>

          <div className="max-w-4xl mx-auto grid gap-4">
            {checklistItems.length === 0 ? (
              <Card className="rounded-xl border-border shadow-card">
                <CardContent className="p-8 text-center">
                  <Loader className="h-12 w-12 text-muted-foreground mx-auto mb-4 animate-spin" />
                  <p className="text-muted-foreground">
                    Loading checklist items...
                  </p>
                </CardContent>
              </Card>
            ) : (
              checklistItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="rounded-xl border-border shadow-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <button
                          onClick={() => handleChecklistToggle(item.id)}
                          className="mt-1 flex-shrink-0 focus:outline-none"
                        >
                          <div
                            className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${
                              item.status === "completed"
                                ? "bg-green-500 border-green-500"
                                : "border-border hover:border-primary"
                            }`}
                          >
                            {item.status === "completed" && (
                              <CheckCircle2 className="h-4 w-4 text-white" />
                            )}
                          </div>
                        </button>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="font-semibold text-foreground text-lg">
                              {item.title}
                            </h3>
                            <Badge
                              className={`${getStatusColor(
                                item.status,
                              )} flex items-center gap-1.5`}
                            >
                              {getStatusIcon(item.status)}
                              <span className="capitalize">
                                {item.status === "completed"
                                  ? "Completed"
                                  : item.status === "pending"
                                    ? "Pending"
                                    : "Expired"}
                              </span>
                            </Badge>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground">
                              {item.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              Expires:{" "}
                              {new Date(item.expiryDate).toLocaleDateString()}
                            </span>
                          </div>

                          {item.status !== "completed" && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleChecklistToggle(item.id)}
                              className="rounded-lg"
                            >
                              {item.status === "expired"
                                ? "Renew Now"
                                : "Mark Completed"}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
                Alerts & Notifications
              </h2>
              {unreadCount > 0 && (
                <Badge className="bg-red-500 text-white rounded-full px-3 py-1">
                  {unreadCount} unread
                </Badge>
              )}
            </motion.div>

            <div className="grid gap-4">
              {alerts.length === 0 ? (
                <Card className="rounded-xl border-border shadow-card">
                  <CardContent className="p-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      No alerts! You're all caught up.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                alerts.map((alert, index) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      className={`rounded-xl border shadow-card transition-all cursor-pointer hover:shadow-lg ${
                        !alert.isRead ? "border-orange-300 bg-orange-50/30" : ""
                      }`}
                      onClick={() => handleMarkAlertAsRead(alert.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            {alert.type === "critical" ? (
                              <AlertCircle className="h-6 w-6 text-red-500" />
                            ) : (
                              <AlertTriangle className="h-6 w-6 text-yellow-500" />
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="font-semibold text-foreground mb-1">
                                  {alert.message}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(alert.date).toLocaleDateString()}
                                </p>
                              </div>

                              {!alert.isRead && (
                                <div className="flex-shrink-0">
                                  <Dot className="h-6 w-6 text-orange-500 fill-orange-500" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary text-primary-foreground"
              >
                View Full Alert History
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Card className="rounded-2xl border-border shadow-card bg-primary/5">
              <CardContent className="p-12">
                <AlertCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">
                  Stay Compliant
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Regular compliance monitoring helps you avoid penalties and
                  maintain your vendor status. We'll send you automatic
                  reminders for all upcoming expirations and renewals.
                </p>
                <Link to="/register/vendor">
                  <Button
                    size="lg"
                    className="rounded-full px-8 bg-primary text-primary-foreground"
                  >
                    Complete Your Registration
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
