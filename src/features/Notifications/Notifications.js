import { useState } from "react";

const notificationFilters = [
	'All',
	'Requests',
	'Unread',
	'Recent Appointments'
];

const notifications = [
	{
		from: 'Alina',
		to: 'Jack Rock',
		logoUrl: '/notifications/alina1.png'
	},
	{
		from: 'Jane Austen',
		to: 'Jack Rock',
		logoUrl: '/notifications/jane.png'

	},
	{
		from: 'Alina',
		to: 'Jack Rock',
		logoUrl: '/notifications/alina1.png'
	},
]


function Notifications() {
	const [activeFilter, setActiveFilter] = useState(0);
	const [popUpIndex, setPopUpIndex] = useState(-1);

	return ( 
		<div className="space-y-8">
			<p className='text-[#3A643B] text-[15px] font-medium'>My Notifications</p>
			<header className="bg-white rounded-xl flex items-center gap-4 px-2 py-4 flex-wrap">
				{
					notificationFilters.map((item, index) => {
						if (activeFilter === index) {
							return (
								<button
									className="text-[13px] font-medium text-white bg-[#3A643B] px-5 py-[5px] rounded-[20px]"
									onClick={() => setActiveFilter(index)}
								>
									{item}
								</button>
							)
						}

						return (
							<button
								className="text-[13px] font-medium text-[#797979] px-5 py-[5px] border border-[#797979] rounded-[20px]"
								onClick={() => setActiveFilter(index)}
							>
							{item}
						</button>
						)
					})
				}		
				
			</header>
			<main className="bg-white rounded-xl px-2 py-4">
				{
					notifications.map((notification, index) => {
						return <Notification key={index} index={index} popUpIndex={popUpIndex} setPopUpIndex={setPopUpIndex} notification={notification} />
					})
				}
			</main>
		</div>


	);
}


function Notification({ notification, index, popUpIndex, setPopUpIndex }) {

	function setIndex() {
		if (popUpIndex === index) {
			setPopUpIndex(-1);
		} else {
			setPopUpIndex(index);
		}

	}
	return (
		<div className="relative">
			<div className="flex items-center gap-2 px-4 pt-4 text-[14px]">
				<img src='/notifications/alina-lg.png' alt='Alina' />
				<div>
					<p>
						<span className="font-medium">{notification.from}</span> has requested {' '}
						<span className="font-medium">{notification.to}</span> to be a caregiver.
					</p>
					<p className="text-[#7E7E7E] text-[14px]">6 min</p>
				</div>
				

			</div>
			<div className="flex items-center gap-4 px-8 mt-2 pb-4 border-b border-[#E4E7EB]">
				<button className="px-2.5 py-[1px] rounded text-[13px] border border-[#3A643B] text-[#3A643B] ml-[100px]">Decline</button>
				<button className="px-2.5 py-[1px] rounded text-[13px] bg-[#3A643B] text-white">Accept</button>
			</div>

			<div
				onClick={setIndex}
				className="absolute right-1 sm:right-4 top-10 sm:top-8 w-[33px] h-[31px] rounded-xl bg-[#2E37A40D] hover:bg-[#2E37A41D] flex items-center justify-center cursor-pointer"
			>
				<img src='/notifications/three-dots.png' alt='Dots' />
			</div>

			{popUpIndex === index && <DeletePopUp />}
		</div>
	);
}


function DeletePopUp() {
	return (
		<div className="absolute right-8 -bottom-2 cursor-pointer hover:bg-gray-100 bg-white p-4 rounded-xl drop-shadow-xl text-xs text-[#D90000] font-medium">
			Delete Notification
		</div>
	)
}


export default Notifications; 