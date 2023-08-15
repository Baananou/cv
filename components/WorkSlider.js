// data
const workSlides = {
	slides: [
		{
			images: [
				{
					title: "title",
					path: "/thumb1.jpg",
				},
				{
					title: "title",
					path: "/thumb2.jpg",
				},
				{
					title: "title",
					path: "/thumb3.jpg",
				},
				{
					title: "title",
					path: "/thumb4.jpg",
				},
			],
		},
		{
			images: [
				{
					title: "title",
					path: "/thumb4.jpg",
				},
				{
					title: "title",
					path: "/thumb1.jpg",
				},
				{
					title: "title",
					path: "/thumb2.jpg",
				},
				{
					title: "title",
					path: "/thumb3.jpg",
				},
			],
		},
	],
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
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
									<div
										key={index}
										className="relative rounded-lg overflow-hidden flex items-center justify-center group">
										<div className="flex items-center justify-center relative overflow-hidden group">
											<Image alt="" src={image.path} height={300} width={500} />
											<div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#bd229e] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
											<div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
												<div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
													<div className="delay-100">Live</div>
													<div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
														Project
													</div>
													<div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
														<BsArrowRight />
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						{/* <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
							<div className="text-4xl text-accent mb-4">{item.icon}</div>
							<div className="mb-8">
								<div className="mb-2 text-lg">{item.title}</div>
								<p className="max-w-[350px] leading-normal">
									{item.description}
								</p>
							</div>
							<div className="text-3xl">
								<RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
							</div>
						</div> */}
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default WorkSlider;
