import { useNavigate } from "react-router-dom";

export default function NavItem({isDropdown, dropdown, onHover, lien, children}) {


  const navigate = useNavigate()

  return( 
  <div className={isDropdown ? "relative group uppercase" : "uppercase"} onMouseEnter={(e)=>isDropdown && onHover(e)}  onClick={()=> navigate(lien)} >
            {children}
            {isDropdown && dropdown}
  </div>

)}

