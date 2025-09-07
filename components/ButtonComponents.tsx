"use client";
import { Button } from "@/components/ui/button";
import { Phone, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ButtonComponents({
  label,
  className,
  Icon = Phone, // иконка по умолчанию
  href = "",
}: {
  label: string;
  Icon?: LucideIcon; // или React.ElementType
  href?: string;
  className?: string; 
}) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        asChild
        size="lg"
        className={cn("h-11 px-6 rounded bg-main", className)}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
           {label}
        </a>
      </Button>
    </motion.div>
  );
}