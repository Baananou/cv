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
				passHref
				legacyBehavior
				href={"https://www.linkedin.com/in/mohamed-yessine-baananou/"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<a target="_blank" rel="noopener noreferrer">
					<RiLinkedinLine />
				</a>
			</Link>
			<Link
				passHref
				legacyBehavior
				href={"https://github.com/baananou"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<a target="_blank" rel="noopener noreferrer">
					<RiGithubLine />
				</a>
			</Link>
			<Link
				passHref
				legacyBehavior
				href={"https://gitlab.com/baananou"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<a target="_blank" rel="noopener noreferrer">
					<RiGitlabLine />
				</a>
			</Link>
			<Link
				passHref
				legacyBehavior
				href={"https://www.facebook.com/Mohamed.Yessine.Baananou/"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<a target="_blank" rel="noopener noreferrer">
					<RiFacebookLine />
				</a>
			</Link>
			<Link
				passHref
				legacyBehavior
				href={"https://www.instagram.com/mohamed_yessine_baananou/"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<a target="_blank" rel="noopener noreferrer">
					<RiInstagramLine />
				</a>
			</Link>
			<Link
				passHref
				legacyBehavior
				href={"https://twitter.com/YessineBaananou"}
				className="hover:text-hover transition-all duration-300 text-2xl">
				<a target="_blank" rel="noopener noreferrer">
					<RiTwitterLine />
				</a>
			</Link>
		</div>
	);
};

export default Socials;
