import React from "react";
import { MdSimCardDownload } from "react-icons/md";

function DownlaodCv() {
	return (
		<a
			className="-ml-4 xl:ml-0 xl:-mt-2 relative group"
			href="/resume.pdf"
			download="resume.pdf"
			target="_blank"
			rel="noopener noreferrer">
			<MdSimCardDownload />
			<div className="absolute pr-14 right-0 hidden xl:group-hover:flex -mt-6">
				<div className="bg-white relative flex text-primary items-center p-[6px] rounded">
					<div className="text-[12px] leading-none font-semibold capitalize text-center">
						Télécharger CV
					</div>
					<div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
				</div>
			</div>
		</a>
	);
}

export default DownlaodCv;
