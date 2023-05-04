import Logo from '../assets/logo.png'
const Nav = () => {

    return (
      <>
       <nav>
         <div className="logo">
            <img src={Logo} alt="Logo tni" />
         </div>

          <ul>
            <li>Home</li>
          </ul>
       </nav>
      </>
    )
  }
  
  export default Nav