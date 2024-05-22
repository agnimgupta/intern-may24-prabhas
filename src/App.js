import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

import { useState } from 'react';
import TemplateList from './components/TemplateList';

function App() {
	const [showNav, setShowNav] = useState(true);
	const [activeLinks, setActiveLinks] = useState({
		main: -1,
		sub: -1
	});

	function toggleNav() {
		setShowNav(!showNav)
	}

	return (
		<div className='bg-[#F5F5F6]'>
			<Header toggleNav={toggleNav} />
			{showNav && <Navbar activeLinks={activeLinks} setActiveLinks={setActiveLinks} />}
			<Main showNav={showNav}>
				<TemplateList></TemplateList>
			</Main>

		</div>
	);
}

function Main({showNav, children}) {
	return (
		<div className={`${showNav ? 'ml-[275px]': 'ml-0'} mt-[75px] py-8 px-4`}>
			{children}
		</div>
	)
}

export default App;
