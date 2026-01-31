"use client"

import { useRouter } from "next/navigation";
export default function BackButton() {

    const router = useRouter();

    return (
        <button className="btn-ghost cursor-pointer" onClick={() => {router.back()}}>Back</button>
    )
}