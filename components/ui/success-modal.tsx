"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  message: string;
}

export default function SuccessModal({
  open,
  onOpenChange,
  title,
  message,
}: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="px-6 py-8 md:px-8" showCloseButton={false}>
        <DialogHeader>
          <div className="mx-auto mb-2">
            <DotLottieReact src="/lottie/success.json" autoplay loop />
            <DotLottieReact
              src="/lottie/confetti.json"
              autoplay
              className="absolute top-5 left-1/2 -translate-x-1/2"
            />
          </div>

          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button type="button" className="w-full">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
