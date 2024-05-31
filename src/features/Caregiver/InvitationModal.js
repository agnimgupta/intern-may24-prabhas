import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import PhoneNumberInput from "../../components/PhoneInput";







export default function InvitationModal({ open, setOpen }) {
	// const [isAssigned, setIsAssigned] = useState(false);
	function copyToClipboard() {
		let input = document.getElementById("invitation-link");

		input.select();
		input.setSelectionRange(0, 99999); // For mobile devices

		navigator.clipboard.writeText(input.value);

		alert("Copied the text: " + input.value);
	}


	return (
		<Transition show={open}>
			<Dialog className="relative z-10" onClose={setOpen}>
				<TransitionChild
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
				</TransitionChild>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<TransitionChild
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<DialogPanel className="relative flex transform gap-10 overflow-hidden rounded-2xl bg-white px-6 pb-6 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<div className="p-4 mt-10 w-full">
									<img src='/caregiver/close-circle.png' alt='close circle' className="absolute right-4 top-2 cursor-pointer" onClick={() => setOpen(false)} />

									<div className='relative space-y-2'>
										<label
											for='invitation-link'
											className='px-2 text-[#101018] text-[15px] relative right-[30%]'
										>
											Copy Invitaion Link
										</label>
										<input
											type='text'
											id='invitation-link'
											className='w-[400px] h-[56px] text-[#1D1B20] px-4 rounded-2xl font-dm border border-[#CED8E0] focus:outline-none pr-8 overflow-hidden text-ellipsis'
										/>
										<img src='/caregiver/copy.png' alt='Copy'
											onClick={copyToClipboard}
											className="cursor-pointer absolute top-[42px] right-6"
										/>

									</div>

									<div className='flex items-center justify-center gap-5 my-10'>
										<div className='w-[90px] h-[2px] bg-[#3A643B66]'></div>
										<p className='text-[#646665] font-semibold font-nunito'>OR</p>
										<div className='w-[90px] h-[2px] bg-[#3A643B66]'></div>
									</div>

									<form className="space-y-8">
										<div className='relative space-y-2'>
											<input
												type='text'
												id='first-name'
												className='w-[400px] h-[56px] text-[#1D1B20] px-4 font-medium font-dm rounded-2xl border border-[#CED8E0] focus:outline-none'
											/>
											<label
												for='first-name'
												className='px-1 absolute top-[-17px] left-6 text-[#A0A0A0] text-[12px] font-dm bg-white'
											>
												First Name
											</label>
										</div>
										<div className='relative space-y-2'>
											<input
												type='text'
												className='w-[400px] h-[56px] text-[#1D1B20] px-4 font-medium rounded-2xl border border-[#CED8E0] focus:outline-none'
												id='last-name'
											/>
											<label
												for='last-name'
												className='px-1 absolute top-[-17px] left-6 text-[#A0A0A0] text-[12px] font-dm bg-white'
											>
												Last Name
											</label>
										</div>
										<div className='relative space-y-2'>
											<input
												type='email'
												className='w-[400px] h-[56px] text-[#1D1B20] px-4 font-medium rounded-2xl border border-[#CED8E0] focus:outline-none'
												id='email'
											/>
											<label
												for='email'
												className='px-1 absolute top-[-17px] left-6 text-[#A0A0A0] text-[12px] font-dm bg-white'
											>
												Email id
											</label>
										</div>

										<div className='relative pl-4'>

											<PhoneNumberInput label='Mobile Number' />

										</div>

										<button
											className="block w-[400px] py-4 mx-auto drop-shadow-xl rounded-xl bg-[#3A643B] text-center text-white font-semibold font-nunito">
											Submit
										</button>

									</form>



								</div>

							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}