"use client";

import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const router = useRouter()

  const handleSubmit:MouseEventHandler<HTMLButtonElement>= async(e)=>{
  e.preventDefault()
    const formData = new FormData (e.currentTarget)
  const res = await  signIn('credentials', {
    email: formData.get('email'),
    password: formData.get('password'),
    redirect:false
  })
    if(res && !res.error){
      router.push('/profile')
    }else{
      console.log(res)
    }
  }
  return (
    <form>
      <input type={'email'} name={'email'}  required={true} placeholder={'email'}/>
      <input type={'password'}  name={'password'} required={true} placeholder={'password'}/>
      <button type={'submit'} onClick={handleSubmit}>Sign In</button>
    </form>
  );
};

export default SignInForm;