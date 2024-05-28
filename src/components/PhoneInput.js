import { useState } from "react"


import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



export default function PhoneNumberInput({ label }) {
	const [value, setValue] = useState()
	return (
		<div className="relative">
			<label
				for='mobile'
				className='px-1 z-10 absolute -top-[10px] left-6 text-[#A0A0A0] text-[12px] font-dm bg-white'
			>
				{label}
			</label>
			<PhoneInput
				country={'us'}
				value={value}
				onChange={setValue}
				containerStyle={{
					border: '1px solid #CED8E0',
					borderRadius: '16px',
					width: '400px',
					height: '56px',
				}}
				inputStyle={{
					width: '100%',
					height: '100%',
					fontWeight: '500',
					border: 'none',
					outline: 'none',
					borderRadius: '16px',
					text: '#1D1B20',


				}}
				buttonStyle={{
					backgroundColor: 'white',
					borderRadius: '16px',
					outline: 'none',
					border: 'none'
				}}
				className='flex '
			/>



		</div>
		
	)

}