
import { NextResponse, type NextRequest } from "next/server";
import {sign,verify} from 'jsonwebtoken'
import z from 'zod'

const userSchema=z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(8)
})

export async function POST(request:NextRequest){
   const data =await request.json()
   const validateData=userSchema.safeParse(data)
const jwtsecrete=process.env.JWTSECRETE
   if(validateData.success){
   let token= sign(validateData.data,'thisisajwtsecrete')
   return NextResponse.json({token,'name':validateData.data.name,'email':validateData.data.email})
   }
   else{
    return NextResponse.json({message:'failed to assign a token'})
   }
}