import React from "react"
import { LuLayoutDashboard } from "react-icons/lu"
import { FaPlusSquare } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import Link from "next/link";



const Sidebar = () => {
	return (
		<aside className='col-span-1 bg-gray-300 p-1 min-h-screen w-60'>
			<ul className='flex flex-col gap-2'>
				<li>
					<Link href={"/"} className="flex items-center gap-2 p-2 bg-blue-600 hover:bg-blue-900 text-white shadow">
						<span><LuLayoutDashboard /></span>Dashboard
					</Link>
				</li>
				<li>
					<Link href={"/create"} className="flex items-center gap-2 p-2 bg-blue-600 hover:bg-blue-900 text-white shadow">
						<span><FaPlusSquare /></span>Create Task
					</Link>
				</li>
				<li>
					<Link href={"/list"} className="flex items-center gap-2 p-2 bg-blue-600 hover:bg-blue-900 text-white shadow">
						<span><FaThList /></span>Task List
					</Link>
				</li>
			</ul>
		</aside>
	)
}

export default Sidebar