import { Link } from 'react-router-dom';

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



function NotificationPopUp({setShow}) {
	return (
		<div className='absolute top-[75px] right-0 w-[368px] min-h-[80vh] bg-white drop-shadow-xl z-10'>
			<header className="flex border-b border-[#E4E7EB] py-5 items-center px-6">
				<h3 className='text-[#222529] text-[15px] font-semibold'>Notifications</h3>
				<img
					src='/notifications/cross.png'
					alt='cross'
					className="cursor-pointer ml-auto"
					onClick={() => setShow(false)}
				/>
			</header>

			<main>

				{
					notifications.map((notification, index) => {
						return <Notification key={index} notification={notification} />
					})
				}
                
				<Link to='/notifications'>
					<p className="text-[#3A643B] text-[12px] font-medium px-4 my-4">view all notifications</p>
				</Link>
				

			</main>

		</div>

	);
}


function Notification({notification}) {
	return (
		<div>
			<div className="flex items-start gap-2 px-4 pt-4 text-[14px]">
				<img src={notification.logoUrl} alt='Alina' className="mt-1" />
				<p>
					<span className="font-medium">{notification.from}</span> has requested {' '}
					<span className="font-medium">{notification.to}</span> to be a caregiver.
				</p>
			</div>
			<div className="flex items-center gap-4 px-8 pb-8 border-b border-[#E4E7EB]">
				<p className="text-[#7E7E7E] text-[14px] ml-6">6 min</p>
				<button className="px-2.5 py-[1px] rounded text-[13px] border border-[#3A643B] text-[#3A643B] ml-auto">Decline</button>
				<button className="px-2.5 py-[1px] rounded text-[13px] bg-[#3A643B] text-white">Accept</button>
			</div>
		</div>
	);
}

export default NotificationPopUp;