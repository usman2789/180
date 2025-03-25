import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Platform from "@/components/platform";
import Features from "@/components/features";
import Strategies from "@/components/strategies";
import Feedback from "@/components/feedback";
import { LucideMessageSquareHeart } from "lucide-react";


export default function Home() {
  return (
   <div>
     <Header />
    <Hero />
    <Platform />
    <Features />
    <Strategies />
    <Feedback />
    
    
   </div>
  );
}
