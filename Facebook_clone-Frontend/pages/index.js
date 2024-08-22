import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import { getSession } from "next-auth/react";
import Login from "@/Components/Login";
import Feed from "@/Components/Feed";
import RightSidebar from "@/Components/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home({session}) {
  if(!session) return <Login/>
  return (
      <div>
        <Head>
          <title>Facebook Clone</title>
        </Head>
        <Header/>
        <main className="flex bg-gray-100"> 
          {/* Left SideBar */}
          <SideBar/>
          {/* Feed (Create Post and Posts) */}
          <Feed/>
           {/* Right Sidebar */}
           <RightSidebar/>
        </main>
      </div>
    );
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  return {
    props: {session},
  }
}
