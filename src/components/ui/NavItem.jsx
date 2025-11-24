export default function NavItem({isDropdown, dropdown, onHover,children}) {


  return( 
  <div className={isDropdown ? "relative group uppercase" : "uppercase"} onMouseEnter={(e)=>isDropdown && onHover(e)}   >
            {children}
            {isDropdown && dropdown}
  </div>

)}

