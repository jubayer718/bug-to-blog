'use client'

import { verifyEmail } from "@/action/auth/email-verification";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Heading from "../common/Heading";
import { Alert } from "../common/Alert";
import Button from "../common/Button";

const EmailVerificationClient = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true)
    if (!token) return setError('Missing verification token')
    verifyEmail(token).then(res => {
      setSuccess(res.success)
      setError(res.error)
    });

    setLoading(false)

  },[token])
  return (
    <div className=" border-2 rounded-md p-2 flex flex-col gap-2 items-center my-8 max-w[400px] mx-auto">
      <Heading title="Bug To Blog" center />
      {loading && <div>Verifying Email...</div>}
      {error && <Alert message={ error} error/>}
      {success && <Alert message={success} success />}
      {success && <Button type="submit" label="Login" onclick={()=>router.push("/login")}/>}


      

    </div>
  );
};

export default EmailVerificationClient;