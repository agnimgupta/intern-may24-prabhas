import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
// import { motion } from 'framer-motion';

import Main from "./components/Main";
import Header from "./features/Header/Header";
import Navbar from "./features/Navbar/Navbar";

import Notifications from './features/Notifications/Notifications';

import TemplateList from './features/RoutineTemplates/TemplateList';
import TemplateDetails from './features/RoutineTemplates/TemplateDetails';
import RoutineDetails from './features/RoutineTemplates/RoutineDetails';

import AddRoutine from './features/Routine/AddRoutine';
import CreateRoutine from './features/Routine/CreateRoutine';
import WeeklyBenefits from './features/Routine/AddweeklyBenefits';

import AssignCaregiver from './features/Caregiver/AssignCaregiver';

import ProductDetails from './features/Product/AddProduct';

import AddReminder from './features/Reminder/AddReminderItem';
import ReminderChannels from './features/Reminder/AddReminderChannels';
import { AnimatePresence } from 'framer-motion';




function App() {
	const [showNav, setShowNav] = useState(true);
	const [activeLinks, setActiveLinks] = useState({
		main: -1,
		sub: -1
	});
	const [selectedRowIndexes, setSelectedRowIndexes] = useState(new Set());


	function toggleNav() {
		setShowNav(!showNav)
	}


	return (
		<Router>
			<div className="bg-[#F5F5F6]">
				<Header toggleNav={toggleNav} />
				<AnimatePresence>
					{showNav && (						
						<Navbar activeLinks={activeLinks} setActiveLinks={setActiveLinks} />
					)}		
				</AnimatePresence>
				

				<Main showNav={showNav}>
					<Routes>
						<Route path="/template-list" element={<TemplateList selectedRows={selectedRowIndexes} setSelectedRows={setSelectedRowIndexes} />} />		
						<Route path="/template-details/:id" element={<TemplateDetails />} />
						<Route path="/routine-details/:id" element={<RoutineDetails />} />	
						
						<Route path="/add-routine" element={<AddRoutine />} />
						<Route path="/add-routine/create-routine" element={<CreateRoutine />} />
						<Route path="/add-routine/create-routine/add-reminder" element={<AddReminder />} />
						<Route path="/add-routine/create-routine/reminder-channels" element={<ReminderChannels />} />
						<Route path="/add-routine/create-routine/weekly-benefits" element={<WeeklyBenefits />} />
						<Route path="/add-routine/create-routine/assign-caregiver" element={<AssignCaregiver />} />
						<Route path="/add-routine/create-routine/add-reminder/product" element={<ProductDetails />} />

						<Route path="/notifications" element={<Notifications />} />
					</Routes>
				</Main>
			</div>
			
		</Router>
	);
}



export default App;
