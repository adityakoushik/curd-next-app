const Navbar = () => {
	return (
		<div className="flex justify-between items-center p-4 bg-blue-500 text-white">
			<h1 className="text-xl font-bold">Task Management</h1>
			<ul className="flex gap-4">
				<li><a href="#" className="hover:underline">Login</a></li>
			</ul>
		</div>
	)
}

export default Navbar