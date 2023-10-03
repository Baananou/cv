<<<<<<< HEAD
=======
import { HiSwitchVertical } from "react-icons/hi";
>>>>>>> 516305328787fcd5cf4d452c053af9343017c3f6
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { LuLanguages } from "react-icons/lu";

function ChangeLang() {
	const router = useRouter();
	const { pathname, asPath, query, locale } = router;
	const { t, i18n } = useTranslation(["common"]);
	const [selectedLanguage, setSelectedLanguage] = useState(locale);

	const changeLanguage = (language) => {
		setSelectedLanguage(language);
		router.push({ pathname, query }, asPath, { locale: language });
		i18n.changeLanguage(language);
	};
	return (
		<div className="relative flex gap-2 lg:w-auto">
			<LuLanguages />

			{i18n.language === "fr" ? (
				<div
					onClick={() => {
						changeLanguage("en");
					}}
<<<<<<< HEAD
					className={`  text-center text-base cursor-pointer`}>
					{t("common:english")}
=======
					className={`  text-center text-base cursor-pointer flex gap-1 justify-center items-center`}>
					{t("common:english")}
					<HiSwitchVertical />
>>>>>>> 516305328787fcd5cf4d452c053af9343017c3f6
				</div>
			) : (
				<div
					onClick={() => {
						changeLanguage("fr");
					}}
<<<<<<< HEAD
					className={`  text-center text-base cursor-pointer`}>
					{t("common:french")}
=======
					className={`  text-center text-base cursor-pointer flex gap-1 justify-center items-center`}>
					{t("common:french")}
					<HiSwitchVertical />
>>>>>>> 516305328787fcd5cf4d452c053af9343017c3f6
				</div>
			)}
		</div>
	);
}

export default ChangeLang;
