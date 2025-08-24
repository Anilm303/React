import { use, useContext } from "react"
import { Link } from "react-router-dom"
import { CounterContext } from "../context/CounterContext"
import { useSelector } from "react-redux"



const Navbar = () => {
  const {count} = useContext(CounterContext)

  const {user, isAuthenticated} = useSelector(state => state.auth)
  console.log(user)
  return (
    <div className="border-b border-slate-500 p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="text-2xl font-bold">Logo</div>

        <nav>
            <ul className="flex gap-10 text-lg font-semibold items-center">
                <Link to='/'>
                     <li>Home</li>
                </Link>
                <Link to='/products'>
                     <li>products</li>
                </Link>
                <Link to='/cart'>
                     <li>Cart ({count})</li>
                </Link>
                <Link to='/login'>
                <li></li>
                </Link>
                <li>
                  {user}
                </li>
            </ul>
        </nav>
        </div>
    </div>
  )
}
export default Navbar