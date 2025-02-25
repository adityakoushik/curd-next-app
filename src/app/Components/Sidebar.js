import React from "react"
import { LuLayoutDashboard } from "react-icons/lu"
import { FaPlusSquare } from "react-icons/fa";
import { FaThList } from "react-icons/fa";



const Sidebar = () => {
	return (
		<aside className='col-span-1 bg-gray-300 p-1 min-h-screen w-60'>
			<ul className='flex flex-col gap-2'>
				<li>
					<a href="#" className="flex items-center gap-2 p-2 bg-blue-600 hover:bg-blue-900 text-white shadow">
						<span><LuLayoutDashboard /></span>Dashboard
					</a>
				</li>
				<li>
					<a href="#" className="flex items-center gap-2 p-2 bg-blue-600 hover:bg-blue-900 text-white shadow">
						<span><FaPlusSquare /></span>Create Task
					</a>
				</li>
				<li>
					<a href="#" className="flex items-center gap-2 p-2 bg-blue-600 hover:bg-blue-900 text-white shadow">
						<span><FaThList /></span>Task List
					</a>
				</li>
			</ul>
		</aside>
	)
}

export default Sidebar