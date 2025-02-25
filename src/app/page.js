import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

export default function Home() {

	// console.log("Is it Client/Server Side Component")

	return (
		<>
			<Navbar />
			<div className="grid grid-cols-5 gap-4">
				{/* add sidebar */}
				<Sidebar />
				<main className="col-span-3 p-4 rounded shadow">
					<h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>

					{/* <!-- Cards Section (Grid for Responsive Cards) --> */}
					<div className="grid grid-cols-3 gap-2">

						{/* <!-- Card 1 (Flexbox inside Grid) --> */}
						<div className="bg-white p-4 rounded shadow flex flex-col justify-between">
							<h3 className="text-lg font-semibold text-black">Total Users</h3>
							<p className="text-2xl font-bold text-black">1,234</p>
						</div>

						{/* <!-- Card 2 --> */}
						<div className="bg-white p-4 rounded shadow flex flex-col justify-between">
							<h3 className="text-lg font-semibold text-black">Revenue</h3>
							<p className="text-2xl font-bold text-black">$12,345</p>
						</div>

						{/* <!-- Card 3 --> */}
						<div className="bg-white p-4 rounded shadow flex flex-col justify-between">
							<h3 className="text-lg font-semibold text-black">Pending Orders</h3>
							<p className="text-2xl font-bold text-black">56</p>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
