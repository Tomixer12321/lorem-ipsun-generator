import data from "./data"
import { useState } from "react"

const App=()=>{
  const [count,setCount]=useState(0)

  const submitForm=(e)=>{
    e.preventDefault()
    const amount=parseInt(count)
    console.log(typeof(amount))
  }

  return <section>
    <h1>Lorem ipsum generator</h1>
    <form onSubmit={submitForm}>
      <label htmlFor="paragraph">odstavec:</label>
      <input type="number" id="paragraph" onChange={(e)=>{
        setCount(e.target.value)}}/><br />
      <input type="submit" value="vygenerovat"/>
    </form>
  </section>
}
export default App