import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "./pages/NotFound";
import AiChatDemo from "./pages/AiChatDemo";
import EcommerceDemo from "./pages/EcommerceDemo";
import ProjectDetails from "./pages/ProjectDetails";
import ContactPage from "./pages/ContactPage";
import BlogPost from "./pages/BlogPost";

import StarField from "@/components/StarField";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="ryan-portfolio-theme">
      <TooltipProvider>
        <StarField />
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/demo/ai-chat" element={<AiChatDemo />} />
            <Route path="/demo/ecommerce" element={<EcommerceDemo />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
