const ResetPassword = () => {
  const resetPassword = async () => {
    'use server'

    console.log('resetPassword Supabase function')
  }

  return (
    <div className='grid grid-cols-[85%_15%] max-w-6xl mx-auto h-full text-6xl items-center place-content-center'>
      <form
        id='resetPasswordForm'
        className='relative flex flex-col w-full justify-center gap-y-8 px-4'
        action={resetPassword}
      >
        <div className='flex items-center bg-[#292929] rounded-md py-4 px-10 gap-x-4'>
          <label className='text-md w-full' htmlFor='new-password'>
            New Password
          </label>
          <input
            className='flex rounded-md px-4 py-2 bg-inherit text-[#EBECF0] text-4xl w-full'
            type='new-password'
            name='new-password'
            placeholder='••••••••'
            required
          />
        </div>
        <div className='flex items-center bg-[#292929] rounded-md py-4 px-10 gap-x-4'>
          <label className='text-md w-full' htmlFor='confirm-new-password'>
            Confirm New Password
          </label>
          <input
            className='flex rounded-md px-4 py-2 bg-inherit text-[#EBECF0] text-4xl w-full'
            type='confirm-new-password'
            name='confirm-new-password'
            placeholder='••••••••'
            required
          />
        </div>
      </form>
      <button
        type='submit'
        form='resetPasswordForm'
        className='h-full bg-[#010514] rounded-md px-4 mr-4'
      >
        Reset
      </button>
    </div>
  )
}

export default ResetPassword
