import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialAuth = () => {
  return (
    <div className="flex items-center justify-center  my-2 gap-4 ">
      <button className="flex items-center gap-2 justify-center"><FaGithub/>Login with github </button>
      <button className="flex items-center gap-2  justify-center"><FaGoogle/>Login with google</button>
    </div>
  );
};

export default SocialAuth;   