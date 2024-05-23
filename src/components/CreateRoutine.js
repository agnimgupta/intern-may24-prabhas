function CreateRoutine() {
	return ( 
		<div>
			<div className='*:text-[15px] *:font-medium flex items-center gap-2'>
				<p className='text-[#878890]'>Routines</p>
				<img src='/template-list/mini-arrow-right.png' alt='Arrow Right' />
				<p className='text-[#878890]'>Add Routine</p>
				<img src='/template-list/arrow-r-green.png' alt='Arrow Right' />
				<p className='text-[#3A643B]'>Create Routine</p>
			</div>


			<div className="relative bg-white rounded-xl px-6 py-4 mt-6 space-y-12">
				<h1 className='text-[22px] '>Create Routine</h1>

				<form className='space-y-8'>
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


					<div className="flex items-center gap-4">
						<div className="w-[34px] h-[34px] rounded-lg border-[1.5px] cursor-pointer border-[#3A643B] flex items-center justify-center">
							<img src='/create-routine/plus.png' alt='plus' />
						</div>
						<div>
							<p className="text-[#3A643B] text-[14px] font-medium">Add Reminder Items</p>
							<p className="text-[#A0A0A0] text-[12px]">Add Items for your Routine</p>
						</div>
					</div>


					


					


				
					
				</form>
				



			</div>
		</div>

	);
}

export default CreateRoutine;