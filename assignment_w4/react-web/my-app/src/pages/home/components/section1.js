import { useState } from "react"

const Section1 = ({}) =>{
  const [word,setWord] = useState(`Welcome Message`)

  let changeWord = () => {
    setWord("Have a Good Time!")
  }

  return <div className="main">
    <div className="jumbotron"><h1 id="titleName" onClick={changeWord}>{word}</h1></div>
      <div className="container">
          <h2 className="subHeading">Section Title</h2>
          <div className="row">
              <div className="col">Content Box 1</div>
              <div className="col">Content Box 2</div>
              <div className="col">Content Box 3</div>
              <div className="col">Content Box 4</div>
          </div>
      </div>
  </div>

}

export default Section1