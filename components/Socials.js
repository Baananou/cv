//next
import Link from "next/link";

//icons
import {
	RiGithubLine,
	RiLinkedinLine,
	RiGitlabLine,
	RiFacebookLine,
	RiInstagramLine,
	RiTwitterLine,
} from "react-icons/ri";
const Socials = () => {
	return (
		<div className=" flex items-center gap-x-5 text-lg">
			<Link
				href={"https://www.linkedin.com/in/mohamed-yessine-baananou/"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<RiLinkedinLine />
			</Link>
			<Link
				href={"https://github.com/baananou"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<RiGithubLine />
			</Link>
			<Link
				href={"https://gitlab.com/baananou"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<RiGitlabLine />
			</Link>
			<Link
				href={"https://www.facebook.com/Mohamed.Yessine.Baananou/"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<RiFacebookLine />
			</Link>
			<Link
				href={"https://www.instagram.com/mohamed_yessine_baananou/"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<RiInstagramLine />
			</Link>
			<Link
				href={"https://twitter.com/YessineBaananou"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<RiTwitterLine />
			</Link>
		</div>
	);
};

export default Socials;
