"use client";
import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { newUser
 } from "@/prisma";

type Inputs = {
  name: string;
  email: String;
  password: String;
  exampleRequired: string;
};

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    // const user=await newUser(data)
    console.log(data)
  };

  return (
    <>
      <main className="md:w-[40vw] m-auto min-h-96 mt-[30vh]">
        <h3>Sign up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <Input
              className="m-2"
              placeholder="enter name"
              {...register("name")}
            />
            <Input className="m-2" placeholder="email" {...register("email")} />
            <Input
              className="m-2"
              placeholder="Password"
              {...register("password")}
            />
          </div>

          <Button>sign up</Button>
        </form>
      </main>
    </>
  );
};

export default SignUp;
