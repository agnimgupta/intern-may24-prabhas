import { useRef, useState } from "react";

const PhotoUploader = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [previewUrl, setPreviewUrl] = useState(null);
	const fileInputRef = useRef(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setSelectedFile(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleDivClick = () => {
		fileInputRef.current.click();
	};

	return (
		<div className="relative h-[210px] w-[210px] shrink-0  rounded-2xl  bg-center  bg-no-repeat">
			{previewUrl && (
				<img
					src='/weekly-benefits/red-cross.svg'
					alt='cross icon'
					onClick={() => {
						setPreviewUrl(null);
						setSelectedFile(null);
					}}
					className="absolute right-0.5 top-0.5 z-50 block h-6 w-6 -translate-y-1/2 translate-x-1/2 transform]"
				/>
			)}
			<div
				onClick={handleDivClick}
				className="flex h-full w-full border border-dashed border-[#97AB97] bg-[#EAF2EA] rounded-2xl  flex-col items-center justify-center  gap-[8px] text-[14px] text-black"
			>
				<img
					alt="Frame"
					className={
						previewUrl
							? `z-30 h-[210px] w-[210px] rounded-2xl object-cover`
							: ""
					}
					src={previewUrl ? previewUrl : "/weekly-benefits/photo-frame.svg"}
				/>

				{!previewUrl && <div>Upload Image</div>}
				<input
					type="file"
					className="hidden"
					ref={fileInputRef}
					onChange={handleFileChange}
				/>
			</div>
		</div>
	);
};

export default PhotoUploader;