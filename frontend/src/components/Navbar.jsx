import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className=" flex justify-around items-center">
          <Link to="/" className="text-2xl font-bold">Logo</Link>
          <Link to="/Signup" className="text-white">signup</Link>
      </div>
    </div>
  )
}

export default Navbar
