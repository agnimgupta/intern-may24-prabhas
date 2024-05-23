function Pagination() {
	return ( 
		<div className='flex items-center justify-between text-[#9C9C9C] text-[13px] font-medium px-8'>
			<p>Rows per page: 8</p>
			<div className="flex items-center gap-8">
				<p>1-8 of 80</p>
				<div className="w-[25px] h-[29px] rounded border border-[#E4E4E4] hover:bg-[#2E37A41D] flex items-center justify-center cursor-pointer">
					<img src='/template-list/arrow-left.png' alt='Arrow Left' />
				</div>
				<div className="w-[25px] h-[29px] rounded border border-[#E4E4E4] hover:bg-[#2E37A41D] flex items-center justify-center cursor-pointer">
					<img src='/template-list/arrow-right.png' alt='Arrow Left' />
				</div>
			</div>

		</div>

	);
}

export default Pagination;