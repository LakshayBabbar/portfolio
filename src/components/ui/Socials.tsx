import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Socials: React.FC<{ hidden: boolean }> = ({ hidden }) => {
  const linkStyle =
    "cursor-pointer text-gray-300 hover:text-white transition-all delay-100";
  return (
    <ul className={`text-xl ${hidden ? "hidden" : "flex"} md:flex gap-4`}>
      <li className={linkStyle}>
        <a
          href="https://github.com/LakshayBabbar"
          target="_blank"
          aria-label="github profile"
        >
          <FaGithub />
        </a>
      </li>
      <li className={linkStyle}>
        <a
          href="https://in.linkedin.com/in/lakshay-babbar"
          target="_blank"
          aria-label="linkedin profile"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className={linkStyle}>
        <a
          href="https://www.instagram.com/thelakshaybabbar/"
          target="_blank"
          aria-label="instagram profile"
        >
          <FaInstagram />
        </a>
      </li>
      <li className={linkStyle}>
        <a
          href="https://twitter.com/lakshaybabbar_"
          target="_blank"
          aria-label="twitter profile"
        >
          <FaXTwitter />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
