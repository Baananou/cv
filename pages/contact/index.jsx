import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
import { useForm } from "@formspree/react";
import Link from "next/link.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../i18n/next-i18next.config.js";
import { useTranslation } from "next-i18next";
const Contact = () => {
	const { t } = useTranslation(["common"]);
	const [state, handleSubmit] = useForm("mwkdldnb");
	if (state.succeeded) {
		return (
			<div className="h-full flex justify-center items-center flex-col gap-8">
				<div className="flex justify-center items-center flex-col">
					<p className=" text-4xl font-semibold text-accent">
						{t("common:contact.thnaks")}
					</p>
					<p className=" text-xl ">{t("common:contact.reply")}</p>
				</div>
				<Link
					href={"/"}
					className=" text-2xl border-2 p-2 rounded-full hover:bg-accent ">
					{t("common:contact.home")}
				</Link>
			</div>
		);
	}
	return (
		<div className="h-full bg-primary/30">
			<div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
				<div className="flex flex-col w-full max-w-[700px] ">
					<motion.h2
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2 text-center mb-12">
						<span className="text-accent">{t("common:contact.title1")}</span>
						{t("common:contact.title2")}
					</motion.h2>
					<motion.form
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="flex-1 flex flex-col gap-6 w-full mx-auto"
						onSubmit={handleSubmit}>
						<div className="flex gap-x-6 w-full">
							<input
								id="name"
								type="text"
								placeholder={t("common:contact.name")}
								className="input"
								name="name"
							/>
							<input
								id="email"
								type="email"
								placeholder={t("common:contact.email")}
								className="input"
								name="email"
							/>
						</div>
						<input
							id="subject"
							type="text"
							placeholder={t("common:contact.subject")}
							className="input"
							name="subject"
						/>
						<textarea
							id="message"
							className="textarea"
							placeholder={t("common:contact.message")}
							name="message"></textarea>
						<button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
							<span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
								{t("common:contact.btn")}
							</span>
							<BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] group-hover:text-lightprime" />
						</button>
					</motion.form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
export const getStaticProps = async (context) => {
	return {
		props: {
			...(await serverSideTranslations(
				context.locale,
				["common"],
				nextI18nextConfig
			)),
		},
	};
};
