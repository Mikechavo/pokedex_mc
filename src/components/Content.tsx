
import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage"
import Search from "./Search"
// import Journey from "./Journey"
// import Projects from "./Projects"
// import Resume from "./Resume"
// import ContactMe from "./ContactMe"

// type ContentProps = {
//  id: string
//  title: string
// }
// ({id, title}: ContentProps)
const Content = () => {

 return(
  <div className="overflow-y-auto flex-grow">
   <main>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<Search />} />
            {/* <Route path="/myjourney" element={<Journey />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contactme" element={<ContactMe />} /> */}
          </Routes>
        </div>
      </main>
  </div>
 )
}

export default Content