import Link from 'next/link'

const ForgotPassword = () => {
  const confirmReset = async () => {
    'use server'

    console.log('forgotPassword Supabase function')
  }

  return (
    <div className='grid grid-cols-[85%_15%] max-w-6xl mx-auto h-full text-6xl items-center place-content-center'>
      <form
        id='forgotPasswordForm'
        className='relative flex flex-col w-full justify-center gap-y-8 px-4'
        action={confirmReset}
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

        <div className='absolute -bottom-16 text-4xl ml-4'>
          <p>
            Remember your password?{' '}
            <span className='text-[#2B813C]'>
              <Link href={'/signin'}>Sign In</Link>
            </span>
          </p>
        </div>
      </form>
      <button
        type='submit'
        form='forgotPasswordForm'
        className='h-full bg-[#010514] rounded-md px-4 mr-4'
      >
        Reset
      </button>
    </div>
  )
}

export default ForgotPassword
