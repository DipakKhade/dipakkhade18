import prisma from "@/lib/prisma";

export const newUser=async(data:any)=>{
   const newuser= await prisma.user.create({ data });
    return ({newuser})
}