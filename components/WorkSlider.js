// data
const workSlides = {
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

				// {
				// 	title: "title",
				// 	path: "/thumb1.jpg",
				// 	icons: [<BsArrowRight key={1} />, <BsArrowRight key={1} />],
				// 	repo: "https://github.com/Baananou",
				// },
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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import {
	SiDart,
	SiExpo,
	SiFirebase,
	SiFlask,
	SiFlutter,
	SiNextdotjs,
	SiPython,
	SiTailwindcss,
} from "react-icons/si";
import { TbBrandFirebase, TbBrandReactNative } from "react-icons/tb";
import Link from "next/link";
const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{ clickable: true }}
			modules={[Pagination]}
			className="h-[280px] sm:h-[480px]">
			{workSlides.slides.map((slide, index) => {
				return (
					<SwiperSlide key={index}>
						<div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
							{slide.images.map((image, index) => {
								return (
									<Link
										passHref
										legacyBehavior
										href={image.repo}
										key={index}
										className="relative rounded-lg overflow-hidden flex items-center justify-center group">
										<a target="_blank" rel="noopener noreferrer">
											<div className="flex items-center justify-center relative overflow-hidden group">
												<Image
													alt=""
													src={image.path}
													height={300}
													width={500}
												/>
												<div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#bd229e] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
												<div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
													<div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
														<div className="delay-100">Consulter</div>
														<div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
															Code
														</div>
														<div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
															<BsArrowRight />
														</div>
													</div>
													<div className="flex flex-row gap-4 mt-5 justify-center items-center">
														{image.icons}
													</div>
												</div>
											</div>
										</a>
									</Link>
								);
							})}
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default WorkSlider;
