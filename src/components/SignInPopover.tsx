import React from "react";
import { SignIn } from "@clerk/nextjs";
import {
  Modal,
  ModalContent,
} from "@nextui-org/react";

export default function SignInPopover({ isOpen, onOpenChange }) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
          <SignIn />
      </ModalContent>
    </Modal>
  );
}
