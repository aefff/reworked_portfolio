import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"

import Home from "./Home"
import Projects from "./Projects"
import ProjectTemplate from "./ProjectTemplate"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="projects" element={<Projects />} />
                <Route path="projects/task-manager" element={<ProjectTemplate />} />
                <Route path="projects/3d-visualizer" element={<ProjectTemplate />} />
                <Route path="projects/tensorflow-ml" element={<ProjectTemplate />} />
                <Route path="projects/project-manager-wpf" element={<ProjectTemplate />} />
            </Route>
        </Routes>
    )
}

export default App
