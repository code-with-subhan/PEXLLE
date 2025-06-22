"use client"

import { toast } from "sonner"
import React from "react"
import { Button } from "@/components/ui/button"

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      className="rounded-none"
      onClick={() =>
        toast("Message Sent", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Custom sonner
    </Button>
  )
}
