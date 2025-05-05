import Header from "./components/Header"
import Footer from "./components/Footer"
import { CheckOutWork } from "./components/CheckOutWork"
import { Projects } from "./components/Projects"
import { useState } from "react"

function App() {
  const [showProjects,setShowProjects] = useState(false)
  const projects = [{title:'Todo app',link:'todo-list',tech:[{frontend:'React.js + Tailwind CSS'},{backend:'Express.js + Node.js'},{database:'MongoDB'}]},{title:'Portfolio Website',link:'Portfolio',tech:[{frontend:'React.js + Tailwind CSS'}]}]
  const handleClick = ()=>{
    //first load all the projects available
    // show all the available project list
    setShowProjects(prev=>!prev)

}
  return (
    <>
         <Header/>
         <CheckOutWork handleClick={handleClick} label = {showProjects?'Hide Work':'Check Out Work'}/>
           {showProjects && <Projects projects={projects}/>} 
         <Footer/>
        
    </>
  )
}

export default App
