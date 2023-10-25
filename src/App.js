import data from "./data"
import { useState } from "react"

const App=()=>{
  const [count,setCount]=useState(0)
  const [paragraph,setParagraph]=useState([])

  const submitForm=(e)=>{
    e.preventDefault()
    let amount=parseInt(count)

    setParagraph(data.slice(0,amount))

    if(amount<0){
      amount=1
    }else if(amount>5){
      amount=5
    }
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