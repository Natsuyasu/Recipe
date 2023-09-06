import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const element = (
    <FontAwesomeIcon icon={faGithub} style={{ color: "#b3b4bc" }} />
  );

  return (
    <div className="text-sm text-zinc-500 mb-6 pt-10 pb-4 mb:pt-4 pb-4">
      <div className="flex justify-center">
        &copy; 2023 <a href="https://github.com/Natsuyasu">&nbsp; {element} Vivia</a>.
      </div>
      <div className="flex justify-center">Version: 0.1</div>
      <div className="flex justify-center"> &#127836; 好好吃饭~</div>
    </div>
  );
}

export default Footer;
