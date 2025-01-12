import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-screen h-svh flex items-center justify-center">
      <SignIn />
    </div>
  );
}
