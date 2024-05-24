import {  useState } from "react";


const steps = {
	1: <FirstStep></FirstStep>,
	2: <SecondStep></SecondStep>,
	3: <ThirdStep></ThirdStep>
}


function AddReminder() {
	const [currentStep, setCurrentStep] = useState(1);


	return (  
		<div>
			<div className='*:text-[15px] *:font-medium flex items-center gap-2'>
				<p className='text-[#878890]'>Routines</p>
				<img src='/template-list/mini-arrow-right.png' alt='Arrow Right' />
				<p className='text-[#878890]'>Add Routine</p>
				<img src='/template-list/mini-arrow-right.png' alt='Arrow Right' />
				<p className='text-[#878890]'>Create Routine</p>
				<img src='/template-list/arrow-r-green.png' alt='Arrow Right' />
				<p className='text-[#3A643B]'>Add Reminder Items</p>
			</div>


			<div className="h-[500px] bg-white rounded-xl px-6 py-4 mt-6 space-y-6">
				<h1 className='text-[22px] '>Add Reminder Items</h1>

				<ProgressBar currentStep={currentStep}></ProgressBar>

				<form>
					{
						steps[currentStep]
					}
					
				</form>

				

			</div>


		</div>
	);
}



function ProgressBar({currentStep}) {
	return (
		<div className="flex items-center gap-4">
			{
				Array.from({ length: 3 }).map((_, index)=> {
					if (currentStep >= index + 1) {
						return <div className="w-[300px] h-[5px] rounded bg-[#3A643B]"></div>						
					}

					return <div className="w-[300px] h-[5px] rounded bg-[#D9D9D9]"></div>; 
				})
			}
		</div>
	)
}


function FirstStep() {
	return (
		<div className="space-y-4">
			<h3 className="text-[#101018] text-[14px] font-dm">Select Reminder Type</h3>

			<div className="flex items-center gap-[100px]">
				<div className="relative">
					<img src='/reminder-items/product-based.png' alt="Product Based" />
					<label for='product-based' name='activity' className=""></label>
					<input type='radio' id='product-based' className="hidden" />

				</div>

				<div className='flex flex-col items-center justify-center gap-5'>
					<div className='h-[40px] w-[2px] bg-[#3A643B66]'></div>
					<p className='text-[#646665] font-medium font-dm text-[14px]'>OR</p>
					<div className='h-[40px] w-[2px] bg-[#3A643B66]'></div>
				</div>

				<div className="relative">
					<img src='/reminder-items/activity-based.png' alt="Product Based" />
					<label for='activity-based' name='activity' className=""></label>
					<input type='radio' id='activity-based' className="hidden" />

				</div>
			</div>
		</div>
	)
}

function SecondStep() {


	return (
		<div className="space-y-12">
			<h3 className="text-[#101018] text-[14px] font-dm">Enter Activity Details</h3>

			<div className="flex items-start gap-[100px]">
				<div className="relative space-y-2">
					<p className="absolute bg-white px-2 left-2 text-[#A0A0A0] text-[12px]">Activity Name</p>
					<div className="absolute w-[45px] h-[45px] top-[8px] left-[350px] bg-white rounded-[50%] flex items-center justify-center">
						<img src='/create-routine/arrow-down.png' alt='arrow' />
					</div>
					<select
						className="w-[400px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
					>
						<option value="Drinking Water">Drinking Water</option>
						<option value="Eating Food">Eating Food</option>
						<option value="Yoga">Yoga</option>
						<option value="Cycling">Cycling</option>
					</select>
					<p className='text-[#3A643B] text-xs font-medium ml-4'>Unable to find activity? Add your Activity</p>

				</div>
				<div className="relative space-y-2">
					<p className="absolute bg-white px-2 left-2 text-[#A0A0A0] text-[12px]">Activity Type</p>
					<div className="absolute w-[45px] h-[45px] top-[8px] left-[350px] bg-white rounded-[50%] flex items-center justify-center">
						<img src='/create-routine/arrow-down.png' alt='arrow' />
					</div>
					<select
						className="w-[400px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
					>
						<option value="Physical">Physical</option>
						<option value="Mental">Mental</option>
						<option value="Spiritual">Spiritual</option>
					</select>

				</div>
			</div>


			<div className="flex  items-center gap-[40px]">

				<div className='relative space-y-2'>
					<input
						type='text'
						id='quantity'
						list='quantity'
						className='w-[217px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
					/>
					<div className="absolute top-[6px] right-4 flex flex-col gap-4 items-center">
						<img
							src='/reminder-items/arrow-up.png'
							alt='Arrow Up'
							className="cursor-pointer"
						/>
						<img
							src='/reminder-items/arrow-down.png'
							alt='Arrow Down'
							className="cursor-pointer"
						/>
					</div>
					{/* <p className="absolute top-[7.5px] left-12 text-[#1D1B20]">{unit}</p> */}
					<label
						for='quantity'
						className='px-2 absolute top-[-17px] left-4 text-[#A0A0A0] text-sm bg-white'
					>
						Quantity
					</label>
				</div>

				<div className='relative space-y-2'>
					<input
						type='text'
						id='unit'
						className='w-[141px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
					/>
					<label
						for='unit'
						className='px-2 absolute top-[-17px] left-4 text-[#A0A0A0] text-sm bg-white'
					>
						Unit
					</label>
				</div>

				

			</div>


		</div>
	)
}

function ThirdStep() {
	return (
		<div>

		</div>
	)
}

export default AddReminder;