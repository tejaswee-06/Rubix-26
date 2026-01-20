import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Login from "./pages/Login";
import VendorRegistration from "./pages/register/VendorRegistration";
import Dashboard from "./pages/Dashboard";
import VendorRegistrationFeature from "./pages/features/VendorRegistrationFeature";
import PermitManagement from "./pages/features/PermitManagement";
import ZoneAllocation from "./pages/features/ZoneAllocation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="nagar-mitra-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/features" element={<Features />} />
                <Route path="/features/vendor-registration" element={<VendorRegistrationFeature />} />
                <Route path="/features/permit-management" element={<PermitManagement />} />
                <Route path="/features/zone-allocation" element={<ZoneAllocation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register/vendor" element={<VendorRegistration />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
