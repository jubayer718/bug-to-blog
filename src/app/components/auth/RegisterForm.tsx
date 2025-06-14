"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "../common/FormField";
import Button from "../common/Button";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";
import { RegisterSchema, RegisterSchemaType } from "../../../../schemas/RegisterSchema";
import { signUp } from "@/action/auth/register";
import { useState, useTransition } from "react";
import { Alert } from "../common/Alert";



// const [addData, { isLoading, isError, error }] = useAddDataMutation();

const RegisterForm = () => {

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(RegisterSchema) })



  // const [addData,{isLoading}] = useAddDataMutation();
  
  const onsubmit: SubmitHandler<RegisterSchemaType> =
  async (data) => {


    setSuccess("")
    setError("")
    startTransition(() => {
      
      signUp(data).then((res) => {
        setSuccess(res.success)
        setError(res.error)
      })
    })

  }


  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col max-w-[500px] m-auto mt-8 gap-2" >
      <Heading title="Create account to Bug To Blog" md center/>
      <FormField
        id="name"
        register={register}
        errors={errors}
        placeholder="name"
        disabled={isPending}
      />
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
      <FormField
        id="confirmPassword"
        register={register}
        errors={errors}
        placeholder="confirmPassword"
        type="password"
        disabled={isPending}
      />
      <div>
        {error && <Alert message={error } error/>}
        {success && <Alert message={ success} success />}
      </div>
      <Button type="submit" label={isPending?"Submitting...": "Register"} disabled={isPending} />
      <div className="flex items-center justify-center my-2">or</div>
      <SocialAuth/>
   </form>
  );
};

export default RegisterForm;