import Link from "next/link";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../i18n/next-i18next.config";

export default function Custom404() {
	return (
		<div className="h-full flex justify-center items-center flex-col gap-8">
			<div className="flex justify-center items-center flex-col gap-4">
				<p className=" text-4xl font-semibold text-accent">404</p>
				<p className=" text-4xl font-semibold text-accent">NOT FOUND</p>
			</div>
			<Link
				href={"/"}
				className=" text-2xl border-2 p-2 rounded-full hover:bg-accent ">
				Acceuil
			</Link>
		</div>
	);
}
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
