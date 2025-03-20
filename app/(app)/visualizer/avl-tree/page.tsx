"use client"

import { AVLTreeVisualizer } from "@/components/visualizer/avl-tree/avl-tree-visualizer"
import content from "./avl-tree.mdx"
import { ReactNode } from "react"

export default function AVLTreePage() {
  return <AVLTreeVisualizer content={content as ReactNode} />
}