import Header from "./components/Header"
import Footer from "./components/Footer"
import { CheckOutWork } from "./components/CheckOutWork"
import { Projects } from "./components/Projects"
import { useState } from "react"

function App() {
  const [showProjects,setShowProjects] = useState(false)
  const projects = [{title:'Todo app'},{title:'E-Commerce'},{title:'Tic-Tac-Toe'}]
  const handleClick = ()=>{
    //first load all the projects available
    // show all the available project list
    setShowProjects(prev=>!prev)

}
  return (
    <>
         <Header/>
         <CheckOutWork handleClick={handleClick}/>
           {showProjects && <Projects projects={projects}/>} 
         <Footer/>
        
    </>
  )
}

export default App
