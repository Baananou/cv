//next
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

//icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
	const { i18n } = useTranslation();

	return (
		<div>
			<Link
				href={"/work"}
				className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group">
				<Image
					src={
						i18n.language === "en" ? "/rounded-text.png" : "/rounded-text.png"
					}
					width={141}
					height={141}
					alt={i18n.language === "en" ? "My Projects" : "Mes Projets"}
					className="animate-spin-slow w-full h-full max-w-[141px] max-h-[141px]"
				/>
				<HiArrowRight className="absolute text-4xl group-hover:translate-x-3 transition-all duration-300" />
			</Link>
		</div>
	);
};

export default ProjectsBtn;
