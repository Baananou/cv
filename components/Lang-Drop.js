import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
const LangDrop = () => {
	const languages = [
		{ verbose: "Français", value: "fr" },
		{ verbose: "English", value: "en" },
	];
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
		<div className="relative lg:w-auto">
			<div className="flex lg:flex-col">
				{selectedLanguage === "en" && (
					<div
						onClick={() => {
							changeLanguage("fr");
						}}
						className={` text-center text-sm cursor-pointer ${
							selectedLanguage === "en"
								? "text-hover"
								: "text-white hover:text-hover transition-all duration-500"
						}`}>
						En
					</div>
				)}
				{selectedLanguage === "fr" && (
					<div
						onClick={() => {
							changeLanguage("en");
						}}
						className={` text-center text-sm cursor-pointer ${
							selectedLanguage === "fr"
								? "text-hover"
								: "text-white hover:text-hover transition-all duration-500"
						}`}>
						Fr
					</div>
				)}
			</div>
		</div>
	);
};

export default LangDrop;
