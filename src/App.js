import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";


import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import TemplateList from './components/TemplateList';
import TemplateDetails from './components/TemplateDetails';
import RoutineDetails from './components/RoutineDetails';
import AddRoutine from './components/AddRoutine';
import CreateRoutine from './components/CreateRoutine';
import AddReminder from './components/AddReminder';
import Notifications from './components/Notifications';



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
				{showNav && <Navbar activeLinks={activeLinks} setActiveLinks={setActiveLinks} />}

				<Main showNav={showNav}>
					<Routes>
						<Route path="/template-list" element={<TemplateList selectedRows={selectedRowIndexes} setSelectedRows={setSelectedRowIndexes} />} />
						<Route path="/template-details/:id" element={<TemplateDetails  />} />
						<Route path="/routine-details/:id" element={<RoutineDetails />} />
						<Route path="/add-routine" element={<AddRoutine />} />
						<Route path="/add-routine/create-routine" element={<CreateRoutine />} />
						<Route path="/add-reminder" element={<AddReminder />} />
						<Route path="/notifications" element={<Notifications />} />
					</Routes>
				</Main>
			</div>
			
		</Router>
	);
}



export default App;
