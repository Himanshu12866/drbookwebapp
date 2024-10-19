import { useContext } from "react"
import { AdminContext } from "../context/AdminContext"
import { NavLink } from "react-router-dom"
// import { assets } from "../assets/assets"


const SideNav = () => {

    const {aToken} = useContext(AdminContext)
  return (
    <div className="min-h-screen bg-white border">
    {
        aToken ? (
            <ul className="text-[#6b6a6a] mt-2">
                <NavLink to={"/dashboard"} className={(({isActive}) => `flex items-center py-3.5 gap-5 px-5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#aaa8a8] border-r-4 border-[blue] text-white': '' }` )}>
                    <span className=" bi bi-house"></span>
                    <p className="hidden sm:block">Dashboard</p>
                </NavLink>
                <NavLink to={"/all-appointment"}  className={(({isActive}) => `flex items-center gap-5 py-3.5 px-5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#aaa8a8] border-r-4 border-[blue] text-white': '' }` )}>
                    <span className=" bi bi-calendar3"></span>
                    <p className="hidden sm:block">Appointments</p>
                </NavLink>
                <NavLink to={"/add-doctor"}  className={(({isActive}) => `flex items-center py-3.5 gap-5 px-5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#aaa8a8] border-r-4 border-[blue] text-white': '' }` )}>
                    <span className=" bi bi-person-plus"></span>
                    <p className="hidden sm:block">Add Doctor</p>
                </NavLink>
                <NavLink to={"/doctor-list"}  className={(({isActive}) => `flex items-center py-3.5 gap-5 px-5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#aaa8a8] border-r-4 border-[blue] text-white': '' }` )}>
                    <span className=" bi bi-people"></span>
                    <p className="hidden sm:block">All Doctors</p>
                </NavLink>
            </ul>
        ):null
    }
    
    </div>
  )
}

export default SideNav