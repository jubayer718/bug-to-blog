"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "../../../../schemas/LoginSchema";
import FormField from "../common/FormField";
import Button from "../common/Button";
import Heading from "../common/Heading";
const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(LoginSchema) })
  
  const onsubmit :SubmitHandler<LoginSchemaType> = (data) => {
    console.log('data >>>',data)
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col max-w-[500px] m-auto mt-8 gap-2" >
      <Heading title="Login to Bug To Blog" lg center/>
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
    <Button type="submit" label="Login"  />
   </form>
  );
};

export default LoginForm;