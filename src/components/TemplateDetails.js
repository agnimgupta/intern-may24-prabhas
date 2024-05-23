import { useParams, Link } from "react-router-dom";
import Pagination from "./pagination";

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


function TemplateDetails() {
	const params = useParams();

	console.log('params id', params.id)
	return (
		<div>
			<div className='*:text-[15px] *:font-medium flex items-center gap-2'>
				<p className='text-[#878890]'>Routines</p>
				<img src='/template-list/arrow-r-green.png' alt='Arrow Right' />
				<p className='text-[#3A643B]'>Routine Templates</p>
			</div>

			<RoutineTemplateDetails id={params.id}></RoutineTemplateDetails>

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
				<LikesTable>/</LikesTable>


				{/* pagination */}
				<Pagination></Pagination>


			</div>
		</div>

	);
}


function RoutineTemplateDetails({id}) {
	return (
		<div className="relative bg-white px-6 pt-2 pb-6 rounded-xl mt-8">
			<Link to={`/routine-details/${id}`}>
				<button
					className="absolute top-4 right-4 w-[60px] text-[#3A643B] text-[14px] font-medium border border-[#3A643B] px-2 py-[1px] rounded"
				>
					Edit
				</button>
			</Link>
			
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





export default TemplateDetails;










