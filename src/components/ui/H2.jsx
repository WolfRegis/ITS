export default function H2({children, color}) {

  return <h2 className={color=="white" ? "text-white text-3xl font-bold" : "text-black text-3xl font-bold"}>{children}</h2>
}
