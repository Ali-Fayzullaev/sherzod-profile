"use client";
import { Button } from "@/components/ui/button";
import { Phone, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function ButtonComponents({
  label,
  Icon = Phone, // иконка по умолчанию
  href = "",
}: {
  label: string;
  Icon?: LucideIcon; // или React.ElementType
  href?: string;
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
        className=" font-normal   px-10 py-4  bg-main "
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