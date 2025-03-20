"use client"

import { PolynomialVisualizer } from "@/components/visualizer/polynomial/polynomial-visualizer"
import content from "./polynomial.mdx"

export default function PolynomialPage() {
  return <PolynomialVisualizer content={content} />
}