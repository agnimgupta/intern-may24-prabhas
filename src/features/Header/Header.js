import { useState } from "react";
import { motion } from 'framer-motion';
import NotificationPopUp from "../Notifications/NotificationPopUp";



function Header({ toggleNav }) {
	const [showNotifications, setShowNotifications] = useState(false);

	
	return ( 
		<>
			<div className="fixed left-0 top-0 right-0 flex items-center justify-between bg-white px-4 md:px-8 py-1 z-10">
				<div className="flex items-center gap-2">
					<img src='/header/amrutam-image.png' alt='Amrutam' />
					<img src='/header/amrutam-logo.png' alt='Amrutam' />
					<motion.div
						className="w-[40px] h-[40px] rounded-[50%]  hover:bg-[#2E37A40D] flex items-center justify-center cursor-pointer"
						onClick={toggleNav}
						whileTap={{scale: 0.8}}
					>
						<img
							src='/header/bar.png'
							alt='Bar'
							className="cursor-pointer "
						/>
					</motion.div>


					<div className="relative ml-4">
						<img
							src='/header/search.png'
							alt='search'
							className="absolute top-2.5 left-2"
						/>
						<input
							type='text'
							placeholder="Search here"
							className="h-[45px] p-2 pl-10 placeholder:text-[#28643B4D] text-[13px] text-gray-500 font-medium bg-[#3A643B0D] rounded-xl focus:outline-none"
						/>
					</div>
				</div>
				<div className="flex items-center gap-6">
					<motion.div
					    whileTap={{scale: 0.8}}
						className="relative w-[40px] h-[40px] rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-[#2E37A40D]"
					>
						<img src='/header/message.png'	alt='Message'/>
						<ActiveDot />
					</motion.div>
					<motion.div
					    whileTap={{scale: 0.8}}
						onClick={() => setShowNotifications(!showNotifications)}
						className="relative w-[40px] h-[40px] rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-[#2E37A40D]"
					>
						<img src='/header/bell.png' alt='Bell' />
						<ActiveDot />
					</motion.div>
					
					<div className="flex items-center gap-2">
						<div>
							<h3 className="text-[#3A643B] text-right text-sm font-semibold">Liam Michael</h3>
							<p className="text-[#28643B80] text-right text-xs font-medium">Admin</p>
						</div>
						<img src='/header/user.png' alt='Settings' />
					</div>
					<motion.div
						className="relative w-[40px] h-[40px] rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-[#2E37A40D]"
						whileTap={{scale: 0.8}}

					>
						<img src='/header/settings.png' alt='Settings'/>
					</motion.div>
					
				</div>
			</div>

			{showNotifications  && <NotificationPopUp setShow={setShowNotifications}></NotificationPopUp>}
		</>
		

	);
}

function ActiveDot() {
	return <div className="w-[10px] h-[10px] rounded-[50%]  bg-[#BC0000] absolute top-2 right-1"></div>
}



export default Header;