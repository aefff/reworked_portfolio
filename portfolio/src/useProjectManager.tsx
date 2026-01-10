import projectsJson from "./projects.json"
import { useState } from "react"

function useProjectManager() {
    const [projects, manageProjects] = useState(projectsJson)

    return {
        projects, manageProjects
    }
}

export default useProjectManager