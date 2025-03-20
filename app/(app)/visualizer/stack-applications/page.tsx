"use client"

import { InfixPostfixVisualizer } from "@/components/visualizer/stack-applications/infix-postfix-visualizer"
import content from "./stack-applications.mdx"

export default function StackApplicationsPage() {
  return <InfixPostfixVisualizer content={content} />
}