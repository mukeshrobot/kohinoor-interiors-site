import React, { useEffect } from 'react';
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
import Kitchen from "./pages/Kitchen";
import Bedroom from "./pages/Bedroom";
import Living from "./pages/Living";
import SocialFloating from "@/components/Layout/SocialFloating";

const queryClient = new QueryClient();

const App = () => {
  // Scroll position restoration for Vercel deployments
  useEffect(() => {
    // Save scroll position before page unload
    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    // Restore scroll position after page load
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        // Use setTimeout to ensure DOM is fully loaded
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition));
          sessionStorage.removeItem('scrollPosition');
        }, 100);
      }
    };

    // Handle beforeunload event
    window.addEventListener('beforeunload', saveScrollPosition);
    
    // Handle page load/refresh
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', restoreScrollPosition);
    } else {
      restoreScrollPosition();
    }

    // Handle popstate (back/forward navigation)
    window.addEventListener('popstate', restoreScrollPosition);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      document.removeEventListener('DOMContentLoaded', restoreScrollPosition);
      window.removeEventListener('popstate', restoreScrollPosition);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/bedroom" element={<Bedroom />} />
            <Route path="/living" element={<Living />} />
            <Route path="/projects/modern-kitchen" element={<ModernKitchen />} />
            <Route path="/projects/cozy-bedroom" element={<CozyBedroom />} />
            <Route path="/projects/corporate-office" element={<CorporateOffice />} />
            <Route path="/projects/luxury-lobby" element={<LuxuryLobby />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <SocialFloating />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
