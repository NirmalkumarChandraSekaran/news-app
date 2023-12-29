import { useState } from "react"
import Navbar from "./components/Navbar"
import Newsboard from "./components/Newsboard"

const App=()=>
{
  const [category,setcategory]= useState("sports")

  return (
    <div>
    
<Navbar setcategory={setcategory}/>
<Newsboard category={category} />
    </div>
  )
}

export default App