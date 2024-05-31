import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const links = [
	{
		title: "Dashboard",
		logoUrl: "/navbar/dashboard.png",
	},
	{
		title: "Doctors",
		logoUrl: "/navbar/doctors.png",
	},
	{
		title: "Patients",
		logoUrl: "/navbar/patients.png",
	},
	{
		title: "Appointments",
		logoUrl: "/navbar/appointments.png",
	},
	{
		title: "Speciality",
		logoUrl: "/navbar/speciality.png",
	},
	{
		title: "Coupons",
		logoUrl: "/navbar/coupons.png",
	},
	{
		title: "Concerns",
		logoUrl: "/navbar/concerns.png",
	},
	{
		title: "Referral",
		logoUrl: "/navbar/referral.png",
	},
	{
		title: "Routines",
		logoUrl: "/navbar/routines.png",
		subLinks: [
			{
				title: 'Routine Templates',
				to: '/template-list'
			},
			{
				title: 'Add Routine',
				to: '/add-routine'
			}
		],
	},
];

function Navbar({ activeLinks, setActiveLinks }) {


	function handleLinkClick(index) {
		const newActiveLinks = {
			...activeLinks,
			main: index,
		};

		if (activeLinks.main !== index) {
			newActiveLinks.sub = -1;
		}

		setActiveLinks(newActiveLinks);
	}


	function handleSubLinkClick(index) {
		const newActiveLinks = {
			...activeLinks,
			sub: index
		};


		setActiveLinks(newActiveLinks);
	}
	
	
	return (
		<nav
			className="nav fixed left-0 top-[100px] rounded-tr-[40px] bg-[white] w-[250px] h-[600px]  px-4 py-2 drop-shadow-xl overflow-y-scroll"
		>
			<h2 className="text-[#333333] text-[15px] font-medium">Main</h2>
			<ul className="space-y-4 mt-6">
				{
					links.map((item, index) => {
						return (
							<li
								key={item.title}
								className="cursor-pointer"
							>
								<div
									className="flex items-center gap-2"
									onClick={() => handleLinkClick(index)}
								>
									<img src={item.logoUrl} alt={item.title} />
									<p className={`${activeLinks.main === index ? 'text-[#3A643B80]' : 'text-[#878890]'} text-[15px] font-medium`}>{item.title}</p>
									{
										activeLinks.main === index ? (
											<img className="ml-auto" src='/navbar/arrow-down.png' alt='Arrow Down' />
										) : (
											<img className="ml-auto" src='/navbar/arrow-right.png' alt='Arrow Right' />
										)
									}  
								</div>
								{
									activeLinks.main === index && item.subLinks &&  (
										<div className="pl-4 pt-6 space-y-4">
											{
												item.subLinks?.map((link, index) => {
													return (
														<div
															className="flex items-center gap-2"
															onClick={() => handleSubLinkClick(index)}
														>
															<img src='/navbar/arrow-right.png' alt='Arrow Right' className={`${activeLinks.sub !== index && 'invisible'}`} />
															<Link to={link.to}>
																<p className={`text-[15px] ${activeLinks.sub === index ? 'text-[#28472a]' : 'text-[#3A643B80]'} text-[#3A643B80] font-medium`}>{link.title}</p>
															</Link>
														</div>
													)
												})
											}
										</div>
									)
								}	
							</li>
						)
					})
				}
			</ul>
		</nav>

	);
}

export default Navbar;
