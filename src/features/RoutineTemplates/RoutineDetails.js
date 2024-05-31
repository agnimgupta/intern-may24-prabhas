import { useState } from 'react';
import { useParams } from 'react-router-dom';

const reminders = [
	{
		name: 'Amrutam Nari Sondarya Malt',
		type: 'Consumable',
		days: ['Monday', 'Wednesday', 'Friday'],
		times: ['10AM', '3PM', '9PM']
	},
	{
		name: 'Amrutam Nari Sondarya Malt',
		type: 'Consumable',
		days: ['Monday', 'Wednesday', 'Friday'],
		times: ['10AM', '3PM', '9PM']
	}
]



function RoutineDetails() {
	const [showFullDesc, setShowFullDesc] = useState(false);

	const params = useParams();

	console.log('params id ', params.id);


	function toggleDesc() {
		setShowFullDesc(!showFullDesc);
	}


	return (
		<>
			<div className='*:text-[15px] *:font-medium flex items-center gap-2'>
				<p className='text-[#878890]'>Routines</p>
				<img src='/template-list/mini-arrow-right.png' alt='Arrow Right' />
				<p className='text-[#878890]'>Routine Templates</p>
				<img src='/template-list/arrow-r-green.png' alt='Arrow Right' />
				<p className='text-[#3A643B]'>Routine Details</p>


			</div>

			<div className="relative bg-white rounded-xl pt-4 pb-16 px-4 mt-6 space-y-4">
				<div className="flex flex-wrap gap-8">

					<div className="relative flex-none">
						<img src='/template-list/skin-routine.png' alt='Skin care Routine' className='object-cover' />
						<div className="absolute right-8 top-[325px] w-[40px] h-[40px] rounded-[50%] bg-[white] flex items-center justify-center cursor-pointer">
							<img src='/template-list/heart.png' alt='Heart' />
						</div>
					</div>

					<div className="flex-1 space-y-4">
						<h2 className="text-[#101018] text-[20px] font-semibold">Skin Care Routine</h2>
						<div className="flex items-center gap-2">
							<img src='/template-list/mini-heart.png' alt='Mini Heart' />
							<div className="flex space-x-[-5px] items-center">
								<img src='/template-list/jack1.png' alt='Mini Heart' />
								<img src='/template-list/shaya.png' alt='Mini Heart' />
								<img src='/template-list/alina1.png' alt='Mini Heart' />
							</div>
							<p className="text-[#A0A0A0] text-[13px]">and liked by 49 others</p>
						</div>

						<div className="flex items-center gap-2 ">
							<img src='/template-list/imports.png' alt='Imports' />
							<p className="text-[#A0A0A0] text-[13px]">753 Imports</p>
						</div>


						{/* Details */}


						<div className="w-[400px] flex items-center py-4 *:px-4 border border-[#F3F3F3] rounded-[20px] *:flex *:items-center *:gap-1 ">
							<div className=" border-r border-[#E9F1E0] ">
								<div className="w-[34px] h-[34px] rounded-[50%] bg-[#E9F1E0] flex items-center justify-center">
									<img src='/template-list/calendar.png' alt='Calendar' />
								</div>
								<div>
									<p className="text-[#A0A0A0] text-[14px]">Weeks</p>
									<p className="text-[#101018] text-[14px] font-medium">12</p>
								</div>
							</div>

							<div className="border-r border-[#E9F1E0] ">
								<div className="w-[34px] h-[34px] rounded-[50%] bg-[#E9F1E0] flex items-center justify-center">
									<img src='/template-list/type.png' alt='Calendar' />
								</div>
								<div>
									<p className="text-[#A0A0A0] text-[14px]">Type</p>
									<p className="text-[#101018] text-[14px] font-medium">Beauty</p>
								</div>
							</div>

							<div>
								<div className="w-[34px] h-[34px] rounded-[50%] bg-[#E9F1E0] flex items-center justify-center">
									<img src='/template-list/creator.png' alt='Calendar' />
								</div>
								<div>
									<p className="text-[#A0A0A0] text-[14px]">Created By</p>
									<p className="text-[#101018] text-[14px] font-medium">Amrutam</p>
								</div>
							</div>

						</div>

						{/* Description */}

						<div className="w-[80%] max-w-[750px]">
							<h4 className="text-[#101018] font-medium mb-2">Description</h4>
							<p className="text-[#A0A0A0] text-[15px]">
								200 words description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
								<span
									className={`${showFullDesc && 'hidden'} text-[#3A643B] text-[15px] font-semibold cursor-pointer`}
									onClick={toggleDesc}
								>
									Read more
								</span>
								<span className={`${showFullDesc? 'inline': 'hidden'}`} >
									200 words description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
									200 words description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
								</span>
								<span
									className={`${!showFullDesc && 'hidden'} text-[#3A643B] text-[15px] font-semibold cursor-pointer`}
									onClick={toggleDesc}
								>
									Read less
								</span>
							</p>
						</div>
					</div>

				</div>

				{/* Reminders */}

				<div>
					<h3 className='text-[#101018] text-[20px] font-medium font-dm mb-4'>List of Reminders</h3>
					<div className='flex flex-wrap items-center gap-12'>
						{
							reminders.map((reminder, index) => {
								return <ReminderCard key={index} reminder={reminder}></ReminderCard>
							})
						}

					</div>
				</div>	
			</div>
		</>
	);
}




function ReminderCard({ reminder }) {
	return (
		<div className='relative w-[418px] border border-[#F3F3F3] space-y-4 px-5 py-4 rounded-[20px]'>
			<h4 className='font-medium'>{reminder.name}</h4>
			<div className='inline-block bg-[#E9F1E0] text-[14px] p-[10px] text-[#A0A0A0] font-dm rounded-[64px]'>
				{reminder.type} 
			</div>

			{/* Days */}

			<div className='flex items-center pb-1 overflow-scroll small-vertical-scrollbar'>
				<img src='/template-list/calendar.png' alt='Calendar' />
				{
					reminder.days.map((day, index) => {
						const lastIndex = reminder.days.length - 1;

						return (
							<p key={day} className={`text-[#A0A0A0] text-[14px] font-medium px-2  ${index !== lastIndex && 'right-vertical-border'}`}>{day}</p>
						);
					})
				}
			</div>

			{/* Times */}

			<div className='flex items-center pb-1 overflow-scroll small-vertical-scrollbar'>
				<img src='/template-list/clock.png' alt='Clock' />
				{
					reminder.times.map((time, index) => {
						const lastIndex = reminder.times.length - 1;

						return (
							<p key={time} className={`text-[#A0A0A0] text-[14px] font-medium px-2 ${index !== lastIndex && 'right-vertical-border'}`}>{time}</p>
						);
					})
				}
			</div>



		</div>
	)

}

export default RoutineDetails;