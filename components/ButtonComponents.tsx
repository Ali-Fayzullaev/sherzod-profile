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
  );
}