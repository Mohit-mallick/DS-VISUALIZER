"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <motion.footer 
      className="w-full py-4 backdrop-blur-md bg-background/60 border-t"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-center items-center">
        <motion.div 
          className="flex items-center gap-2 text-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-muted-foreground">Built by</span>
          <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Your Name
          </span>
        </motion.div>
      </div>
    </motion.footer>
  )
}