import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination";

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

const filters = [
	'Created By',
	'Category',
	'Reminders'
];


const filterTypes = {
	0: ['Amrutam', 'Doctor', 'Patient'],
	1: ['Health', 'Fitness'],
	2: ['Turn On', 'Turn Off']
}

function TemplateList({selectedRows, setSelectedRows}) {
	const [showOptions, setShowOptions] = useState(false);
	const [showFilters, setShowFilters] = useState(false);
	const [leftOffset, setLeftOffset] = useState(0);
	const [filtersLeftOffset, setFiltersLeftOffset] = useState(0);
	const optionsIcon = useRef(null);
	const filtersIcon = useRef(null); 

	const showSettingsIcon = selectedRows.size > 0;



	function toggleOptionsMenu() {
		setShowOptions(!showOptions);
	}

	function toggleFiltersMenu() {
		setShowFilters(!showFilters);
	}


	useEffect(() => {
		function calculateOptionsOffset() {
			const leftOffset = optionsIcon.current.offsetLeft;

			setLeftOffset(leftOffset);

			// console.log('left offset ', leftOffset);
		}

		calculateOptionsOffset();

		window.addEventListener('resize', calculateOptionsOffset);


		return () => window.removeEventListener('resize', calculateOptionsOffset);

	}, []);

	useEffect(() => {
		function calculateFiltersOffset() {
			const leftOffset = filtersIcon.current.offsetLeft;

			setFiltersLeftOffset(leftOffset);

			console.log('left offset ', leftOffset);
		}

		calculateFiltersOffset();

		window.addEventListener('resize', calculateFiltersOffset);


		return () => window.removeEventListener('resize', calculateFiltersOffset);

	}, []);


	// console.log(showOptions)


	return (
		<div>
			<div className='*:text-[15px] *:font-medium flex items-center gap-2'>
				<p className='text-[#878890]'>Routines</p>
				<img src='/template-list/arrow-r-green.png' alt='Arrow Right' />
				<p className='text-[#3A643B]'>Routine Templates</p>
			</div>
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
					
					<div
						className={`${!showSettingsIcon && 'invisible'} border-[2px] border-[#3A643B] w-[32px] h-[29px] rounded-[4px] flex items-center justify-center cursor-pointer`}
						onClick={toggleOptionsMenu}
						ref={optionsIcon}
					>
						<img src='/template-list/delete.png' alt='Refresh' />
					</div>
	
					<div
						onClick={toggleFiltersMenu}
						ref={filtersIcon}
						className='bg-[#2E37A40D] hover:bg-[#2E37A41D]  w-[40px] h-[40px] rounded-xl flex items-center justify-center cursor-pointer ml-auto'
					>
						<img src='/template-list/filter.png' alt='Filter' />
					</div>
					<div className='bg-[#2E37A40D] hover:bg-[#2E37A41D] w-[40px] h-[40px] rounded-xl flex items-center justify-center cursor-pointer mr-auto'>
						<img src='/template-list/download.png' alt='Download' />
					</div>
				</header>

				<RoutinesTable selectedRows={selectedRows} onRowClick={setSelectedRows}></RoutinesTable>
				{showSettingsIcon && showOptions && <OptionsPopUp selectedRows={selectedRows} offSet={leftOffset}></OptionsPopUp>}
				{showFilters && <FiltersPopUp offSet={filtersLeftOffset}></FiltersPopUp>}

				{/* Pagination */}

				<Pagination></Pagination>
				
			</div>
		</div>

	);
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



function OptionsPopUp({ selectedRows, offSet }) {
	let firstValue;


	if (selectedRows.size) {
		firstValue = selectedRows.values().next().value;
	}



	return (
		<div
			style={{left: `${offSet}px`}}
			className='absolute top-10 border border-[#E0E0E0] bg-white rounded text-[#454545] text-[14px] *:px-4 *:py-2 *:cursor-pointer'>
			{
				selectedRows.size === 1 ? (
					<>
						<Link to={`/routine-details/${firstValue}`} className="block border-b border-b-[#EEEEEE] hover:bg-[#2E37A40D]">
							<div>View Template</div>
						</Link>
						<Link to={`/template-details/${firstValue}`} className="block border-b border-b-[#EEEEEE] hover:bg-[#2E37A40D]">
							<div>Edit</div>
						</Link>

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



function FiltersPopUp({ offSet }) {
	const [selectedFilter, setSelectedFilter] = useState(0);

	return (
		<div
			style={{ left: `${offSet - 250}px` }}
			className='absolute h-[250px] top-12 left-20 border border-[#E0E0E0] bg-white rounded-lg text-[#454545] text-[14px]'
		>
			<h3 className="text-[15px] font-medium p-4 border-b border-[#D3D3D3]">Sort By</h3>
			<div className="flex h-[78%]">
				<div className="*:border-b *:border-[#D3D3D3] *:py-[10px] *:pl-4 *:pr-10 *:text-[14px] *:cursor-pointer">
					{
						filters.map((filter, index) => {
							return (
								<p
									onClick={() => {
										setSelectedFilter(index);
										console.log(index)
									}}
									key={filter}
									className={`${selectedFilter === index ? 'text-black' : 'text-[#878890]'}`}
								>
									{filter}
								</p>
							)
							
						})
					}
				</div>
				<div className="w-[150px] space-y-2  px-4 py-4  border-l border-[#D3D3D3]">
					{
						filterTypes[selectedFilter].map(filterType => {
							return (
								<div key={filterType} className="flex items-center justify-between text-[14px]">
									<label for={filterType}>{filterType}</label>
									<input type='checkbox' id={filterType} />
								</div>
							)
						})
					} 

				</div>

			</div>


			

		</div>

	)


}



export default TemplateList;