import { GoogleIcon } from '@/icons/Google'
import { GitHubIcon } from '@/icons/GitHub'
import Link from 'next/link'

const SignIn = () => {
  const signIn = async () => {
    'use server'

    console.log('signIn Supabase function')
  }

  return (
    <div className='grid grid-cols-[85%_15%] max-w-6xl mx-auto h-full text-6xl items-center place-content-center'>
      <section id='rrss-login' className='grid grid-cols-2 gap-x-2 mb-12 px-4'>
        <article className='flex items-center justify-center p-4 bg-black gap-x-4 rounded-md'>
          <GitHubIcon className='size-14' />
          <p>GitHub</p>
        </article>
        <article className='flex items-center justify-center p-4 bg-black gap-x-4 rounded-md'>
          <GoogleIcon className='size-14' />
          <p>Google</p>
        </article>
      </section>

      <div />

      <form
        id='signInForm'
        className='relative flex flex-col w-full justify-center gap-y-8 px-4'
        action={signIn}
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

        <div className='absolute -bottom-24 text-4xl ml-4'>
          <p>
            Forgotten Password.{' '}
            <span className='text-[#F24822]'>
              <Link href={'/forgot-password'}>Reset</Link>
            </span>
          </p>
          <p>
            Don&apos;t have an account?{' '}
            <span className='text-[#2B813C]'>
              <Link href={'/signup'}>Sign Up</Link>
            </span>
          </p>
        </div>
      </form>
      <button
        type='submit'
        form='signInForm'
        className='h-full bg-[#010514] rounded-md px-4 mr-4'
      >
        Sign In
      </button>
    </div>
  )
}

export default SignIn
