import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../common/Button";
import { signIn } from "next-auth/react";
import { LOGIN_REDIRECT } from "@/routes";


const SocialAuth = () => {

  const handleOnclick = (provider:'google'|'github') => {
    signIn(provider, {
      redirectTo:LOGIN_REDIRECT
    })
  }

  return (
    <div className="flex items-center justify-center  my-2 gap-4 ">
      <Button type="button" label="Continue with github" className="flex items-center gap-2 justify-center" outlined icon={FaGithub} onclick={()=>handleOnclick('github')} />
      <Button type="button" label="Continue with Google" className="flex items-center gap-2  justify-center" outlined icon={FaGoogle}/>
    </div>
  );
};

export default SocialAuth;   