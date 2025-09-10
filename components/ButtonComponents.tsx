"use client";
import { Button } from "@/components/ui/button";
import { Phone, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
        <Link
          href={href}
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
           {label}
        </Link>
      </Button>
  );
}