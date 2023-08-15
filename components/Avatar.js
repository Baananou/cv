//next
import Image from "next/image";
const Avatar = ({ width, height }) => {
	return (
		<div className="flex">
			<Image
				src={"/me4.png"}
				alt="ME"
				width={width}
				height={height}
				className={`border-2 rounded-full w-[${width}px] h-[${height}px] bg-black object-cover`}
			/>
		</div>
	);
};

export default Avatar;
// 