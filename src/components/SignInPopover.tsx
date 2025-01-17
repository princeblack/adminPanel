import React from "react";
import { SignIn } from "@clerk/nextjs";
import {
  Modal,
  ModalContent,
} from "@nextui-org/react";

interface SignInPopoverProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function SignInPopover({ isOpen, onOpenChange }: SignInPopoverProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
          <SignIn />
      </ModalContent>
    </Modal>
  );
}
