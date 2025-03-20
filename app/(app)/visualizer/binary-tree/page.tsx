"use client"

import { BinaryTreeVisualizer } from "@/components/visualizer/binary-tree/binary-tree-visualizer"
import content from "./binary-tree.mdx"

export default function BinaryTreePage() {
  return <BinaryTreeVisualizer content={content} />
}