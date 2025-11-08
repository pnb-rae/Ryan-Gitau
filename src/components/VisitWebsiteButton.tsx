import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface VisitWebsiteButtonProps {
  url?: string;
  variant?: "default" | "outline" | "sidebar";
  className?: string;
}

export default function VisitWebsiteButton({ url, variant = "default", className = "" }: VisitWebsiteButtonProps) {
  if (!url) {
    return (
      <div className={`text-sm text-muted-foreground italic ${className}`}>
        Live demo not available
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          asChild
          className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground ${className}`}
          size="lg"
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Website
          </a>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        asChild
        variant={variant === "outline" ? "outline" : "default"}
        className={`${variant === "default" ? "bg-primary hover:bg-primary/90" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"} ${className}`}
        size="lg"
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <ExternalLink className="w-5 h-5" />
          Visit Website
        </a>
      </Button>
    </motion.div>
  );
}
