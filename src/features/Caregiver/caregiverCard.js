import AddMoreButton from "../../components/AddMoreButton";



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


export default CaregiverCard;