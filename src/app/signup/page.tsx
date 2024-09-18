import Link from 'next/link'

const SignUp = () => {
  const signUp = async () => {
    'use server'

    console.log('signUp Supabase function')
  }

  return (
    <div className='grid grid-cols-[85%_15%] max-w-6xl mx-auto h-full text-6xl items-center place-content-center'>
      <form
        id='signUpForm'
        className='relative flex flex-col w-full justify-center gap-y-8 px-4'
        action={signUp}
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
            type='confirm-password'
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
