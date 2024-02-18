import NextAuth from "next-auth/next";
// import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

const authOptions={
    providers:[      
        // GoogleProvider({
        //     clientId:process.env.GOOGLE_CLIENT_ID,
        //     clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        //     redirectUri: "https://dipakkhade.vercel.app/auth/callback",
        // }),
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "thisisasecretekeyfornextauth",
}
const handler = NextAuth(authOptions);
export {handler as GET , handler as POST}