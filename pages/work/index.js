// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
//react
import { useState, useEffect } from "react";
import SkeletonLoading from "../../components/SkeletonLoading.js";
const Work = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate a loading delay (remove this in production)
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="h-full bg-primary/30 py-36 flex items-center justify-center">
			<Circles />
			{loading ? (
				<SkeletonLoading />
			) : (
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row gap-x-8">
						<div className="text-center flex xl:w-[40vw] flex-col lg:text-left mb-4 xl:mb-0">
							<motion.h2
								variants={fadeIn("up", 0.2)}
								initial="hidden"
								animate="show"
								exit="hidden"
								className="h2 xl:mt-12">
								<span className="text-accent">Mes</span> Projets
							</motion.h2>
							<motion.p
								variants={fadeIn("up", 0.4)}
								initial="hidden"
								animate="show"
								exit="hidden"
								className="mb-4 max-w-[400px] mx-auto lg:mx-0">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</motion.p>
						</div>
						<motion.div
							variants={fadeIn("up", 0.6)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="w-full xl:max-w-[65%]">
							<WorkSlider />
						</motion.div>
					</div>
				</div>
			)}
			<Bulb />
		</div>
	);
};

export default Work;
