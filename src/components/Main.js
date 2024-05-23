function Main({ showNav, children }) {
	return (
		<div className={`${showNav ? 'ml-[275px]' : 'ml-0'} mt-[75px] py-8 px-4`}>
			{children}
		</div>
	)
}


export default Main;