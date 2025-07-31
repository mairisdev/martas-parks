"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        // Backdrop blur ar smooth animāciju
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-md",
        // Elegant fade animācijas
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "duration-300 ease-out",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          // Pamata izskats
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)]",
          "translate-x-[-50%] translate-y-[-50%]",
          
          // Skaists background ar gradient border
          "bg-white dark:bg-gray-950",
          "border border-gray-200/50 dark:border-gray-800/50",
          "rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30",
          
          // Glass morphism efekts
          "backdrop-blur-xl bg-white/95 dark:bg-gray-950/95",
          
          // Padding un spacing
          "p-8 gap-6",
          
          // Responsive sizing
          "sm:max-w-lg md:max-w-xl lg:max-w-2xl",
          
          // Smooth animācijas
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-96 data-[state=open]:zoom-in-105",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          "duration-300 ease-out",
          
          // Hover effects
          "hover:shadow-3xl transition-shadow",
          
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className={cn(
              // Pozicionēšana
              "absolute top-6 right-6",
              
              // Skaists button dizains
              "flex h-10 w-10 items-center justify-center",
              "rounded-xl bg-gray-100/80 dark:bg-gray-800/80",
              "border border-gray-200/50 dark:border-gray-700/50",
              "backdrop-blur-sm",
              
              // Hover un focus stāvokļi
              "hover:bg-gray-200/80 dark:hover:bg-gray-700/80",
              "hover:border-gray-300/80 dark:hover:border-gray-600/80",
              "hover:scale-105 active:scale-95",
              
              // Focus ring
              "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2",
              "focus:ring-offset-white dark:focus:ring-offset-gray-950",
              
              // Transitions
              "transition-all duration-200 ease-out",
              
              // Icon styling
              "text-gray-500 dark:text-gray-400",
              "hover:text-gray-700 dark:hover:text-gray-200",
              
              // Accessibility
              "group"
            )}
          >
            <XIcon className="h-4 w-4 transition-transform group-hover:rotate-90 duration-200" />
            <span className="sr-only">Aizvērt</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col gap-3 text-center sm:text-left",
        // Skaists spacing un typography
        "pb-4 border-b border-gray-100 dark:border-gray-800/50",
        className
      )}
      {...props}
    />
  )
}

function DialogFooter({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
        // Skaists spacing
        "pt-6 border-t border-gray-100 dark:border-gray-800/50",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        // Skaista typography
        "text-2xl font-bold leading-tight tracking-tight",
        "text-gray-900 dark:text-white",
        // Gradient text efekts
        "bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300",
        "bg-clip-text text-transparent",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        // Skaista typography
        "text-base leading-relaxed",
        "text-gray-600 dark:text-gray-400",
        // Subtle text shadow
        "text-shadow-sm",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}