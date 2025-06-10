"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "../common/FormField";
import Button from "../common/Button";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";
import { RegisterSchema, RegisterSchemaType } from "../../../../schemas/RegisterSchema";
const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(RegisterSchema) })
  
  const onsubmit :SubmitHandler<RegisterSchemaType> = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      role: 'user',
    }
   console.log(userInfo);
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col max-w-[500px] m-auto mt-8 gap-2" >
      <Heading title="Create account to Bug To Blog" md center/>
      <FormField
        id="name"
        register={register}
        errors={errors}
        placeholder="name"
      />
      <FormField
        id="email"
        register={register}
        errors={errors}
        placeholder="email"
      />
      <FormField
        id="password"
        register={register}
        errors={errors}
        placeholder="password"
        type="password"
      />
      <FormField
        id="confirmPassword"
        register={register}
        errors={errors}
        placeholder="confirmPassword"
        type="password"
      />
      <Button type="submit" label="Register" />
      <div className="flex items-center justify-center my-2">or</div>
      <SocialAuth/>
   </form>
  );
};

export default RegisterForm;