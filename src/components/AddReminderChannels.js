import AddMoreButton from "./AddMoreButton";
import SingleLineInput from "./SingleLineInput";
import ToggleButton from "./ToggleButton";
import PhoneNumberInput from "./PhoneInput";

const AddReminderChannels = ({ title, channel, isActive, btnLabel }) => {

	return (
		<div className="flex w-full flex-col items-end gap-5 rounded-[20px] border-[1.5px] border-solid border-blue-ice p-4 sm:w-96 lg:w-[432px]">
			<div className="flex w-full items-center justify-between">
				<span className=" font-dm-sans text-[14px] text-black">{title}</span>
				<ToggleButton isActive={isActive} />
			</div>
			<div className="w-full">
				{isActive && (
					title === 'Email' ? (
						<SingleLineInput label={channel} />
					) : (
						<PhoneNumberInput label={channel}  />
					)
					
				)}
			</div>
			<AddMoreButton label={btnLabel} />
		</div>
	);
};

export default AddReminderChannels;

