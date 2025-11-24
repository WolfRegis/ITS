export default function H2({children, color}) {

  return <h2 className={color=="white" ? "text-white lg:text-3xl text-sm font-bold text-center" : "text-black lg:text-3xl text-sm font-bold text-center"}>{children}</h2>
}
