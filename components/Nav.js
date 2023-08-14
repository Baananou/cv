// icons
import {
	HiHome,
	HiUser,
	HiViewColumns,
	HiRectangleGroup,
	HiChatBubbleBottomCenterText,
	HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
	{ name: "acceuil", path: "/", icon: <HiHome /> },
	{ name: "à propos", path: "/about", icon: <HiUser /> },
	{ name: "compétances", path: "/services", icon: <HiRectangleGroup /> },
	{ name: "projets", path: "/work", icon: <HiViewColumns /> },
	{
		name: "testimonials",
		path: "/testimonials",
		icon: <HiChatBubbleBottomCenterText />,
	},
	{
		name: "contact",
		path: "/contact",
		icon: <HiEnvelope />,
	},
	{
		name: "Télécharger CV",
		path: "/contact",
		icon: <FaDownload />,
	},
];

//next
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import LangDrop from "./Lang-Drop";
import { FaDownload } from "react-icons/fa";

const Nav = () => {
	const { i18n } = useTranslation();
	const router = useRouter();
	const pathname = router.pathname;
	return (
		<nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
			<div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
				{navData.map((link, index) => {
					return (
						<Link
							className={`${
								link.path === pathname && "text-hover"
							} relative flex items-center group hover:text-hover transition-all duration-500`}
							key={index}
							href={link.path}>
							<div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
								<div className="bg-white relative flex text-primary items-center p-[6px] rounded">
									<div className="text-[12px] leading-none font-semibold capitalize text-center">
										{link.name}
									</div>
									<div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
								</div>
							</div>
							<div>{link.icon}</div>
						</Link>
					);
				})}
				{/* <LangDrop /> */}
			</div>
		</nav>
	);
};

export default Nav;
