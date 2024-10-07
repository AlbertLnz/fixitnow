'use client'

import { GoogleIcon } from '@/icons/Google'
import { GitHubIcon } from '@/icons/GitHub'
import Link from 'next/link'
import { createSupabaseClientClient } from '@/utils/supabase/client'

const SignIn = () => {
  const signInWithEmail = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const supabase = createSupabaseClientClient()

    const form = evt.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      console.log(error.message)
    } else {
      console.log('User logged in:', data)
    }
  }

  const signInWithGitHub = async () => {
    const supabase = createSupabaseClientClient()

    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/api/auth/callback/github',
      },
    })
  }

  return (
    <div className='grid grid-cols-[85%_15%] max-w-4xl mx-auto h-full text-3xl items-center place-content-center'>
      <section id='rrss-login' className='grid grid-cols-2 gap-x-2 mb-4 px-4'>
        <button
          onClick={signInWithGitHub}
          className='flex items-center justify-center p-4 bg-black gap-x-4 rounded-md hover:cursor-pointer hover:bg-[#000000a0]'
        >
          <GitHubIcon className='size-10' />
          <p>GitHub</p>
        </button>
        <button className='flex items-center justify-center p-4 bg-black gap-x-4 rounded-md hover:cursor-pointer hover:bg-[#000000a0]'>
          <GoogleIcon className='size-10' />
          <p>Google</p>
        </button>
      </section>

      <div />

      <form
        id='signInForm'
        className='relative flex flex-col w-full justify-center gap-y-4 px-4'
        onSubmit={signInWithEmail}
      >
        <div className='flex items-center bg-[#292929] rounded-md py-4 px-10 gap-x-4'>
          <label className='' htmlFor='email'>
            Email:
          </label>
          <input
            className='flex rounded-md px-4 py-2 bg-inherit text-[#9CA3AF] text-2xl w-full focus:outline-none'
            name='email'
            placeholder='you@example.com'
            required
          />
        </div>
        <div className='flex items-center bg-[#292929] rounded-md py-4 px-10 gap-x-4'>
          <label className='text-md' htmlFor='password'>
            Password:
          </label>
          <input
            className='flex rounded-md px-4 py-2 bg-inherit text-[#9CA3AF] text-2xl w-full focus:outline-none'
            type='password'
            name='password'
            placeholder='••••••••'
            required
          />
        </div>

        <div className='absolute -bottom-24 text-2xl ml-4'>
          <p>
            Forgotten Password.{' '}
            <span className='text-[#F24822]'>
              <Link href={'/auth/forgot-password'}>Reset</Link>
            </span>
          </p>
          <p>
            Don&apos;t have an account?{' '}
            <span className='text-[#2B813C]'>
              <Link href={'/auth/signup'}>Sign Up</Link>
            </span>
          </p>
        </div>
      </form>
      <button
        type='submit'
        form='signInForm'
        className='h-full bg-[#010514] hover:bg-[#0b1a52] rounded-md px-4 mr-4 transition-colors duration-100 ease-linear'
      >
        Sign In
      </button>
    </div>
  )
}

export default SignIn
