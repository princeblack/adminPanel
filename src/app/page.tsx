"use client";
import Image from "next/image";
import previewImage from "@/assets/preview.png";
import logo from "@/assets/Panova.jpg";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import SignInPopover from "@/components/SignInPopover";
import {
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Home() {
  const {  isSignedIn } = useUser();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (isSignedIn) {
    redirect("/dashboard");
  }
  return (
    <>
      <section className="h-svh w-full md:pt-4 mt-[30px] relative flex items-center justify-center flex-col ">
        <nav>
          <div className=" w-screen flex justify-between items-center px-6">
            <Image
              src={logo}
              alt="Logo image"
              height={120}
              width={120}
              className="rounded-2xl rounded-tr-2xl border-2 border-muted"
            />
            <Button
              onPress={onOpen}
              className="bg-[#168092] text-white px-4 py-2 rounded hover:bg-[#3fc8e4]"
            >
              Log In
            </Button>
          </div>
        </nav>
          {isOpen && (
            <SignInPopover isOpen={isOpen} onOpenChange={onOpenChange} />
          )}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-8xl font-bold text-center md:text-[250px]">
            Panova
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-40px]">
          <Image
            src={previewImage}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <footer className="bg-gray-800 mt-52 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Panova. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
