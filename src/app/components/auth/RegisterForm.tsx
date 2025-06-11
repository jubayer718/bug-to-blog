"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "../common/FormField";
import Button from "../common/Button";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";
import axios from 'axios';
import { RegisterSchema, RegisterSchemaType } from "../../../../schemas/RegisterSchema";
import toast from "react-hot-toast";


const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(RegisterSchema) })
  
  const onsubmit :SubmitHandler<RegisterSchemaType> = async(data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      role: 'user',
    }
   console.log(userInfo);
    try {
      const { data: responseData } = await axios.post('/api/data', userInfo);
      if (responseData.insertedId) {
        toast.success("User Create successful")
      }
      
      // console.log("server response", responseData);
     

    } catch (e) {
      const error = e as Error;
      toast.error(error.message)
    }
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