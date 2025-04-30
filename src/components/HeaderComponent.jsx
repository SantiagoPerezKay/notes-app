import { Link } from "react-router-dom"

function HeaderComponent() {
  return (<header>
    
    <nav className="bg-[#F2E2B1] shadow ">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600  font-serif ">
        

      
        <Link
          to="/"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >
          Home
        </Link>
        <Link
          to="/notes"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          NotesPages
        </Link>
      </div>
    </nav >
    <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mt-10">
          NOTES APP
        </h1>
  </header>
  )
}

export default HeaderComponent