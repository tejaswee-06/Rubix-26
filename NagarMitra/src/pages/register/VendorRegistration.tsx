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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import logo from "@/assets/logo.png";

const steps = [
  { id: 1, title: "Personal Details", icon: User },
  { id: 2, title: "Vending Info", icon: MapPin },
  { id: 3, title: "Documents", icon: FileText },
];

const vendingCategories = [
  "Food & Beverages",
  "Fruits & Vegetables",
  "Clothing & Textiles",
  "Handicrafts",
  "Electronics & Accessories",
  "Books & Stationery",
  "General Merchandise",
  "Other",
];

const zones = [
  "Zone A - Main Market",
  "Zone B - Railway Station",
  "Zone C - Bus Stand",
  "Zone D - Commercial Area",
  "Zone E - Residential Area",
];

export default function VendorRegistration() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

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
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="firstName" placeholder="Enter first name" className="pl-10 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" className="rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="Enter email address" className="pl-10 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="pl-10 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhaar">Aadhaar Number</Label>
                <Input id="aadhaar" placeholder="XXXX XXXX XXXX" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Residential Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <textarea
                    id="address"
                    placeholder="Enter your full address"
                    className="w-full pl-10 p-3 rounded-xl border border-input bg-background min-h-[80px] resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Vending Info */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Vending Information
              </h2>
              <div className="space-y-2">
                <Label>Vending Category</Label>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select your vending category" />
                  </SelectTrigger>
                  <SelectContent>
                    {vendingCategories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Preferred Zone</Label>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select preferred zone" />
                  </SelectTrigger>
                  <SelectContent>
                    {zones.map((zone) => (
                      <SelectItem key={zone} value={zone.toLowerCase()}>
                        {zone}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Preferred Time Slot</Label>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 6 PM)</SelectItem>
                    <SelectItem value="evening">Evening (6 PM - 10 PM)</SelectItem>
                    <SelectItem value="fullday">Full Day</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessName">Business/Stall Name (Optional)</Label>
                <Input id="businessName" placeholder="Enter your business name" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" type="number" placeholder="Enter years of experience" className="rounded-xl" />
              </div>
            </div>
          )}

          {/* Step 3: Documents */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Document Upload
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Please upload clear copies of the following documents
              </p>
              {["Aadhaar Card", "Passport Photo", "Address Proof"].map((doc, index) => (
                <div key={index} className="border border-dashed border-border rounded-xl p-4 hover:border-primary transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{doc}</p>
                        <p className="text-sm text-muted-foreground">PDF, JPG, PNG (Max 5MB)</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-lg">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                </div>
              ))}
              <div className="p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground">
                <p>By submitting this form, you agree to our Terms of Service and Privacy Policy.</p>
              </div>
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
              <Button onClick={nextStep} className="rounded-xl bg-primary text-primary-foreground">
                Next Step
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button className="rounded-xl bg-primary text-primary-foreground shadow-neon">
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
