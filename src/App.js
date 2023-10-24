import data from "./data"
import { useState } from "react"

const App=()=>{
  const submitForm=(e)=>{
    e.preventDefault()
  }
  return <section>
    <h1>Lorem ipsum generator</h1>
    <form onSubmit={submitForm}>
      <label htmlFor="paragraph">odstavec:</label>
      <input type="number" id="paragraph" /><br />
      <input type="submit" value="vygenerovat"/>
    </form>
  </section>
}
export default App