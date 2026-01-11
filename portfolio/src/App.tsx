import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Start from "./Start"
import Home from "./Home"
import Projects from "./Projects"
import ProjectTemplate from "./ProjectTemplate"
import NotFound from "./NotFound"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Start />} />

                <Route path="home" element={<Home />}/>
                <Route path="projects" element={<Projects />} />
                <Route path="projects/*" element={<ProjectTemplate />} />
                <Route path="*" element={<NotFound/> }/>
            </Route>
        </Routes>
    )
}

export default App
