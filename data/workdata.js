import {
	SiDart,
	SiExpo,
	SiFirebase,
	SiFlask,
	SiFlutter,
	SiGithub,
	SiNetlify,
	SiNextdotjs,
	SiPython,
	SiTailwindcss,
} from "react-icons/si";
import { TbBrandFirebase, TbBrandReactNative } from "react-icons/tb";

// data
export const workSlides = {
	slides: [
		{
			images: [
				{
					title: "React NAtive ToDo App",
					path: "/thumb1.jpg",
					icons: [
						<TbBrandReactNative key={1} size={20} />,
						<TbBrandFirebase key={1} size={20} />,
						<SiExpo key={1} size={20} />,
					],
					repo: "https://github.com/Baananou/React-Native-TODO-APP-EXPO-Firebase-",
				},
				{
					title: "flutter_weatherapp",
					path: "/thumb2.jpg",
					icons: [
						<SiFlutter key={1} size={20} />,
						<SiDart key={1} size={20} />,
					],
					repo: "https://github.com/Baananou/flutter_weatherapp",
				},
				{
					title: "title",
					path: "/thumb3.jpg",
					icons: [
						<SiNextdotjs key={1} size={20} />,
						<SiTailwindcss key={1} size={20} />,
						<SiFirebase key={1} size={20} />,
						<SiFlask key={1} size={20} />,
						<SiPython key={1} size={20} />,
					],
					repo: "https://github.com/Baananou",
				},

				{
					title: "Personal website",
					path: "/thumb4.jpg",
					icons: [
						<SiNextdotjs key={1} size={20} />,
						<SiTailwindcss key={1} size={20} />,
						<SiGithub key={1} size={20} />,
						<SiNetlify key={1} size={20} />,
					],
					repo: "https://github.com/Baananou/Personal-Website",
				},
			],
		},
		// {
		// 	images: [
		// 		{
		// 			title: "title",
		// 			path: "/thumb4.jpg",
		// 			icons: [<BsArrowRight key={1} />, <BsArrowRight key={1} />],
		// 			repo: "https://github.com/Baananou",
		// 		},
		// 		{
		// 			title: "title",
		// 			path: "/thumb1.jpg",
		// 			icons: [<BsArrowRight key={1} />, <BsArrowRight key={1} />],
		// 			repo: "https://github.com/Baananou",
		// 		},
		// 		{
		// 			title: "title",
		// 			path: "/thumb1.jpg",
		// 			icons: [<BsArrowRight key={1} />, <BsArrowRight key={1} />],
		// 			repo: "https://github.com/Baananou",
		// 		},
		// 		{
		// 			title: "title",
		// 			path: "/thumb1.jpg",
		// 			icons: [<BsArrowRight key={1} />, <BsArrowRight key={1} />],
		// 			repo: "https://github.com/Baananou",
		// 		},
		// 	],
		// },
	],
};
