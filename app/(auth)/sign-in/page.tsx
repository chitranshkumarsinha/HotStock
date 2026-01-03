'use client'
import FooterLinks from '@/components/forms/FooterLinks'
import InputField from '@/components/forms/InputField'
import { Button } from '@/components/ui/button'
import { signInWithEmail } from '@/lib/actions/auth.actions'
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import { toast } from 'sonner'

const SignInPage = () => {
  const router = useRouter()
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
  const onSubmit = async (data:SignInFormData)=>{
    try {
      const result = await signInWithEmail(data)
      if(result.success) router.push('/')
    } catch (error) {
      console.error(error)
      toast.error('Sign in failed',{
        description: error instanceof Error ? error.message : 'Failed to sign in'
      })
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
