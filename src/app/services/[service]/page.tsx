"use client";

import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { useParams } from "next/navigation"

export default function ServiceInfo() {
    return (
        <div>
            <Navbar/>
            <Footer/>
        </div>
    )
}