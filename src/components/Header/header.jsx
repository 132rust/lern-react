import React from "react"
import Classes from "./header.module.css"

const Header = () => {
    return (
        <header className={Classes.header}>
         <div className={Classes.header_container}>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUfCr5fEdjMLf6ybpi0NoXFBIYKNiVgdzMw&usqp=CAU" alt="logo" width={60} height={60} />

                </div>
        </header>
    )
}

export default Header;