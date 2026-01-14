"use client";

import { useState } from "react";
import projectJson from "@/app/data/projects.json";

export default function useProjectManager() {
    const [projects, setProjects] = useState(projectJson);

    return {
        projects, setProjects
    }
}