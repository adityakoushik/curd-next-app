import React from 'react'

const EmployeeList = () => {
	return (
		<>
			<h2 className="text-2xl font-bold mb-4">Employee List</h2>
			<div className="grid grid-cols-1 gap-2 bg-gray-50">
				<table className='border-collapse'>
					<thead>
						<tr className="bg-blue-500">
							<th className='px-4 py-2 text-left'>Name</th>
							<th className='px-4 py-2 text-left'>Designation</th>
							<th className='px-4 py-2 text-left'>More..</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="px-4 py-2 text-black">Indiana</td>
							<td className="px-4 py-2 text-black">Indianapolis</td>
							<td className="px-4 py-2 text-black">Indianapolis</td>
						</tr>
						<tr>
							<td className="px-4 py-2 text-black">Ohio</td>
							<td className="px-4 py-2 text-black">Columbus</td>
							<td className="px-4 py-2 text-black">Columbus</td>
						</tr>
						<tr>
							<td className="px-4 py-2 text-black">Michigan</td>
							<td className="px-4 py-2 text-black">Detroit</td>
							<td className="px-4 py-2 text-black">Detroit</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default EmployeeList