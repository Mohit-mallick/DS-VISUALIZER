"use client"

import { Binary, Home, Database, TreePine, List, SquareStack, SquareChevronLeft, Equal, MessageSquare, X, Hash, ArrowRightLeft, Linkedin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "@/components/navigation/nav-main"
import { NavProjects } from "@/components/navigation/nav-projects"
import { NavUser } from "@/components/navigation/nav-user"

const navItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Data Structures",
    url: "/visualizer",
    icon: Database,
  },
]

const dataStructures = [
  {
    name: "Stack",
    url: "/visualizer/stack",
    icon: SquareStack,
    description: "LIFO data structure with push and pop operations",
  },  
  {
    name: "Queue",
    url: "/visualizer/queue",
    icon: SquareChevronLeft,
    description: "FIFO data structure with enqueue and dequeue operations",
  },  
  {
    name: "Linked List",
    url: "/visualizer/linked-list",
    icon: List,
    description: "Linear data structure with elements linked using pointers",
  },
  {
    name: "Binary Search Tree",
    url: "/visualizer/binary-tree",
    icon: Binary,
    description: "Basic binary tree with BST properties",
  },
  {
    name: "AVL Tree",
    url: "/visualizer/avl-tree",
    icon: TreePine,
    description: "Self-balancing binary search tree",
  },
  {
    name: "Heap",
    url: "/visualizer/heap",
    icon: Database,
    description: "Binary heap implementation with max/min heap variants",
  },
]

const applications = [
  {
    name: "Message Queue",
    url: "/visualizer/queue-applications",
    icon: MessageSquare,
    description: "Asynchronous message processing system with producers and consumers",
  },
  {
    name: "Infix to Postfix Conversion",
    url: "/visualizer/stack-applications",
    icon: Equal,
    description: "Convert infix expressions to postfix notation using a stack",
  },
  {
    name: "Polynomial Multiplication",
    url: "/visualizer/polynomial",
    icon: X,
    description: "Multiply two polynomials using linked lists",
  },
  {
    name: "Huffman Coding",
    url: "/visualizer/huffman",
    icon: Hash,
    description: "Huffman coding is a popular data compression technique that creates variable-length prefix codes based on the frequency of characters in the input text.",
  },
  {
    name: "Dijkstra's Algorithm",
    url: "/visualizer/dijkstra",
    icon: ArrowRightLeft,
    description: "Dijkstra's algorithm is a graph search algorithm that finds the shortest path between nodes in a graph.",
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-6 py-4 border-b flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image src="/gear-code.svg" alt="Logo" width={32} height={32} className="text-foreground" />
          </motion.div>
          <h1 className="text-lg font-semibold">DS Visualizer</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
        <NavProjects
          title="Data Structures"
          projects={dataStructures.map(ds => ({
            name: ds.name,
            url: ds.url,
            icon: ds.icon,
            description: ds.description,
          }))}
        />
        <NavProjects
          title="Applications"
          projects={applications.map(app => ({
            name: app.name,
            url: app.url,
            icon: app.icon,
            description: app.description,
          }))}
        />
      </SidebarContent>
      <SidebarFooter>
        <div className="px-6 py-4 border-t flex flex-col items-start gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">Built by</span>
            <a 
              href="https://www.linkedin.com/in/mohitmallickwz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
            >
              Mohit Mallick
            </a>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}