import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ModernKitchen from "./pages/ProjectDetails/ModernKitchen";
import CozyBedroom from "./pages/ProjectDetails/CozyBedroom";
import CorporateOffice from "./pages/ProjectDetails/CorporateOffice";
import LuxuryLobby from "./pages/ProjectDetails/LuxuryLobby";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/modern-kitchen" element={<ModernKitchen />} />
          <Route path="/projects/cozy-bedroom" element={<CozyBedroom />} />
          <Route path="/projects/corporate-office" element={<CorporateOffice />} />
          <Route path="/projects/luxury-lobby" element={<LuxuryLobby />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
