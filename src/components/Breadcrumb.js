const Breadcrumb = ({ list }) => {
	return (
		<div className="flex w-full  items-center   gap-[10px] font-poppins text-[15px] font-medium leading-[22.5px] ">
			{list.map((item, i) => (
				<div key={item} className="flex  items-center gap-[10px]">
					<div className={`font-medium  leading-[22.5px] text-neutral-500`}>
						<span
							className={
								list.length === i + 1
									? `text-[#3A643B]`
									: `text-neutral-500`
							}
						>
							{item}
						</span>
					</div>
					{list.length >= i + 2 ? (
						<div
							className={`text-[20px] font-medium leading-[22.5px] ${list.length === i + 2 ? `text-[#3A643B]` : `text-neutral-500`}`}
						>{`>`}</div>
					) : (
						""
					)}
				</div>
			))}
		</div>
	);
};

export default Breadcrumb;