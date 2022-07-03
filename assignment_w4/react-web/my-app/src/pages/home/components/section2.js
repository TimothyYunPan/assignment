const Section2 = () =>{

  let addSec = () => {
    let section = document.getElementsByClassName("main-2")[0]
    console.log(addSec)
    section.style.display = "block"
    

  }

  return <div className="callBtn">
     <div className="actionBtn" id="actionBtn" onClick={addSec}>Call To Action</div>
  </div>

}

export default Section2