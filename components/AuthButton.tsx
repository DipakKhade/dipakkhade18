"use client";
import { FC } from "react";
import { Button } from "./ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AuthButtonProps {}

const AuthButton: FC<AuthButtonProps> = () => {
  const { data: session, status } = useSession();
  console.log(status);
  return (
    <>
      {status == "unauthenticated" ? (
        <Button
        onClick={()=>signIn('google')}
        >sign in</Button>
      ) : (
        <div className="flex">
        <Button
        onClick={()=>signOut()}
        >sign out</Button>
        <Avatar>
  <AvatarImage src={session?.user?.image} />
  <AvatarFallback>DK</AvatarFallback>
</Avatar>
        </div>
      )}
    </>
  );
};

export default AuthButton;
