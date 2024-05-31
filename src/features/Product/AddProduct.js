import Breadcrumb from "../../components/Breadcrumb";
import PhotoUploader from "../../components/PhotoUploader";
import SingleLineInput from "../../components/SingleLineInput";


const ProductDetails = () => {
	return (
		<section
			className={`mx-auto mb-5 flex min-h-full max-w-7xl flex-col gap-[1.9rem]   rounded-xl  px-5`}
		>
			<Breadcrumb
				list={["Routine", "Add Routine","Create Routine", "Add Reminder Items", "Add Your Product"]}
			/>
			<div className="mb-2 flex w-full flex-col gap-10 rounded-xl bg-white px-5 py-4 lg:pr-16">
				<div className="flex flex-col gap-5">
					<div className="font-poppins text-[22px] text-black">
						Add Your Product
					</div>
					<div className="flex items-center gap-3">
						<img src='/weekly-benefits/bi_question.png' alt='Question logo' />
						<div className="font-dm-sans text-[14px] text-[#3A643B]">
							Unable to find your product? Add your product by filling a few
							details for better experience with Amrutam. 🤝🏻
						</div>
					</div>
				</div>
				<div className="font-dm-sans text-[16px] font-medium text-black">
					Enter Product Details
				</div>
				<div className="flex flex-col items-center gap-20 md:flex-row md:items-start xl:gap-[16rem]">
					<div className="flex w-full flex-col gap-10 md:w-fit">
						<SingleLineInput
							label="Product Name"
							placeholder="Ex. Chyawanprash"
							mdWidth={400}
						/>
						<SingleLineInput
							label="Brand Name"
							placeholder="Ex. Dabar"
							mdWidth={400}
						/>
					</div>
					<PhotoUploader />
				</div>
				<div className="my-10 flex items-center justify-center gap-6">
					<div className="h-0.5 w-[160px] bg-[#3A643B]" />
					<span className="px-1 font-nunito text-[16px] font-semibold leading-[24px] tracking-[-0.01em] text-neutral-500">
						OR
					</span>
					<div className="h-0.5 w-[160px] bg-[#3A643B]" />
				</div>
				<SingleLineInput
					label={"Product Link"}
					mdWidth={400}
					placeholder={`https://www.company.com/`}
				/>
				<button className="mx-auto my-10 box-border rounded-xl bg-[#3A643B] px-16   py-[17px]  text-center text-base font-semibold text-white shadow-[0px_4px_14px_rgba(58,_100,_59,_0.25)] md:w-[23.4rem]">
					Add Product
				</button>
			</div>
		</section>
	);
};

export default ProductDetails;