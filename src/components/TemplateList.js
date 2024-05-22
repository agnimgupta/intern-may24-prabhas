import { useRef, useState } from "react";

const headings = [
	'Name',
	'Created By',
	'Reminders',
	'Followed By',
	'Liked By'
];


const rows = [
	{
		name: {
			title: 'Skin Care',
			logoUrl: '/template-list/skin.png'
		},
		createdBy: {
			title: 'Dr. Alina Mathew',
			logoUrl: '/template-list/alina1.png'
		},
		reminders: 3,
		followers: {
			logoUrl: '/template-list/amrutam.png',
			count: 5
		},
		likes: {
			logoUrl: '/template-list/amrutam.png',
			count: 5
		}
	},
	{
		name: {
			title: 'Daily Yoga',
			logoUrl: '/template-list/yoga.png'
		},
		createdBy: {
			title: 'Jack Rock',
			logoUrl: '/template-list/jack1.png'
		},
		reminders: 4,
		followers: {
			logoUrl: '/template-list/jack3.png',
			count: 2
		},
		likes: {
			logoUrl: '/template-list/jack3.png',
			count: 2
		}
	},
	{
		name: {
			title: 'Meditation',
			logoUrl: '/template-list/meditation.png'
		},
		createdBy: {
			title: 'Dr. Shaya Riman',
			logoUrl: '/template-list/shaya.png'
		},
		reminders: 5,
		followers: {
			logoUrl: '/template-list/jack2.png',
			count: 1
		},
		likes: {
			logoUrl: '/template-list/jack2.png',
			count: 1
		}
	},
	{
		name: {
			title: 'Jogging',
			logoUrl: '/template-list/jogging.png'
		},
		createdBy: {
			title: 'Amrutam',
			logoUrl: '/template-list/amrutam.png'
		},
		reminders: 2,
		followers: {
			logoUrl: '/template-list/alina1.png',
			count: 1
		},
		likes: {
			logoUrl: '/template-list/alina1.png',
			count: 1
		}
	},
	{
		name: {
			title: 'Drinking Water',
			logoUrl: '/template-list/skin.png'
		},
		createdBy: {
			title: 'Jack Rock',
			logoUrl: '/template-list/jack2.png'
		},
		reminders: 4,
		followers: {
			logoUrl: '/template-list/jack1.png',
			count: 5
		},
		likes: {
			logoUrl: '/template-list/jack1.png',
			count: 5
		}
	},
	{
		name: {
			title: 'Gym',
			logoUrl: '/template-list/gym.png'
		},
		createdBy: {
			title: 'Shaya Riman',
			logoUrl: '/template-list/shaya.png'
		},
		reminders: 3,
		followers: {
			logoUrl: '/template-list/shaya.png',
			count: 5
		},
		likes: {
			logoUrl: '/template-list/shaya.png',
			count: 5
		}
	},
	{
		name: {
			title: 'Cardio',
			logoUrl: '/template-list/cardio.png'
		},
		createdBy: {
			title: 'Alina Mathew',
			logoUrl: '/template-list/alina2.png'
		},
		reminders: 4,
		followers: {
			logoUrl: '/template-list/alina2.png',
			count: 4
		},
		likes: {
			logoUrl: '/template-list/alina2.png',
			count: 4
		}
	},
	{
		name: {
			title: 'Hair Care',
			logoUrl: '/template-list/hair.png'
		},
		createdBy: {
			title: 'Jack Rock',
			logoUrl: '/template-list/jack2.png'
		},
		reminders: 2,
		followers: {
			logoUrl: '/template-list/jack2.png',
			count: 1
		},
		likes: {
			logoUrl: '/template-list/jack2.png',
			count: 1
		}
	},
]

const likes = [
	{
		name: 'Alina Mathew',
		logoUrl: '/template-list/alina1.png',
		date: '1st Feb 2023'
	},
	{
		name: 'Jack Rock',
		logoUrl: '/template-list/jack1.png',
		date: '1st Feb 2023'
	},
	{
		name: 'Shaya Riman',
		logoUrl: '/template-list/alina1.png',
		date: '1st Feb 2023'
	},
	{
		name: 'Alina Mathew',
		logoUrl: '/template-list/alina2.png',
		date: '1st Feb 2023'
	},
	{
		name: 'Jack Rock',
		logoUrl: '/template-list/jack2.png',
		date: '1st Feb 2023'
	},
	{
		name: 'Shaya Riman',
		logoUrl: '/template-list/alina1.png',
		date: '1st Feb 2023'
	},
	{
		name: 'Alina Mathew',
		logoUrl: '/template-list/alina2.png',
		date: '1st Feb 2023'
	},
	{
		name: 'Jack Rock',
		logoUrl: '/template-list/jack2.png',
		date: '1st Feb 2023'
	},
]

function TemplateList() {
	const [selectedRowIndexes, setSelectedRowIndexes] = useState(new Set());
	// const [showOptions, setShowOptions] = useState(false);

	return (
		<div>
			<div className='*:text-[15px] *:font-medium flex items-center gap-2'>
				<p className='text-[#878890]'>Routines</p>
				<img src='/template-list/arrow-r-green.png' alt='Arrow Right' />
				<p className='text-[#3A643B]'>Routine Templates</p>
			</div>
			{/* <RoutineDetails></RoutineDetails> */}
			<div className="relative bg-white rounded-xl py-4 mt-6 space-y-4">
				<header className="flex items-center gap-6 px-8">
					<p className="font-medium">Template List</p>
					<div className="relative ml-4">
						<img
							src='/template-list/search.png'
							alt='search'
							className="absolute top-2 left-2"
						/>
						<input
							type='text'
							placeholder="Search here"
							className="w-[250px] h-[40px] p-2 pl-8 placeholder:text-[#28643B4D] text-[13px] text-gray-500 font-medium bg-[#3A643B0D] rounded-xl focus:outline-none"
						/>
					</div>	
					<div className='bg-[#2E37A40D] hover:bg-[#2E37A41D] w-[40px] h-[40px] rounded-xl flex items-center justify-center cursor-pointer'>
						<img src='/template-list/plus.png' alt='Plus' />
					</div>
					<div className='bg-[#2E37A40D] hover:bg-[#2E37A41D] w-[40px] h-[40px] rounded-xl flex items-center justify-center cursor-pointer'>
						<img src='/template-list/refresh.png' alt='Refresh' />
					</div>
					<div className='border-[2px] border-[#3A643B] w-[32px] h-[29px] rounded-[4px] flex items-center justify-center cursor-pointer'>
						<img src='/template-list/delete.png' alt='Refresh' />
					</div>
					<div className='bg-[#2E37A40D] hover:bg-[#2E37A41D]  w-[40px] h-[40px] rounded-xl flex items-center justify-center cursor-pointer ml-auto'>
						<img src='/template-list/filter.png' alt='Filter' />
					</div>
					<div className='bg-[#2E37A40D] hover:bg-[#2E37A41D] w-[40px] h-[40px] rounded-xl flex items-center justify-center cursor-pointer mr-auto'>
						<img src='/template-list/download.png' alt='Download' />
					</div>
				</header>
				{/* <OptionsPopUp selectedRows={selectedRowIndexes} ></OptionsPopUp> */}
				<RoutinesTable selectedRows={selectedRowIndexes} onRowClick={setSelectedRowIndexes}></RoutinesTable>
				{/* <LikesTable></LikesTable> */}
				<div className='flex items-center justify-between text-[#9C9C9C] text-[13px] font-medium px-8'>
					<p>Rows per page: 8</p>
					<div className="flex items-center gap-8">
						<p>1-8 of 80</p>
						<div className="w-[25px] h-[29px] rounded border border-[#E4E4E4] hover:bg-[#2E37A41D] flex items-center justify-center cursor-pointer">
							<img src='/template-list/arrow-left.png' alt='Arrow Left' />
						</div>
						<div className="w-[25px] h-[29px] rounded border border-[#E4E4E4] hover:bg-[#2E37A41D] flex items-center justify-center cursor-pointer">
							<img src='/template-list/arrow-right.png' alt='Arrow Left' />
						</div>
					</div>

				</div>

			</div>
		</div>

	);
}


function OptionsPopUp({ selectedRows}) {

	
	return (
		<div className={`absolute top-10 left-[47.5%] border border-[#E0E0E0] bg-white rounded text-[#454545] text-[14px] *:px-4 *:py-2 *:cursor-pointer`}>
			{
				selectedRows.size === 1 ? (
					<>
						<div className="w-full border-b  border-b-[#EEEEEE] hover:bg-[#2E37A40D]">View Template</div>
						<div className="border-b border-b-[#EEEEEE] hover:bg-[#2E37A40D]">Duplicate And Edit</div>
						<div className="text-red-500 hover:bg-red-100">Delete</div>
					</>
				) : (
					<div className="text-red-500 hover:bg-red-100">Delete All</div>					
				)
			}
			
		</div>

	)
	

}


function RoutineDetails() {
	return (
		<div className="relative bg-white px-6 pt-2 pb-6 rounded-xl mt-8">
			<button
				className="absolute top-4 right-4 w-[60px] text-[#3A643B] text-[14px] font-medium border border-[#3A643B] px-2 py-[1px] rounded"
			>
				Edit
			</button>
			<h3 className="text-[#212529] text-[18px] font-medium">Routine Template Details</h3>
			<div className="flex items-center gap-1 mt-6 mb-4">
				<p className="font-medium">Routine: </p>
				<img src='/template-list/hair.png' alt='Hair care' />
				<p className="text-[#333448] font-medium">Haircare</p>
			</div>
			<p className="font-medium">Description:&nbsp;&nbsp;<span className="font-normal text-[14px]">List of followers who have started following this skin care Routine</span> </p>
		</div>

	)
}

function RoutinesTable({ selectedRows, onRowClick }) {
	
	function handleClick(row) {
		const checked = selectedRows.has(row)
		if (!checked) {
			const newRows = new Set([...selectedRows]);
			newRows.add(row);

			onRowClick(newRows);
		} else {
			const newRows = new Set([...selectedRows]);
			newRows.delete(row);

			onRowClick(newRows);
		}
	}


	console.log('selected rows', selectedRows);


	return (
		<table className='w-full'>
			<tr className='font-semibold text-[15px] text-left *:py-4'>
				<th className='pl-12'>
					<img src='/template-list/square.png' alt='logo' />
				</th>
				{
					headings.map(heading => {
						return (
							<th
								key={heading}
								className="font-medium"
							>{heading}</th>
						)
					})

				}
			</tr>

			{
				rows.map((row, index) => {
					const checked = selectedRows.has(index);


					return (
						<tr
							key={row.name.title}
							className={`text-[14px] *:py-4 border border-x-0 border-b-2 ${checked && 'bg-[#E6F5E273]'}`}
						>
							{
								<>
									<td className='pl-12'>
										{
											checked ? (
												<div 
													className="w-[14px] h-[14px] rounded-[3px] border-[2px] border-[#A0A0A0] flex items-center justify-center cursor-pointer"
													onClick={() => handleClick(index)}
												>
													<img
														src='/template-list/tick.png'
														alt='logo'
													/>
												</div>

											) : (
												<img
													src='/template-list/square.png'
														alt='logo'
														className="cursor-pointer"
													onClick={() => handleClick(index)}
												/>
											)
										}
									</td>
									<td>
										<div className="flex items-center gap-1">
											<img src={row.name.logoUrl} alt='Logo' />
											<p>{row.name.title}</p>
										</div>
									</td>
									<td>
										<div className="flex items-center gap-1">
											<img src={row.createdBy.logoUrl} alt='Logo' />
											<p>{row.createdBy.title}</p>
										</div>
									</td>
									<td>{row.reminders}</td>
									<td>
										<div className="flex items-center gap-1">
											<img src={row.followers.logoUrl} alt='Logo' />
											<p>and {row.followers.count} others</p>
										</div>
									</td>
									<td>
										<div className="flex items-center gap-1">
											<img src={row.likes.logoUrl} alt='Logo' />
											<p>and {row.likes.count} others</p>
										</div>
									</td>
								</>
							}
						</tr>
					)
				})
			}
		</table>

	)
}

function LikesTable() {
	return (
		<table className='w-full'>
			<tr className='font-semibold text-[15px] text-left *:py-4'>
				<th className='pl-12 w-[10%]'>
					<img src='/template-list/square.png' alt='logo' />
				</th>
				<th className="font-medium w-[20%]">Name</th>
				<th className="font-medium w-[20%]">Date</th>
				<th className="font-medium w-[50%]"></th>
			</tr>
			{
				likes.map((row, index) => {
					return (
						<tr
							key={index}
							className='text-[14px] *:py-4 border border-x-0 border-b-2'
						>
							{
								<>
									<td className='pl-12'>
										<img src='/template-list/square.png' alt='logo' />
									</td>
									<td>
										<div className="flex items-center gap-1">
											<img src={row.logoUrl} alt='Logo' />
											<p>{row.name}</p>
										</div>
									</td>
									<td>{row.date}</td>
								</>
							}
						</tr>
					)
				})
			}
		</table>

	)
}


export default TemplateList;