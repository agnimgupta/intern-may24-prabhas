import { Fragment, useRef, useState } from "react";
import { useForm } from "react-hook-form"





const days = [
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat',
	'Sun'
];





function AddReminder() {
	const [currentStep, setCurrentStep] = useState(0);
	const {
		register,
		handleSubmit,
		// watch,
		// formState: { errors },
	} = useForm();
	const [activityForm, setActivityForm] = useState(false);
	const activityFormSteps = [
		<ActivityDetails setStep={setCurrentStep} register={register}></ActivityDetails>,
		<ActivityTimeSlot register={register}></ActivityTimeSlot>
	];

	const productFormSteps = [
		<ProductDetails setStep={setCurrentStep} register={register}></ProductDetails>,
		<ProductTimeSlot register={register}></ProductTimeSlot>
	];
	




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


			<div className=" bg-white rounded-xl px-6 py-8 mt-6 space-y-6">
				<h1 className='text-[22px] '>Add Reminder Items</h1>

				<ProgressBar currentStep={currentStep}></ProgressBar>

				<form
					onSubmit={handleSubmit(data => {

						console.log('handlesubmit run')
						console.log(data);
						})
					}
				>
					{
						
						currentStep === 0 && <FirstStep setForm={setActivityForm} register={register} setStep={setCurrentStep}></FirstStep>
					}
					{
						activityForm ? activityFormSteps[currentStep - 1]: productFormSteps[currentStep - 1]
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
					if (currentStep >= index ) {
						return <div key={index} className="w-[300px] h-[5px] rounded bg-[#3A643B]"></div>						
					}

					return <div key={index} className="w-[300px] h-[5px] rounded bg-[#D9D9D9]"></div>
				})
			}
		</div>
	)
}


function FirstStep({register, setForm, setStep}) {
	return (
		<div>
			<h3 className="text-[#101018] mb-[20px] text-[14px] font-dm">Select Reminder Type</h3>

			<div className="mx-auto flex flex-col md:flex-row items-center  gap-[40px] sm:gap-[100px]">
				<div className="relative">
					<label htmlFor='product-based' name='activity' >
						<img src='/reminder-items/product-based.png' alt="Product Based" />
					</label>
					<input
						type='radio'
						{...register('reminder')}
						value='Product Based'
						id='product-based'
						className="hidden"
						onChange={() => setForm(false)}
					/>
					<img
						src='/reminder-items/green-tick.png'
						alt='Green Tick'
						className="absolute top-9 left-[13px] green-tick"
					/>

				</div>

				<div className='flex  md:flex-col items-center justify-center gap-5'>
					<div className='h-[2px] md:h-[40px] w-[40px] md:w-[2px] bg-[#3A643B66]'></div>
					<p className='text-[#646665] font-medium font-dm text-[14px]'>OR</p>
					<div className='h-[2px] md:h-[40px] w-[40px] md:w-[2px] bg-[#3A643B66]'></div>
				</div>

				<div className="relative">
					<label htmlFor='activity-based' name='activity'>
						<img src='/reminder-items/activity-based.png' alt="Product Based" />
					</label>
					<input
						type='radio'
						{...register('reminder')}
						value='Activity Based'
						id='activity-based'
						className="hidden"
						onChange={() => setForm(true)}
					/>
					<img
						src='/reminder-items/green-tick.png'
						alt='Green Tick'
						className="absolute top-9 left-[12px] green-tick"
					/>

				</div>	
			</div>

			<button
				onClick={() => setStep(1)}
				className="block mt-10 w-[300px] sm:w-[374px] py-4 mx-auto drop-shadow-xl rounded-xl bg-[#3A643B] text-center text-white font-semibold font-nunito">
				Next (1/3)
			</button>
			
		</div>
	)
}

function ActivityDetails({setStep, register}) {
	const [selectedDays, setSelectedDays] = useState([]);
	const [showDays, setShowDays] = useState(false);
	const [value, setValue] = useState({
		quantity: 0,
		unit: 'LTR'
	});
	const customDays = useRef(null);


	function handleDayClick(day) {
		const dayIndex = selectedDays.indexOf(day);

		if (dayIndex !== -1) {
			const newDays = [...selectedDays];
			newDays.splice(dayIndex, 1);

			setSelectedDays(newDays);
		} else {
			const newDays = [...selectedDays];
			newDays.push(day);

			setSelectedDays(newDays);
		}

		
	}


	function handleRadioChange(e) {
		if (e.target === customDays.current) {
			setShowDays(true);
		} else {
			setShowDays(false);
		}
	}

	function handleValueChange(e) {
		const newValue = {
			...value,
			[e.target.id]: e.target.value
		};

		setValue(newValue);
	}


	return (
		<div className="space-y-12">
			<h3 className="text-[#101018] text-[14px] font-dm">Enter Activity Details</h3>

			<div className="flex  items-start flex-wrap gap-[40px] xl:gap-[100px]">
				<div className="relative space-y-2">
					<p className="absolute bg-white px-2 left-2 text-[#A0A0A0] text-[12px]">Activity Name</p>
					<div className="absolute w-[45px] h-[45px] top-[8px] left-[250px] sm:left-[350px] bg-white rounded-[50%] flex items-center justify-center">
						<img src='/create-routine/arrow-down.png' alt='arrow' />
					</div>
					<select
						{...register('activity-name', {required: true})}
						className="w-[300px] sm:w-[400px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
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
					<div className="absolute w-[45px] h-[45px] top-[8px] left-[250px] sm:left-[350px] bg-white rounded-[50%] flex items-center justify-center">
						<img src='/create-routine/arrow-down.png' alt='arrow' />
					</div>
					<select
						{...register('activity-type', { required: true })}
						className="w-[300px] sm:w-[400px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
					>
						<option value="Physical">Physical</option>
						<option value="Mental">Mental</option>
						<option value="Spiritual">Spiritual</option>
					</select>

				</div>
			</div>

			<div className="flex items-start flex-wrap gap-[40px] xl:gap-[100px]">
				<div className="flex items-center flex-wrap gap-[40px]">

					<div className='relative'>
						<input
							{...register('quantity', { required: true })}
							type='text'
							id='quantity'
							value={value.quantity}
							onChange={handleValueChange}
							className='w-[300px] sm:w-[217px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
						/>
						<div className="absolute top-[15px] right-4 flex flex-col gap-4 items-center">
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
							htmlFor='quantity'
							className='px-2 absolute top-[-10px] left-4 text-[#A0A0A0] text-sm bg-white'
						>
							Quantity
						</label>
					</div>

					<div className="relative ">
						<p className="absolute bg-white px-2 top-[-10px] left-2 text-[#A0A0A0] text-[12px]">Unit</p>
						<div className="absolute w-[45px] h-[45px] top-[8px] right-[5px] sm:left-[95px] bg-white rounded-[50%] flex items-center justify-center">
							<img src='/create-routine/arrow-down.png' alt='arrow' />
						</div>
						<select
							id='unit'
							{...register('unit', { required: true })}
							onChange={handleValueChange}
							className="w-[300px] sm:w-[141px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
						>
							<option value="LTR">LTR</option>
							<option value="KILO LTR">KILO LTR</option>
							<option value="GALLON">GALLON</option>
						</select>

					</div>



				</div>


				<div className="space-y-8">
					<div className="flex items-start gap-10">
						<div className="flex items-center gap-2">
							<input
								type='radio'
								id='daily'
								{...register('schedule', { required: true })}
								value='Daily'
								onChange={handleRadioChange}
								className="w-[24px] h-[24px] accent-[#3A643B] border-[#3A643B] checked:bg-[#3A643B]"
							/>
							<label
								htmlFor='daily'
								className="text-[14px] font-dm text-[#101018]"
							>
								Daily
							</label>
						</div>

						<div className="flex items-center gap-2">
							<input
								type='radio'
								id='custom-days'
								// name='schedule'
								{...register('schedule', { required: true })}
								value='Custom Days'
								ref={customDays}
								onChange={handleRadioChange}
								className="w-[24px] h-[24px] accent-[#3A643B] border-[#3A643B] checked:bg-[#3A643B]"
							/>
							<label
								htmlFor='custom-days'
								className="text-[14px] font-dm text-[#101018]"
							>
								Custom Days
							</label>
						</div>
					</div>

					{
						showDays && (
							<div className="bg-[#E9F1E0] rounded-2xl p-2 flex gap-[6px] sm:gap-2">
								{
									days.map((day, index) => {
										const selected = selectedDays.includes(index);

										return (
											<Fragment key={day}>
												<label
													htmlFor={day}
													onClick={() => handleDayClick(index)}
													className={`w-[35px] sm:w-[41px] text-[11px] sm:text-[12px] ${selected ? 'text-white' : 'text-[#A0A0A0]'} ${selected && 'bg-[#3A643B]'} font-dm text-center rounded-[8px] px-1 sm:px-2 py-[10px] cursor-pointer`}>
													{day}
												</label>
												<input type="checkbox" {...register(day)} value={day} id={day} className="hidden" />
											</Fragment>

										)
									})
								}

							</div>
						)
					}
				</div>		

			</div>

			<button
				onClick={() => setStep(2)}
				className="block w-[300px] sm:w-[374px] py-4 mx-auto drop-shadow-xl rounded-xl bg-[#3A643B] text-center text-white font-semibold font-nunito">
				Next (2/3)
			</button>
		</div>
	)
}


function ProductDetails({ setStep, register }) {
	const [selectedDays, setSelectedDays] = useState([]);
	const [showDays, setShowDays] = useState(false);
	const [value, setValue] = useState({
		quantity: 0,
		unit: 'LTR'
	});
	const customDays = useRef(null);


	function handleDayClick(day) {
		const dayIndex = selectedDays.indexOf(day);

		if (dayIndex !== -1) {
			const newDays = [...selectedDays];
			newDays.splice(dayIndex, 1);

			setSelectedDays(newDays);
		} else {
			const newDays = [...selectedDays];
			newDays.push(day);

			setSelectedDays(newDays);
		}


	}


	function handleRadioChange(e) {
		if (e.target === customDays.current) {
			setShowDays(true);
		} else {
			setShowDays(false);
		}
	}

	function handleValueChange(e) {
		const newValue = {
			...value,
			[e.target.id]: e.target.value
		};

		setValue(newValue);
	}


	return (
		<div className="space-y-12">
			<h3 className="text-[#101018] text-[14px] font-dm">Enter Product Details</h3>

			<div className="flex  items-start flex-wrap gap-[40px] xl:gap-[100px]">
				<div className="relative space-y-2">
					<p className="absolute bg-white px-2 left-2 text-[#A0A0A0] text-[12px]">Product Name</p>
					<div className="absolute w-[45px] h-[45px] top-[8px] left-[250px] sm:left-[350px] bg-white rounded-[50%] flex items-center justify-center">
						<img src='/create-routine/arrow-down.png' alt='arrow' />
					</div>
					<select
						{...register('product-name', { required: true })}
						className="w-[300px] sm:w-[400px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
					>
						<option value="Amrutam Skinkey Malt">Amrutam Skinkey Malt</option>
						<option value="Amrutam Hair Oil">Amrutam Hair Oil</option>
						<option value="Amrutam Eye drops">Amrutam Eye drops</option>
						<option value="Amrutam Hair Growth">Amrutam Hair Growth</option>
					</select>
					<p className='text-[#3A643B] text-xs font-medium ml-4'>Unable to find product? Add your Product</p>

				</div>


				<div className="relative space-y-2">
					<p className="absolute bg-white px-2 left-2 text-[#A0A0A0] text-[12px]">Product Type</p>
					<div className="absolute w-[45px] h-[45px] top-[8px] left-[250px] sm:left-[350px] bg-white rounded-[50%] flex items-center justify-center">
						<img src='/create-routine/arrow-down.png' alt='arrow' />
					</div>
					<select
						{...register('product-type', { required: true })}
						className="w-[300px] sm:w-[400px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
					>
						<option value="Consumable">Consumable</option>
						<option value="Non Consumable">Non Consumable</option>
						<option value="Edible">Edible</option>
					</select>

				</div>
			</div>

			<div className="flex items-start flex-wrap gap-[40px] xl:gap-[100px]">
				<div className="flex items-center flex-wrap gap-[40px]">

					<div className='relative'>
						<input
							{...register('quantity', { required: true })}
							type='text'
							id='quantity'
							value={value.quantity}
							onChange={handleValueChange}
							className='w-[300px] sm:w-[217px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
						/>
						<div className="absolute top-[15px] right-4 flex flex-col gap-4 items-center">
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
							htmlFor='quantity'
							className='px-2 absolute top-[-10px] left-4 text-[#A0A0A0] text-sm bg-white'
						>
							Quantity
						</label>
					</div>

					<div className="relative ">
						<p className="absolute bg-white px-2 top-[-10px] left-2 text-[#A0A0A0] text-[12px]">Unit</p>
						<div className="absolute w-[45px] h-[45px] top-[8px] right-[5px] sm:left-[95px] bg-white rounded-[50%] flex items-center justify-center">
							<img src='/create-routine/arrow-down.png' alt='arrow' />
						</div>
						<select
							id='unit'
							{...register('unit', { required: true })}
							onChange={handleValueChange}
							className="w-[300px] sm:w-[141px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
						>
							<option value="TBSP">TBSP</option>
							<option value="SP">SP</option>
							<option value="MRSP">MRSP</option>
						</select>

					</div>



				</div>


				<div className="space-y-8">
					<div className="flex items-start gap-10">
						<div className="flex items-center gap-2">
							<input
								type='radio'
								id='daily'
								{...register('schedule', { required: true })}
								value='Daily'
								onChange={handleRadioChange}
								className="w-[24px] h-[24px] accent-[#3A643B] border-[#3A643B] checked:bg-[#3A643B]"
							/>
							<label
								htmlFor='daily'
								className="text-[14px] font-dm text-[#101018]"
							>
								Daily
							</label>
						</div>

						<div className="flex items-center gap-2">
							<input
								type='radio'
								id='custom-days'
								// name='schedule'
								{...register('schedule', { required: true })}
								value='Custom Days'
								ref={customDays}
								onChange={handleRadioChange}
								className="w-[24px] h-[24px] accent-[#3A643B] border-[#3A643B] checked:bg-[#3A643B]"
							/>
							<label
								htmlFor='custom-days'
								className="text-[14px] font-dm text-[#101018]"
							>
								Custom Days
							</label>
						</div>
					</div>

					{
						showDays && (
							<div className="bg-[#E9F1E0] rounded-2xl p-2 flex gap-[6px] sm:gap-2">
								{
									days.map((day, index) => {
										const selected = selectedDays.includes(index);

										return (
											<Fragment key={day}>
												<label
													htmlFor={day}
													onClick={() => handleDayClick(index)}
													className={`w-[35px] sm:w-[41px] text-[11px] sm:text-[12px] ${selected ? 'text-white' : 'text-[#A0A0A0]'} ${selected && 'bg-[#3A643B]'} font-dm text-center rounded-[8px] px-1 sm:px-2 py-[10px] cursor-pointer`}>
													{day}
												</label>
												<input type="checkbox" {...register(day)} value={day} id={day} className="hidden" />
											</Fragment>

										)
									})
								}

							</div>
						)
					}
				</div>

			</div>

			<button
				onClick={() => setStep(2)}
				className="block w-[300px] sm:w-[374px] py-4 mx-auto drop-shadow-xl rounded-xl bg-[#3A643B] text-center text-white font-semibold font-nunito">
				Next (2/3)
			</button>
		</div>
	)
}



function ActivityTimeSlot({setStep, register}) {

	return (
		<div className="space-y-12">
			<h3 className="text-[#101018] text-[14px] font-dm">Add Time Slot</h3>

			{/* <div className="flex  items-start flex-wrap gap-[40px] xl:gap-[100px]">
				<div className="relative space-y-2">
					<p className="absolute bg-white px-2 left-2 text-[#A0A0A0] text-[12px]">Activity Name</p>
					<div className="absolute w-[45px] h-[45px] top-[8px] left-[250px] sm:left-[350px] bg-white rounded-[50%] flex items-center justify-center">
						<img src='/create-routine/arrow-down.png' alt='arrow' />
					</div>
					<select
						className="w-[300px] sm:w-[400px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
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
					<div className="absolute w-[45px] h-[45px] top-[8px] left-[250px] sm:left-[350px] bg-white rounded-[50%] flex items-center justify-center">
						<img src='/create-routine/arrow-down.png' alt='arrow' />
					</div>
					<select
						className="w-[300px] sm:w-[400px] h-[56px] rounded-2xl px-2 hover:bg-white focus:bg-white text-[#1D1B20] border border-[#CED8E0] focus:outline-none"
					>
						<option value="Physical">Physical</option>
						<option value="Mental">Mental</option>
						<option value="Spiritual">Spiritual</option>
					</select>

				</div>
			</div> */}

			<div className="flex items-start flex-wrap gap-[40px] xl:gap-[100px]">
				<div className="flex items-center flex-wrap gap-[40px]">

					<div className='relative'>
						<input
							type='number'
							id='hours'
							{...register('hours', { required: true })}
							className='w-[300px] sm:w-[141px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
						/>
						
						<div className="absolute w-[45px] h-[45px] top-[8px] right-[5px] sm:left-[95px] bg-white rounded-[50%] flex items-center justify-center">
							<img src='/create-routine/arrow-down.png' alt='arrow' />
						</div>

						
						{/* <p className="absolute top-[7.5px] left-12 text-[#1D1B20]">{unit}</p> */}
						<label
							htmlFor='hours'
							className='px-2 absolute top-[-10px] left-4 text-[#A0A0A0] text-sm bg-white'
						>
							Hours
						</label>
					</div>

					<div className='relative'>
						<input
							type='number'
							id='minutes'
							{...register('minutes', { required: true })}
							className='w-[300px] sm:w-[141px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
						/>

						<div className="absolute w-[45px] h-[45px] top-[8px] right-[5px] sm:left-[95px] bg-white rounded-[50%] flex items-center justify-center">
							<img src='/create-routine/arrow-down.png' alt='arrow' />
						</div>


						{/* <p className="absolute top-[7.5px] left-12 text-[#1D1B20]">{unit}</p> */}
						<label
							htmlFor='minutes'
							className='px-2 absolute top-[-10px] left-4 text-[#A0A0A0] text-sm bg-white'
						>
							Minutes
						</label>
					</div>
					
					<div className='relative'>
						<select
							type='text'
							id='unit'
							{...register('meridian', { required: true })}
							className='w-[300px] sm:w-[141px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
						> 
							<option value='AM'>AM</option>
							<option value='PM'>PM</option>

						</select>

						<div className="absolute w-[45px] h-[45px] top-[8px] right-[5px] sm:left-[95px] bg-white rounded-[50%] flex items-center justify-center">
							<img src='/create-routine/arrow-down.png' alt='arrow' />
						</div>


						<label
							htmlFor='unit'
							className='px-2 absolute top-[-10px] left-4 text-[#A0A0A0] text-sm bg-white'
						>
							Unit
						</label>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-4">
				<div className="w-[34px] h-[34px] rounded-lg border-[1.5px] cursor-pointer border-[#3A643B] flex items-center justify-center">
					<img src='/create-routine/plus.png' alt='plus' />
				</div>
				<div>
					<p className="text-[#3A643B] text-[14px] font-medium">Add More slots</p>
				</div>

			</div>

			<button
				type='submit'
				className="block w-[300px] sm:w-[374px] py-4 mx-auto drop-shadow-xl rounded-xl bg-[#3A643B] text-center text-white font-semibold font-nunito">
				Done (3/3)
			</button>
		</div>
	)
}


function ProductTimeSlot({ setStep, register }) {

	return (
		<div className="space-y-12">
			<h3 className="text-[#101018] text-[14px] font-dm">Add Time Slot</h3>
			
			<div className='relative'>

				<select
					id='meal'
					className='w-[300px] sm:w-[500px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
				>
					<option value='Breakfast'>Breakfast</option>
					<option value='Lunch'>Lunch</option>
					<option value='Dinner'>Dinner</option>
				</select>
				
				<label
					htmlFor='meal'
					className='px-2 absolute top-[-10px] left-4 text-[#A0A0A0] text-sm bg-white'
				>
					Meal
				</label>
				<div className="absolute w-[45px] h-[45px] top-[8px] right-[5px] sm:left-[450px] bg-white rounded-[50%] flex items-center justify-center">
					<img src='/create-routine/arrow-down.png' alt='arrow' />
				</div>
			</div>

			<div className="flex items-start flex-wrap gap-[40px] xl:gap-[100px]">
				<div className="flex items-center flex-wrap gap-[40px]">

					<div className='relative'>
						<input
							type='number'
							id='hours'
							{...register('hours', { required: true })}
							className='w-[300px] sm:w-[141px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
						/>

						<div className="absolute w-[45px] h-[45px] top-[8px] right-[5px] sm:left-[95px] bg-white rounded-[50%] flex items-center justify-center">
							<img src='/create-routine/arrow-down.png' alt='arrow' />
						</div>


						{/* <p className="absolute top-[7.5px] left-12 text-[#1D1B20]">{unit}</p> */}
						<label
							htmlFor='hours'
							className='px-2 absolute top-[-10px] left-4 text-[#A0A0A0] text-sm bg-white'
						>
							Hours
						</label>
					</div>

					<div className='relative'>
						<input
							type='number'
							id='minutes'
							{...register('minutes', { required: true })}
							className='w-[300px] sm:w-[141px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
						/>

						<div className="absolute w-[45px] h-[45px] top-[8px] right-[5px] sm:left-[95px] bg-white rounded-[50%] flex items-center justify-center">
							<img src='/create-routine/arrow-down.png' alt='arrow' />
						</div>


						{/* <p className="absolute top-[7.5px] left-12 text-[#1D1B20]">{unit}</p> */}
						<label
							htmlFor='minutes'
							className='px-2 absolute top-[-10px] left-4 text-[#A0A0A0] text-sm bg-white'
						>
							Minutes
						</label>
					</div>

					<div className='relative'>
						<select
							type='text'
							id='unit'
							{...register('meridian', { required: true })}
							className='w-[300px] sm:w-[141px] h-[56px] text-[#1D1B20] px-4 rounded-2xl border border-[#CED8E0] focus:outline-none'
						>
							<option value='AM'>AM</option>
							<option value='PM'>PM</option>

						</select>

						<div className="absolute w-[45px] h-[45px] top-[8px] right-[5px] sm:left-[95px] bg-white rounded-[50%] flex items-center justify-center">
							<img src='/create-routine/arrow-down.png' alt='arrow' />
						</div>


						<label
							htmlFor='unit'
							className='px-2 absolute top-[-10px] left-4 text-[#A0A0A0] text-sm bg-white'
						>
							Unit
						</label>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-4">
				<div className="w-[34px] h-[34px] rounded-lg border-[1.5px] cursor-pointer border-[#3A643B] flex items-center justify-center">
					<img src='/create-routine/plus.png' alt='plus' />
				</div>
				<div>
					<p className="text-[#3A643B] text-[14px] font-medium">Add More slots</p>
				</div>

			</div>

			<button
				type='submit'
				className="block w-[300px] sm:w-[374px] py-4 mx-auto drop-shadow-xl rounded-xl bg-[#3A643B] text-center text-white font-semibold font-nunito">
				Done (3/3)
			</button>
		</div>
	)
}

export default AddReminder;