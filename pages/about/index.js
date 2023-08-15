import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaWordpress,
	FaFigma,
	FaJava,
	FaSchool,
	FaHandsHelping,
} from "react-icons/fa";
import {
	SiNextdotjs,
	SiFramer,
	SiAdobexd,
	SiAdobephotoshop,
	SiFlutter,
	SiDart,
	SiWindows,
	SiLinux,
	SiEclipseide,
	SiVisualstudio,
	SiVisualstudiocode,
	SiAngular,
	SiTailwindcss,
	SiBootstrap,
	SiFlask,
	SiDotnet,
	SiPython,
	SiJavascript,
	SiTypescript,
	SiPhp,
	SiGo,
	SiGraphql,
	SiCsharp,
	SiC,
	SiMysql,
	SiAdobeillustrator,
	SiI18Next,
	SiPostman,
	SiAndroidstudio,
	SiLaravel,
} from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { PiCertificateFill, PiListChecksBold } from "react-icons/pi";
import { MdSchool, MdWork } from "react-icons/md";
//  data
export const aboutData = [
	{
		title: "ÉDUCATION",
		titleIcon: <MdSchool size={30} />,
		info: [
			{
				title: "Cycle Ingénierie Informatique (Accrédité Européen)",
				school: "École Polytechnique De Sousse",
				stage: "2021 – Présent",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1691951306/t%C3%A9l%C3%A9charg%C3%A9_dlanaq.png",
				link: "https://www.linkedin.com/company/ecole-polytechnique-sousse/",
			},
			{
				title:
					"Cycle Préparatoire Intégrée (Mathématiques , Physique , Informatique)",
				school: "École Polytechnique De Sousse",
				stage: "2019 – 2021",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1691951306/t%C3%A9l%C3%A9charg%C3%A9_dlanaq.png",
				link: "https://www.linkedin.com/company/ecole-polytechnique-sousse/",
			},
			{
				title:
					"Baccalauréat Science Technique (Électrique, Mécanique, Physique)",
				school: "Lycée Hammam Sousse 2",
				stage: "2018 – 2019",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1691951423/lyc%C3%A9ehs2_v8e5jy.jpg",
				link: "https://www.linkedin.com/company/lyc%C3%A9e-hammam-sousse-2/about/",
			},
		],
		show: true,
	},
	{
		title: "EXPÉRIENCE",
		titleIcon: <MdWork size={30} />,

		info: [
			{
				title: "Développeur Web",
				company: "VAERDIA, Sousse, Tunisie",
				tasks: [
					"Collaboration sur site avec une équipe pluridisciplinaire, mettant en valeur les compétences en MUI, React.js et Next.js. Mes responsabilités englobent l'utilisation de modèles pour concevoir des solutions de Gestion de la Relation Client (CRM) sur mesure.",
					"Incorporation des API fournies en utilisant React Query.",
					"Création performante d'un Backend Flask/MySQL pour gérer fichiers (création, recherche, export),mettant en avant compétences web et conception de bases de données.",
				],
				stage: "2023 (Juillet) – Présent",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1691951177/VAERDIA_zpy9qy.png",
				link: "https://vaerdia.com/",
			},
			{
				title: "Développeur Web",
				company: "JOODLAB, Sousse, Tunisie",
				tasks: [
					"Collaboration à distance avec une équipe sur plusieurs projets en utilisant Angular, Next.js et TailwindCSS, avec GitLab comme plateforme de gestion de version.",
					"La mise en place de plusieurs langues en utilisant le Framework de internationalisation I18n.",
					"La maintenance et le développement pour améliorer l'expérience utilisateur.",
					"La mise en place de stratégies SEO, optimisant le contenu, les mots-clés et la structure du site pour améliorer la visibilité en ligne et augmenter le trafic organique.",
				],
				stage: "2022 – 2023",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1691950658/joodlab_ko9uea.svg",
				link: "https://www.joodlab.com/",
			},
			{
				title: "Support Client",
				company: "JOODLAB, Sousse, Tunisie",
				tasks: [
					"L’optimisation de l'expérience utilisateur avec des vidéos tutorielles, guides et blogs détaillés pour les outils d'hôtellerie et de change de devises de l'entreprise.",
				],
				stage: "2022 – 2023",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1691950658/joodlab_ko9uea.svg",
				link: "https://www.joodlab.com/",
			},
			{
				title: "Directeur Ressources Humaines",
				company: "SAPIOUS, Sousse, Tunisie",
				tasks: [
					"La gestion du processus de sélection et d'acceptation des étudiants, la coordination des groupes et le suivi de leur présence tout au long des sessions.",
				],
				stage: "2022 – 2023",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1691950504/230792985_163533325873832_1648812716993218950_n_dpnjsj.png",
				link: "https://www.sapious.org/ ",
			},
		],
		show: true,
	},
	{
		title: "BÉNÉVOLAT",
		titleIcon: <FaHandsHelping size={30} />,

		info: [
			{
				title: "Secouriste (FPS)",
				club: "Croissant-Rouge Comité Local Hammem Sousse",
				stage: "2022 – Présent",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692024958/crt_oljpvy.jpg",
				link: "https://www.facebook.com/CRTHS",
			},
			{
				title: "Secouriste, Vice Président du Club",
				club: "Croissant-Rouge Club Universitaire Ecole Polytechnique De Sousse ",
				stage: "2022 – 2023",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692024958/crt_oljpvy.jpg",
				link: "https://www.facebook.com/crtpolyestim",
			},
			{
				title: "Organisateur, graphiste et photographe",
				club: "Devfest, Sousse",
				stage: "2021 – 2022",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692068321/devfest2021_tcpsu1.jpg",
				link: "https://www.linkedin.com/company/gdg-sousse",
			},
			{
				title: "Créateur de contenu et gestionnaire de communauté",
				club: "We Are Sousse",
				stage: "2021 – 2022",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692025045/wearesousse_pmu99y.png",
				link: "https://www.facebook.com/WeareSousse",
			},
			{
				title: "Officier des Affaires Internes et Externe",
				club: "GDSC Ecole Polytechnique De Sousse",
				stage: "2021 – 2022",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692025133/GDSC_Ecole_Polytechnique_de_Sousse_Vertical_color_dj1a2l.png",
				link: "https://www.facebook.com/GDSCpoly",
			},
			{
				title: "Président du Club",
				club: "Tunivisions Ecole Polytechnique De Sousse",
				stage: "2020 – 2021",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692025171/tunivisions_eps_s2zufb.png",
				link: "https://www.facebook.com/ClubTunivisionsEPS",
			},
			{
				title: "Membre actif au Club",
				club: "Tunivisions Ecole Polytechnique De Sousse",
				stage: "2019 – 2020",
				logo: "https://res.cloudinary.com/duaagiskm/image/upload/v1692025171/tunivisions_eps_s2zufb.png",
				link: "https://www.facebook.com/ClubTunivisionsEPS",
			},
		],
		show: true,
	},
	{
		title: "COMPÉTENCES",
		titleIcon: <PiListChecksBold size={30} />,

		info: [
			{
				title: "Langages",
				icons: [
					{ icon: <FaHtml5 key={1} />, title: "HTML5" },
					{ icon: <FaCss3 key={2} />, title: "CSS3" },
					{ icon: <SiJavascript key={6} />, title: "JavaScript" },
					{ icon: <SiTypescript key={7} />, title: "TypeScript" },
					// { icon: <SiGo key={9} />, title: "Go" },
					{ icon: <SiGraphql key={10} />, title: "GraphQL" },
					// { icon: <SiCsharp key={11} />, title: "C#" },
					// { icon: <SiC key={12} />, title: "C" },
					{ icon: <SiMysql key={13} />, title: "MySQL" },
					{ icon: <SiPython key={5} />, title: "Python" },

					{ icon: <FaJava key={14} />, title: "Java" },
					{ icon: <SiDart key={4} />, title: "Dart" },
					{ icon: <SiPhp key={8} />, title: "PHP" },
				],
			},
			{
				title: "Frameworks",
				icons: [
					{ icon: <FaReact key={1} />, title: "React" },
					{ icon: <SiNextdotjs key={2} />, title: "Next.js" },
					{ icon: <SiTailwindcss key={4} />, title: "Tailwind CSS" },

					{ icon: <SiI18Next key={9} />, title: "i18next" },
					// { icon: <SiAngular key={3} />, title: "Angular" },
					// { icon: <SiBootstrap key={5} />, title: "Bootstrap" },
					{ icon: <SiFlask key={6} />, title: "Flask" },
					// { icon: <SiDotnet key={7} />, title: ".NET" },
					{ icon: <SiFlutter key={8} />, title: "Flutter" },
					{ icon: <SiLaravel key={8} />, title: "Laravel" },
				],
			},
			{
				title: "IDE",
				icons: [
					{ icon: <SiEclipseide key={1} />, title: "Eclipse IDE" },
					{ icon: <SiVisualstudio key={2} />, title: "Visual Studio" },
					{ icon: <SiVisualstudiocode key={3} />, title: "Visual Studio Code" },
					{ icon: <SiAndroidstudio key={3} />, title: "Android Studio" },
				],
			},
			{
				title: "Système d'exploitation",
				icons: [
					{ icon: <SiWindows key={1} />, title: "Windows" },
					{ icon: <SiLinux key={2} />, title: "Linux" },
				],
			},
			{
				title: "Test API",
				icons: [{ icon: <SiPostman key={1} />, title: "Postman" }],
			},
			{
				title: "Design",
				icons: [
					{ icon: <FaFigma key={1} />, title: "Figma" },
					{ icon: <SiAdobexd key={2} />, title: "Adobe XD" },
					{ icon: <SiAdobephotoshop key={3} />, title: "Adobe Photoshop" },
					{ icon: <SiAdobeillustrator key={4} />, title: "Adobe Illustrator" },
				],
			},
		],
		show: true,
	},
	{
		title: "CERTIFICATION",
		titleIcon: <PiCertificateFill size={30} />,

		info: [
			{
				title: "Introduction à SQL en SQL - DataCamp",
				stage: "2023",
				certif:
					"https://www.datacamp.com/statement-of-accomplishment/course/f2fdf7e9ebd6f851f5e8cc6221bf0ab745c47b46",
			},
			{
				title: "SQL intermédiaire en SQL - DataCamp",
				stage: "2023",
				certif:
					"https://www.datacamp.com/statement-of-accomplishment/course/5e9324228e14ae661d6beb005da21b8edac47838",
			},
			{
				title: "Jointure de données en SQL - DataCamp",
				stage: "2023",
				certif:
					"https://www.datacamp.com/statement-of-accomplishment/course/4d70fd1ad66f5e5b97ccda048ae885f67966ca02",
			},
			{
				title: "Classification d'images de base avec TensorFlow - Coursera",
				stage: "2023",
				certif:
					"https://www.coursera.org/account/accomplishments/verify/YL46X932EZNF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
			},
			{
				title: "Formation de Premiers Secours - Croissant-Rouge Tunisien",
				stage: "2022",
				// certif:
				// 	"https://www.datacamp.com/statement-of-accomplishment/course/4d70fd1ad66f5e5b97ccda048ae885f67966ca02",
			},
			{
				title: "DELF - AMIDEAST SOUSSE",
				stage: "2022",
				// certif:
				// 	"https://www.datacamp.com/statement-of-accomplishment/course/4d70fd1ad66f5e5b97ccda048ae885f67966ca02",
			},
			{
				title: "TOEIC - AMIDEAST SOUSSE",
				stage: "2022",
				// certif:
				// 	"https://www.datacamp.com/statement-of-accomplishment/course/4d70fd1ad66f5e5b97ccda048ae885f67966ca02",
			},
		],
		show: true,
	},
];

//components
import Circles from "../../components/Circles";

//react
import { useState } from "react";

//framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//next
import Link from "next/link";
import Image from "next/image";

// counter
import CountUp from "react-countup";

const About = () => {
	const [index, setIndex] = useState(0);
	return (
		<div className="h-full bg-primary/30 py-32 text-center xl:text-left">
			<Circles />
			{/* <motion.div
				variants={fadeIn("right", 0, 2)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className="hidden xl:flex absolute bottom-0 -left-[370px]">
				<Avatar />
			</motion.div> */}
			<div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-y-auto scrollbar-none">
				<div className="flex-1 flex flex-col justify-center">
					<motion.div
						variants={fadeIn("right", 0, 2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="text-5xl mb-4">
						Transformer{" "}
						<span className="text-accent font-bold"> les rêves</span> en réalité
						numérique.
					</motion.div>
					<motion.p
						variants={fadeIn("right", 0, 2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
						Explorateur digital dévoué, je m&apos;immerge dans le monde du
						développement avec une passion inextinguible, cherchant constamment
						à transformer des idées en réalité.
					</motion.p>
					<div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
						<div className="flex flex-1 xl:gap-x-6 ">
							{/* Experience */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={2} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									années d&apos;expérience professionnelle
								</div>
							</div>
							{/* Experience */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={5} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									années d&apos;expérience associative
								</div>
							</div>
							{/* Experience */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={30} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									projets de travail et d&apos;étude réalisés
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full xl:max-w-[50%] h-[650px] pt-10 ">
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 xl:mt-20">
						{aboutData.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className={`${
										index === itemIndex &&
										"text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
									} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 group`}
									onClick={() => {
										setIndex(itemIndex);
									}}>
									{item.titleIcon}
									<div className="opacity-0 group-hover:opacity-100 bg-black text-white text-xs text-center px-2 py-1 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none">
										{item.title}
									</div>
								</div>
							);
						})}
					</div>
					<div className="py-6 flex flex-col gap-y-4 xl:gap-y-4 mx-4">
						{aboutData[index].info.map((item, itemIndex) => {
							return (
								<div key={itemIndex}>
									{aboutData[index].show === true ? (
										<div className="py-2">
											<div className="text-start ">
												{item?.company && (
													<Link
														href={item?.link}
														className="text-accent font-bold">
														{item?.company}
													</Link>
												)}
												{item?.school && (
													<Link
														href={item?.link}
														className="text-accent font-bold">
														{item?.school}
													</Link>
												)}
												{item?.club && (
													<Link
														href={item?.link}
														className="text-accent font-bold">
														{item?.club}
													</Link>
												)}
											</div>
											<div className="flex gap-4">
												{item.logo && (
													<Image
														priority
														alt="logo"
														src={item.logo}
														height={120}
														width={120}
														className=" rounded-full bg-white h-16 w-16 flex justify-center items-center "
													/>
												)}

												<div className="flex flex-col max-w-max gap-x-4 items-start text-white/60 justify-center">
													<div className="font-light mb-2 md:mb-0 flex flex-col text-start">
														<div
															className={`text-white font-bold ${
																item.tasks ? "my-4" : ""
															}`}>
															{item.title}
														</div>

														{item.tasks && (
															<ul style={{ listStyleType: "disc" }}>
																{item.tasks.map((task, Index) => {
																	return (
																		<li key={Index} className="py-2">
																			{task}
																		</li>
																	);
																})}
															</ul>
														)}
														<div className="flex gap-4">
															{item.stage && (
																<div className="text-accent font-bold">
																	{item?.stage}
																</div>
															)}
															{item.certif && (
																<Link
																	href={item?.certif}
																	className="text-accent font-bold">
																	Certificat
																</Link>
															)}
														</div>
													</div>
													<div className="flex gap-x-4">
														{item.icons?.map((icon, itemIndex) => (
															<div key={itemIndex} className="relative group">
																<div className="text-2xl text-white mb-1">
																	{icon.icon}
																</div>
																<div className="opacity-0 group-hover:opacity-100 bg-black text-white text-xs text-center px-2 py-1 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300 pointer-events-none">
																	{icon.title}
																</div>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									) : (
										<div className="text-5xl text-accent font-bold">
											Coming Soon
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
