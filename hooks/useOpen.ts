"use client";

import { useState } from "react";

export default function useOpen() {
    const [open, setOpen] = useState(true);

    return { open, setOpen };
}