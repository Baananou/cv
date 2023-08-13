import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import nextI18nextConfig from "../i18n/next-i18next.config";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";
// next
import { useRouter } from "next/router";

// framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<Layout>
			<AnimatePresence mode="wait">
				<motion.div key={router.route} className="h-full">
					<Transition />
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Layout>
	);
}

export default appWithTranslation(MyApp, nextI18nextConfig);
