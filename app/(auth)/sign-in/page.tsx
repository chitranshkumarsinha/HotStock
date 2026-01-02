'use client'
import {CountryField} from '@/components/forms/CountryField'
import FooterLinks from '@/components/forms/FooterLinks'
import InputField from '@/components/forms/InputField'
import SelectField from '@/components/forms/SelectField'
import { Button } from '@/components/ui/button'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants'
import { useForm } from "react-hook-form"

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues:{
      email:'',
      password:'',
    },
    mode:'onBlur'
  })
  const onSubmit = async(data:SignInFormData)=>{
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1 className='form-title'>Welcome back</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <InputField
          name="email"
          label="Email"
          placeholder="example@email.com"
          // for react form hook
          register={register}
          error={errors.email}
          validation={{required:'Email is required',pattern:/^\w+@\w+\.\w+$/, message:'Email address is required'}}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          // for react form hook
          register={register}
          type='password'
          error={errors.password}
          validation={{required:'Password is required',minlength:8}}
        />

        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting ? 'Signing in' : 'Sign In'}
        </Button>

        <FooterLinks
          text="Don't have an account?"
          linkText='Create an account'
          href='/sign-up'
        />
      </form>
    </div>
  )
}

export default SignInPage
