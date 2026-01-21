import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Upload,
  ChevronRight,
  ChevronLeft,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

const API_BASE = "http://localhost:3000";

const steps = [
  { id: 1, title: "Personal Details", icon: User },
  { id: 2, title: "Vending Info", icon: MapPin },
  { id: 3, title: "Documents", icon: FileText },
];

export default function VendorRegistration() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    aadhaar: "",
    address: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  /**
   * Called when "Next Step" is pressed.
   * Sends data ONLY when leaving Step 1.
   */
  const saveAndNextStep = async () => {
    if (currentStep === 1) {
      try {
        const payload = {
          email: formData.email,
          realName: `${formData.firstName} ${formData.lastName}`.trim(),
          password: "Temp@1234", // temporary system password
        };

        const res = await fetch(`${API_BASE}/api/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.error || "Failed to save data");
          return; // ❌ stop navigation
        }

        console.log("Account created, userId:", data.userId);
      } catch (err) {
        console.error("Save error:", err);
        alert("Server error while saving data");
        return;
      }
    }

    // ✅ move to next step only if save succeeded
    nextStep();
  };

  /**
   * Final submit (no extra network call for now)
   */
  const submitApplication = () => {
    console.log("Final submission completed");
    alert("Application submitted successfully");
  };

  return (
    <div className="min-h-screen pt-20 px-4 py-12">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <img src={logo} alt="Nagar Mitra" className="h-14 w-auto mx-auto mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold text-foreground font-display">
            Vendor Registration
          </h1>
          <p className="text-muted-foreground mt-1">
            Complete the form below to register as a street vendor
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center h-10 w-10 rounded-full border-2 transition-all ${
                  currentStep >= step.id
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-border text-muted-foreground"
                }`}
              >
                {currentStep > step.id ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <step.icon className="h-5 w-5" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-12 md:w-24 mx-2 transition-all ${
                    currentStep > step.id ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card"
        >
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Personal Details
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-10 rounded-xl"
                      onChange={(e) => handleChange("firstName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input
                    className="rounded-xl"
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    className="pl-10 rounded-xl"
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Mobile Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="tel"
                    className="pl-10 rounded-xl"
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Aadhaar Number</Label>
                <Input
                  className="rounded-xl"
                  onChange={(e) => handleChange("aadhaar", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Residential Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <textarea
                    className="w-full pl-10 p-3 rounded-xl border border-input bg-background min-h-[80px] resize-none"
                    onChange={(e) => handleChange("address", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Documents (visual-only) */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Document Upload
              </h2>

              {["Aadhaar Card", "Passport Photo", "Address Proof"].map((doc, i) => (
                <div
                  key={i}
                  className="border border-dashed border-border rounded-xl p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{doc}</span>
                    <Button variant="outline" size="sm" className="rounded-lg">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            {currentStep > 1 ? (
              <Button variant="outline" onClick={prevStep} className="rounded-xl">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="ghost" className="rounded-xl text-muted-foreground">
                  Already registered? Login
                </Button>
              </Link>
            )}

            {currentStep < 3 ? (
              <Button
                onClick={saveAndNextStep}
                className="rounded-xl bg-primary text-primary-foreground"
              >
                Next Step
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                className="rounded-xl bg-primary text-primary-foreground shadow-neon"
                onClick={submitApplication}
              >
                Submit Application
                <Check className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

