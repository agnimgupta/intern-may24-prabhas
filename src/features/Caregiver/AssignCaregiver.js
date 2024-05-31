import { useState } from "react";

import InvitationModal from "./InvitationModal";
import CaregiverCard from './caregiverCard';

import Breadcrumb from "../../components/Breadcrumb";
import ModalWindow from "../../components/ModalWindow";


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


export default AssignCaregiver;