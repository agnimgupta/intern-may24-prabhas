import { Link } from "react-router-dom";


function AddRoutine() {
	return (
		<div>
			<div className='*:text-[15px] *:font-medium flex items-center gap-2'>
				<p className='text-[#878890]'>Routines</p>
				<img src='/template-list/arrow-r-green.png' alt='Arrow Right' />
				<p className='text-[#3A643B]'>Add Routine</p>
			</div>


			<div className="h-[500px] bg-white rounded-xl py-4 mt-6 flex items-center justify-center">
				<div className="space-y-4">
					<Link to='/add-routine/create-routine'>
						<div className="w-[280px] h-[45px] px-5 py-4 bg-[#3A643B] rounded-xl text-white font-medium flex items-center justify-center">
							Create New Routine
						</div>
					</Link>
					<ul className="list-disc text-[#646665] text-[15px] pl-6">
						<li>New Personalized templates</li>
						<li>Add upto 7 reminders</li>
					</ul>
					<div className="flex items-center justify-center gap-5 font-nunito text-[#646665] font-semibold">
						<hr className="w-[70px]"/>
						OR
						<hr className="w-[70px]" />

					</div>
					<Link
						to='/template-list'
						className="block"
					>
						<div className="w-[280px] h-[45px] px-5 py-4 border border-[#3A643B] rounded-xl text-[#3A643B] font-medium flex items-center justify-center">
							Duplicate And Edit
						</div>
					</Link>

						<ul className="list-disc text-[#646665] text-[15px] pl-6">
							<li>Duplicate and edit existing template</li>
							<li>Customize according to your need</li>
						</ul>
					</div>

			</div>


		</div>

	);
}

export default AddRoutine;