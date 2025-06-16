"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "../../../../schemas/LoginSchema";
import FormField from "../common/FormField";
import Button from "../common/Button";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";
import { useState, useTransition } from "react";
import { login } from "@/action/auth/login";
import { Alert } from "../common/Alert";
import { useRouter, useSearchParams } from "next/navigation";
import { LOGIN_REDIRECT } from "@/routes";

const LoginForm = () => {
  const searchParams= useSearchParams()
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(LoginSchema) })
  const router = useRouter();
  const urlError = searchParams.get('error') === "OAuthAccountNotLinked" ? "Email in use with different provider!" : "";


  
  const onsubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    setError('')
    startTransition(() => {
      login(data).then(res => {
        if (res?.error) {
          router.replace("/login")
          setError(res.error)
        }
        if (!res?.error) {
          router.push(LOGIN_REDIRECT)
        }
        if (res?.success) {
          setSuccess(res.success)
        }
      })
    })
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col max-w-[500px] m-auto mt-8 gap-2" >
      <Heading title="Login to Bug To Blog" lg center/>
      <FormField
        id="email"
        register={register}
        errors={errors}
        placeholder="email"
        disabled={isPending}
      />
      <FormField
        id="password"
        register={register}
        errors={errors}
        placeholder="password"
        type="password"
        disabled={isPending}
      />
       {error && <Alert message={error } error/>}
       {success && <Alert message={success } success/>}
      <Button type="submit" label={isPending?"Submitting..":"Login"} disabled={ isPending} />
      <div className="flex items-center justify-center my-2">or</div>
       {urlError && <Alert message={urlError} error/>}
      <SocialAuth/>
   </form>
  );
};

export default LoginForm;