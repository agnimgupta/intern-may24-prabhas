import { useEffect } from 'react';



const reminderItems = [
	{
		name: 'Amrutam Kuntal Hair Care',
		imageUrl: '/create-routine/reminder-item.png',
		type: 'Consumable'
	},
	{
		name: 'Amrutam Kuntal Hair Care',
		imageUrl: '/create-routine/reminder-item.png',
		type: 'Consumable'
	}
]


const reminderChannels = [
	'SMS',
	'Whatsapp',
	'Email'
];


const careGivers = [
	{
		name: 'Pema Leilani',
		imageUrl: '/create-routine/pema.png',
		type: 'Personal Contact'
	},
	{
		name: 'Pema Leilani',
		imageUrl: '/create-routine/pema.png',
		type: 'Personal Contact'
	},
]





function CreateRoutine() {


	useEffect(() => {
		const description = document.getElementById('description');

		function addBullets() {
			let text = description.value;
			// Split the text into lines
			let lines = text.split('\n');
			// Add bullet points to each line
			for (let i = 0; i < lines.length; i++) {

				if (lines[i] === '•') {
					lines[i] = '';
					continue;
				}


				if (lines[i].trim() !== '' && !lines[i].startsWith('• ')) {
					if (i === 0) {
						lines[i] = '• ' + lines[i].trim();
					} else {
						lines[i] = '\n• ' + lines[i].trim();
					}
				}
			}
			// Join the lines back together
			description.value = lines.join('\n');
		}
		
		description.addEventListener('input', addBullets);

		return () => {
			description.removeEventListener('input', addBullets)
		}
	}, []);





	return ( 
		<div>
			<div className='*:text-[15px] *:font-medium flex items-center gap-2'>
				<p className='text-[#878890]'>Routines</p>
				<img src='/template-list/mini-arrow-right.png' alt='Arrow Right' />
				<p className='text-[#878890]'>Add Routine</p>
				<img src='/template-list/arrow-r-green.png' alt='Arrow Right' />
				<p className='text-[#3A643B]'>Create Routine</p>
			</div>


			<div className="relative bg-white rounded-xl px-6 pt-4 pb-10 mt-6 space-y-12">
				<h1 className='text-[22px] '>Create Routine</h1>

				<form>
					<div className='space-y-8'>
						<div className='flex items-center justify-between'>
							<div className='space-y-8'>
								<div className='relative space-y-2'>
									<input
										type='text'
										id='Routine-name'
										className='w-[400px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
									/>
									<label
										for='Routine-name'
										className='px-2 absolute top-[-17px] left-4 text-[#A0A0A0] text-sm bg-white'
									>
										Routine Name
									</label>
									<p className='text-[#A0A0A0] text-xs ml-4'>This will be displayed as your Routine name.</p>
								</div>

								<div className='space-y-2'>
									<div className="relative w-[210px] h-[210px] border-2 bg-[#EAF2EA] border-dashed border-[#97AB97] rounded-xl cursor-pointer flex flex-col gap-2 items-center justify-center">
										<input type="file" accept="image/*" id="image" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
										<img src='/create-routine/image.png' alt='logo' />
										<p className='text-[14px]'>Upload Image</p>
									</div>
									<p className='text-[#A0A0A0] text-xs'>This will be displayed as your Routine name.</p>
								</div>

								<div className="relative space-y-2">
									<p className="absolute bg-white px-2 left-2 text-[#A0A0A0] text-[12px]">Category</p>
									<div className="absolute w-[45px] h-[45px] top-[8px] left-[350px] bg-white rounded-[50%] flex items-center justify-center">
										<img src='/create-routine/arrow-down.png' alt='arrow' />
									</div>
									<select
										className="w-[400px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
									>
										<option value="Lifestyle">Lifestyle</option>
										<option value="Health">Health</option>
										<option value="Haircare">Haircare</option>
										<option value="Eyecare">Eyecare</option>
									</select>
									<p className='text-[#A0A0A0] text-xs ml-4'>Please select the category of your Routine.</p>

								</div>

								<div className="flex items-center gap-10">

									<div className="relative space-y-2">
										<p className="absolute bg-white px-2 left-2 text-[#A0A0A0] text-[12px]">Duration</p>
										<div className="absolute w-[45px] h-[45px] top-[8px] left-[150px] bg-white rounded-[50%] flex items-center justify-center">
											<img src='/create-routine/arrow-down.png' alt='arrow' />
										</div>
										<select
											className="w-[197px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
										>
											{
												Array.from({ length: 10 }).map((_, index) => {
													return <option key={index} value={index}>{index}</option>
												})
											}
										</select>
									</div>

									<div className="relative space-y-2">
										<p className="absolute bg-white px-2 left-2 text-[#A0A0A0] text-[12px]">Unit</p>
										<div className="absolute w-[45px] h-[45px] top-[8px] left-[115px] bg-white rounded-[50%] flex items-center justify-center">
											<img src='/create-routine/arrow-down.png' alt='arrow' />
										</div>
										<select
											className="w-[162px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
										>
											<option value='Days'>Days</option>
											<option value='Weeks'>Weeks</option>
											<option value='Months'>Months</option>
											<option value='Years'>Years</option>
										</select>
									</div>

								</div>

							</div>

							<div className='flex flex-col items-center justify-center gap-5'>
								<div className='h-[70px] w-[2px] bg-[#3A643B66]'></div>
								<p className='text-[#646665] font-medium font-dm text-[14px]'>OR</p>
								<div className='h-[70px] w-[2px] bg-[#3A643B66]'></div>
							</div>
							<div className='self-end space-y-20'>

								<div className='ml-12 space-y-4'>
									<h4 className='text-[#101018] text-[14px]'>Select from our picks</h4>

									<div className='flex items-center gap-4'>
										<label for='hair1' className='rounded-lg border-2 border-[#646665]'>
											<img src='/create-routine/hair1.png' alt='hair logo' /> 
										    <input type='checkbox' id='hair1' className='absolute invisible'/>
										</label>
										<label for='hair2'>
											<img src='/create-routine/hair2.png' alt='hair logo' /> 
										    <input type='checkbox' id='hair2' className='absolute invisible'/>
										</label>
										<label for='hair3'>
											<img src='/create-routine/hair3.png' alt='hair logo' /> 
										    <input type='checkbox' id='hair3' className='absolute invisible'/>
										</label>
										<label for='hair4'>
											<img src='/create-routine/hair4.png' alt='hair logo' /> 
										    <input type='checkbox' id='hair4' className='absolute invisible'/>
										</label>
										<label for='hair5'>
											<img src='/create-routine/hair5.png' alt='hair logo' /> 
										    <input type='checkbox' id='hair5' className='absolute invisible'/>
										</label>
									</div>
								</div>

								<div className='relative space-y-1'>
									<textarea
										type='text'
										id='description'
										className='w-[400px] h-[178px] px-4 py-4 text-[#1D1B20] text-[14px] resize-none rounded-2xl border border-[#CED8E0] focus:outline-none'
									></textarea>
									<label
										for='description'
										className='px-2 absolute top-[-17px] left-4 text-[#A0A0A0] text-sm bg-white'
									>
										Description
									</label>
									<p className='text-[#A0A0A0] text-xs ml-4'>Please add at least 3 pointers about the Routine.</p>
								</div>

							</div>

						</div>
						

						

						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<div className="w-[34px] h-[34px] rounded-lg border-[1.5px] cursor-pointer border-[#3A643B] flex items-center justify-center">
									<img src='/create-routine/plus.png' alt='plus' />
								</div>
								<div>
									<p className="text-[#3A643B] text-[14px] font-medium">Add Reminder Items</p>
									<p className="text-[#A0A0A0] text-[12px]">Add Items for your Routine</p>
								</div>

								<p className="text-[#3A643B] text-[14px] font-medium cursor-pointer ml-auto self-start">View All (4)</p>
							</div>

							<div className="flex items-center gap-10 flex-wrap">
								{
									reminderItems.map((reminder, index) => {
										return <ReminderItem key={index} reminder={reminder} />
									})
								}

							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="w-[34px] h-[34px] rounded-lg border-[1.5px] cursor-pointer border-[#3A643B] flex items-center justify-center">
								<img src='/create-routine/plus.png' alt='plus' />
							</div>
							<div>
								<p className="text-[#3A643B] text-[14px] font-medium">Add Weekly Benefits</p>
								<p className="text-[#A0A0A0] text-[12px]">Add weekly benefits of this Routine so that users can tally the progress</p>
							</div>


						</div>

						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<div className="w-[34px] h-[34px] rounded-lg border-[1.5px] cursor-pointer border-[#3A643B] flex items-center justify-center">
									<img src='/create-routine/plus.png' alt='plus' />
								</div>
								<div>
									<p className="text-[#3A643B] text-[14px] font-medium">Add Reminder Channels</p>
									<p className="text-[#A0A0A0] text-[12px]">We will notify you about your Routine using channels.</p>
								</div>

							</div>

							<div className="flex items-center gap-4 ml-12">
								{
									reminderChannels.map(channel => {
										return <ReminderChannel key={channel} name={channel} />
									})
								}

							</div>
						</div>


						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<div className="w-[34px] h-[34px] rounded-lg border-[1.5px] cursor-pointer border-[#3A643B] flex items-center justify-center">
									<img src='/create-routine/plus.png' alt='plus' />
								</div>
								<div>
									<p className="text-[#3A643B] text-[14px] font-medium">Assign a Caregiver</p>
									<p className="text-[#A0A0A0] text-[12px]">We will keep updating caregiver about your Routine. </p>
								</div>

							</div>

							<div className="flex items-center gap-10 flex-wrap">
								{
									careGivers.map((careGiver, index) => {
										return <CareGiver key={index} details={careGiver} />
									})
								}

							</div>
						</div>

					</div>

					<button
						type='submit'
						className='w-[374px] px-[126px] py-[17px] block mt-[100px] mx-auto rounded-xl bg-[#3A643B] font-nunito text-white font-semibold drop-shadow-xl'>
						Proceed
					</button>				
					
				</form>
			</div>
		</div>

	);
}



function ReminderItem({ reminder }) {
	return (
		<div className="w-[342px]  border border-[#F3F3F3] shadow-md px-2 py-[10px] rounded-2xl flex gap-2 items-start">
			<img src={reminder.imageUrl} alt='Reminder' />

			<div className="space-y-2">
				<p className="w-[190px] text-[#1D1B20] font-dm font-medium overflow-hidden text-nowrap text-ellipsis">{reminder.name}</p>
				<div className='inline-block bg-[#E9F1E0] text-[14px] p-1 text-[#A0A0A0]  font-dm rounded-[64px]'>
					{reminder.type}
				</div>
				<p className="text-[#3A643B] text-[14px] font-semibold font-nunito cursor-pointer">View Details</p>
			</div>

			<img src='/create-routine/cross-icon.png' alt='Cross'  className="cursor-pointer"/>
		</div>
	);
}



function ReminderChannel({ name }) {
	return (
		<div className="flex items-center gap-2 px-2 py-[6px] rounded-lg bg-[#3A643B]">
			<p className="text-white font-dm font-medium text-[14px]">{name}</p>
			<img src='/create-routine/cross-white.png' alt='cross' className="cursor-pointer" />
		</div>
	)
}


function CareGiver({ details }) {
	return (
		<div className="w-[342px]  border border-[#F3F3F3] shadow-md p-[10px] rounded-2xl flex gap-2 items-start">
			<img src={details.imageUrl} alt='Reminder' />

			<div className="space-y-2">
				<p className="w-[190px] text-[#1D1B20] font-dm font-medium overflow-hidden text-nowrap text-ellipsis">{details.name}</p>
				<div className='inline-block bg-[#E9F1E0] text-[14px] p-1 text-[#A0A0A0]  font-dm rounded-[64px]'>
					{details.type}
				</div>
				<p className="text-[#3A643B] text-[14px] font-semibold font-nunito cursor-pointer">View Details</p>
			</div>

			<img src='/create-routine/cross-icon.png' alt='Cross' className="cursor-pointer" />
		</div>
	);
}
export default CreateRoutine;