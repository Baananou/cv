//next
import Image from "next/image";
const Avatar = () => {
	return (
		<div className="hidden xl:flex xl:max-w-none">
			{/* <Image
				src={"/bgme.png"}
				width={737}
				height={678}
				alt="Avatar"
				className="translate-z-0 w-full h-full"
			/> */}
			<Image
				src={"/me4.png"}
				alt=""
				width={350}
				height={350}
				className={
					"border-2 rounded-full w-[350px] h-[350px] bg-black object-cover "
				}
			/>
		</div>
	);
};

export default Avatar;
