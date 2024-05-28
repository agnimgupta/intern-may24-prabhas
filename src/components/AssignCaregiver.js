import { useState } from "react";
import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild,
} from "@headlessui/react";

import AddMoreButton from "./AddMoreButton";
import Breadcrumb from "./Breadcrumb";
import ModalWindow from "./ModalWindow";
import PhoneNumberInput from "./PhoneInput";



const CaregiverCard = ({ name, image, description, onClick }) => {
	return (
		<div className=" flex justify-between">
			<div className="flex justify-between gap-[10px]">
				<img
					className="h-11 w-11 rounded object-cover"
					src={image}
					alt={name}
				/>
				<div>
					<div className="font-dm-sans text-[15px] font-semibold leading-[24px] tracking-[0.15px]">
						{name}
					</div>
					<div className=" font-dm-sans text-[12px] tracking-[-0.02em] text-darkslategray-100">
						{description}
					</div>
				</div>
			</div>
			<AddMoreButton onClick={onClick} label="Add" />
		</div>
	);
};

const AssignCaregiver = () => {
	const [open, setOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const openInvitaionModal = () => setModalOpen(true);
	const openModal = () => setOpen(true);
	return (
		<section
			className={`mx-auto flex min-h-full max-w-7xl flex-col items-center  gap-[1.9rem] rounded-xl  px-5`}
		>
			<Breadcrumb list={["Routine", "Add New Routine", "Assign Caregiver"]} />
			<div className="flex w-full flex-col gap-6 rounded-xl bg-white px-5 py-4 lg:pr-16">
				<div className="font-poppins text-[22px] text-black">
					Assign a Caregiver
				</div>
				<div className="flex h-10 items-center  justify-start gap-2 rounded-xl bg-darkslateblue-light px-3 md:w-[400px]">
					<img src="/caregiver/search.png" alt="Search Icon" />
					<input
						className="flex-1 border-none  bg-transparent px-2  py-1  font-poppins text-[14px] font-medium   leading-5 text-darkOliveGreen-dark placeholder-darkOliveGreen-200  focus:border-none focus:outline-none focus:ring-0 focus:ring-offset-0"
						placeholder="Search for a Caregiver"
					/>
				</div>
				<div className="font-dm-sans text-[14px] font-medium leading-[16px] text-neutral-800">
					Quick Add
				</div>
				<div className="flex flex-col gap-10 px-3">
					<CaregiverCard
						image="/caregiver/person1.png"
						name="Dr. Pooja"
						description="Recent Consultation"
						onClick={openModal}
					/>
					<CaregiverCard
						image={"/caregiver/person2.png"}
						name={"Sister <3"}
						description={"Recent Caregiver"}
						onClick={openModal}
					/>
				</div>
				<button
					onClick={openInvitaionModal}
					className="mx-auto my-16 box-border rounded-xl border-[1.5px] border-solid  border-darkOliveGreen-dark px-16  py-[17px]  text-center text-base font-semibold text-darkOliveGreen-dark shadow-md md:w-[23.4rem]">
					Invite Your Friend
				</button>
			</div>
			<ModalWindow open={open} setOpen={setOpen} />
			<InvitationModal open={modalOpen} setOpen={setModalOpen}></InvitationModal>
		</section>
	);
};






function InvitationModal({ open, setOpen }) {
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


export default AssignCaregiver;