"use client"

import { MessageQueueVisualizer } from "@/components/visualizer/queue-applications/message-queue-visualizer"
import content from "./message-queue.mdx"

export default function MessageQueuePage() {
  return <MessageQueueVisualizer content={content} />
}