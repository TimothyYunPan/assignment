import { useState } from "react"
import Navbar from './navbar'


const Header = ({}) =>{

  
  let addMenu = () => {
    let menu = document.getElementsByClassName("nav-items")[0]
    console.log(addMenu)
    menu.style.display = "block"

  }


  return <div className="main-header">
    <h3 className="name"><a href="#"></a>Website Title / Logo</h3>
      <a href="#" className="menu-toggle" onClick={addMenu}>
          <span className="span1"></span>
          <span></span>
          <span></span>
      </a>
      
      <ul className="main-nav">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
      </ul>

  </div>

}

export default Header


