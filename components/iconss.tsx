import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="absolute bottom-8 left-2 md:left-10 flex flex-col gap-4 text-lg">
      
      {/* Instagram */}
      <a
        href="https://www.instagram.com/huz_aif37"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-pink-500 transition-colors duration-300 text-black dark:text-white"
      >
        <FaInstagram className="text-xl" />
      </a>

      {/* Phone */}
      <a href="tel:+6006239034" className="flex items-center gap-2 hover:text-green-500 transition-colors duration-300 text-black dark:text-white">
        <FaPhone className="text-xl" />
      </a>

      {/* Email */}
      <a
        href="mailto:huzaifsheikh53@gmail.com"
        className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300 text-black dark:text-white"
      >
        <FaEnvelope className="text-xl" />
      </a>
    </div>
  );
};

export default SocialLinks;