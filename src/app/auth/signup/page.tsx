'use client'

import Link from 'next/link'
import { createSupabaseClientClient } from '@/utils/supabase/client'

const SignUp = () => {
  const signUp = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const supabase = createSupabaseClientClient()

    const form = evt.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirm-password')

    if (password !== confirmPassword) {
      return console.log('Passwords do not match.')
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'http://localhost:3000/auth/confirm-signup',
        data: {
          email: email,
          password: password,
        },
      },
    })

    if (error) {
      console.log(error.message)
    } else {
      console.log('User registered:', data)
    }
  }

  return (
    <div className='grid grid-cols-[85%_15%] max-w-6xl mx-auto h-full text-6xl items-center place-content-center'>
      <form
        id='signUpForm'
        className='relative flex flex-col w-full justify-center gap-y-8 px-4'
        onSubmit={signUp}
      >
        <div className='flex items-center bg-[#292929] rounded-md py-4 px-10 gap-x-4'>
          <label className='' htmlFor='email'>
            Email
          </label>
          <input
            className='flex rounded-md px-4 py-2 bg-inherit text-[#EBECF0] text-4xl w-full'
            name='email'
            placeholder='you@example.com'
            required
          />
        </div>
        <div className='flex items-center bg-[#292929] rounded-md py-4 px-10 gap-x-4'>
          <label className='' htmlFor='username'>
            Username
          </label>
          <input
            className='flex rounded-md px-4 py-2 bg-inherit text-[#EBECF0] text-4xl w-full'
            name='username'
            placeholder='albertlnz'
            required
          />
        </div>
        <div className='flex items-center bg-[#292929] rounded-md py-4 px-10 gap-x-4'>
          <label className='text-md' htmlFor='password'>
            Password
          </label>
          <input
            className='flex rounded-md px-4 py-2 bg-inherit text-[#EBECF0] text-4xl w-full'
            type='password'
            name='password'
            placeholder='••••••••'
            required
          />
        </div>
        <div className='flex items-center bg-[#292929] rounded-md py-4 px-10 gap-x-4'>
          <label className='text-md w-full' htmlFor='confirm-password'>
            Confirm Password
          </label>
          <input
            className='flex rounded-md px-4 py-2 bg-inherit text-[#EBECF0] text-4xl w-full'
            type='password'
            name='confirm-password'
            placeholder='••••••••'
            required
          />
        </div>

        <div className='absolute -bottom-16 text-4xl ml-4'>
          <p>
            Already have an account?{' '}
            <span className='text-[#2B813C]'>
              <Link href={'/signin'}>Sign In</Link>
            </span>
          </p>
        </div>
      </form>
      <button
        type='submit'
        form='signUpForm'
        className='h-full bg-[#010514] rounded-md px-4 mr-4'
      >
        Sign Up
      </button>
    </div>
  )
}

export default SignUp
