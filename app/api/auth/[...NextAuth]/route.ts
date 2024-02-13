import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

const authOptions={
    providers:[      
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            redirectUri: "https://dipakkhade.vercel.app/auth/callback",
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "thisisasecretekeyfornextauth",
}
const handler = NextAuth(authOptions);
export {handler as GET , handler as POST}