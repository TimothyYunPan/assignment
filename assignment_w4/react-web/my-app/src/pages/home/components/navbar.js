const Navbar = () =>{

  let press = () => {
   let menu = document.getElementsByClassName("nav-items")[0]
   menu.style.display = "none"

  }

  return <div>
    <div className="nav-items">
        <span id="x" onClick={press}>X</span>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
    </div>
  </div>

}

export default Navbar