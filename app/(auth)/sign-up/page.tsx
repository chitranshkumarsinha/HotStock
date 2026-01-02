'use client'
import {CountryField} from '@/components/forms/CountryField'
import FooterLinks from '@/components/forms/FooterLinks'
import InputField from '@/components/forms/InputField'
import SelectField from '@/components/forms/SelectField'
import { Button } from '@/components/ui/button'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants'
import { useForm } from "react-hook-form"

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors,isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues:{
      fullName:'',
      email:'',
      password:'',
      country:'india',
      investmentGoals:'Growth',
      riskTolerance:'Medium',
      preferredIndustry:'Technology'
    },
    mode:'onBlur'
  })

  const onSubmit = async (data:SignUpFormData)=>{
    try {
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    
    <div>
      <>
        <h1 className='form-title'>Sign Up & Personalize</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          {/* INPUTS */}
          <InputField
            name="fullName"
            label="Full Name"
            placeholder="John Doe"
            // for react form hook
            register={register}
            error={errors.fullName}
            validation={{required:'Full name is required',minlength:2}}
          />

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

          {/* Country */}
          <CountryField
            name="country"
            label="Country"
            control={control}
            error={errors.country}
            required
          />

          <SelectField
            name="InvestmentGoals"
            label="Investment Goals"
            placeholder="Select your investment goal"
            options={INVESTMENT_GOALS}
            control={control}
            error={errors.investmentGoals}
            required
          />
          
          <SelectField
            name="riskTolerance"
            label="Risk Tolerance"
            placeholder="Select your risk level"
            options={RISK_TOLERANCE_OPTIONS}
            control={control}
            error={errors.riskTolerance}
            required
          />

          <SelectField
            name="preferredIndustry"
            label="Preferred Industry"
            placeholder="Select your Prefferd Industry"
            options={PREFERRED_INDUSTRIES}
            control={control}
            error={errors.preferredIndustry}
            required
          />

          <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
            {isSubmitting ? 'Creating account' : 'Start your Investing journey'}
          </Button>

          <FooterLinks
            text='Already have an account'
            linkText='Sign in'
            href='/sign-in'
          />

        </form>
      </>
    </div>
  )
}

export default SignUpPage
