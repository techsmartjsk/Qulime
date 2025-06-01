"use client";

import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { useParams } from "next/navigation"

export default function ServiceInfo() {
    const { service } = useParams();
    return (
        <div>
            <Navbar/>
            <Footer/>
        </div>
    )
}