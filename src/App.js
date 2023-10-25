import data from "./data"
import { useState } from "react"

const App=()=>{
  const [count,setCount]=useState(0)
  const [paragraph,setParagraph]=useState([])

  const submitForm=(e)=>{
    e.preventDefault()
    const amount=parseInt(count)

    setParagraph(data.slice(0,amount))
  }

  return <section>
    <h1>Lorem ipsum generator</h1>
    <form onSubmit={submitForm}>
      <label htmlFor="paragraph">odstavec:</label>
      <input type="number" id="paragraph" onChange={(e)=>{
        setCount(e.target.value)}}/><br />
      <input type="submit" value="vygenerovat"/>
    </form>
    <article>
      {
        paragraph.map((oneParagraph,index)=>{
          return <p key={index}>{oneParagraph}</p>
        })
      }
    </article>
  </section>
}
export default App