//fonts
import { Sora } from "next/font/google";

//font Settings
const sora = Sora({
	subsets: ["latin"],
	variable: "--font-sora",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

//Components
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import Header from "../components/Header";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
	const router = useRouter();

	return (
		<div
			className={`page bg-site text-white bg-cover bg-no-repea ${sora.variable} font-sora relative`}>
			<NextSeo
				titleTemplate={`%s | Mohamed Yessine Baananou`}
				title={"Baananou"}
				description={"Baananou"}
				canonical={"https://baananou.netlify.app/" + `${router.pathname}`}
			/>
			<TopLeftImg />
			<Nav />
			<Header />
			{children}
		</div>
	);
};

export default Layout;
