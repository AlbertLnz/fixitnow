'use client'

import Link from 'next/link'
import { createSupabaseClientClient } from '@/utils/supabase/client'
import { useState } from 'react'
import { EMAIL_REGEX } from '@/lib/constants'
import { FormObject } from '@/types'

const SignUp = () => {
  const [formObject, setFormObject] = useState<FormObject>({
    email: undefined,
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
  })

  const validateForm = async (evt: React.FormEvent<HTMLFormElement>) => {
    const form = evt.target as HTMLFormElement
    const email = (form.elements[0] as HTMLInputElement).value
    const username = (form.elements[1] as HTMLInputElement).value
    const password = (form.elements[2] as HTMLInputElement).value
    const confirmPassword = (form.elements[3] as HTMLInputElement).value

    const supabase = createSupabaseClientClient()
    const sameUser = await supabase
      .from('users')
      .select('*')
      .eq('username', username)

    if (password === confirmPassword) {
      setFormObject((prev) => ({
        ...prev,
        password: true,
        confirmPassword: true,
      }))
    }

    if (EMAIL_REGEX.test(email)) {
      setFormObject((prev) => ({ ...prev, email: true }))
    } else {
      return setFormObject((prev) => ({ ...prev, email: false }))
    }

    if (sameUser.data) {
      if (sameUser.data.length < 1) {
        setFormObject((prev) => ({ ...prev, username: true, email: true })) // FIX IT (an available username doesn't means email is available)
      } else {
        if (sameUser.data[0].email === email) {
          setFormObject((prev) => ({ ...prev, username: false }))
        }

        if (sameUser.data[0].username === username) {
          setFormObject((prev) => ({ ...prev, username: false }))
        }
      }
    }
  }

  const signUp = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    await validateForm(evt)

    if (Object.values(formObject).some((value) => value === false)) {
      return
    }

    const supabase = createSupabaseClientClient()

    const form = evt.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

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
    <div className='grid grid-cols-[85%_15%] max-w-4xl mx-auto h-full text-3xl items-center place-content-center'>
      <form
        id='signUpForm'
        className='relative flex flex-col w-full justify-center gap-y-4 px-4'
        onSubmit={signUp}
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
          {formObject.email === undefined ? (
            <p className='hidden'></p>
          ) : formObject.email === true ? (
            <p className='text-lime-300 uppercase'>ok!</p>
          ) : (
            <p className='text-red-300'>null</p>
          )}
        </div>
        <div className='flex items-center bg-[#292929] rounded-md py-4 px-10 gap-x-4'>
          <label className='' htmlFor='username'>
            Username:
          </label>
          <input
            className='flex rounded-md px-4 py-2 bg-inherit text-[#9CA3AF] text-2xl w-full focus:outline-none'
            name='username'
            placeholder='albertlnz'
            required
          />
          {formObject.username === undefined ? (
            <p className='hidden'></p>
          ) : formObject.username === true ? (
            <p className='text-lime-300 uppercase'>ok!</p>
          ) : (
            <p className='text-red-300'>null</p>
          )}
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
          {formObject.password === undefined ? (
            <p className='hidden'></p>
          ) : formObject.password === true ? (
            <p className='text-lime-300 uppercase'>ok!</p>
          ) : (
            <p className='text-red-300'>null</p>
          )}
        </div>
        <div className='flex items-center bg-[#292929] rounded-md py-4 px-10 gap-x-4'>
          <label
            className='text-md whitespace-nowrap'
            htmlFor='confirm-password'
          >
            Confirm Password:
          </label>
          <input
            className='flex rounded-md px-4 py-2 bg-inherit text-[#9CA3AF] text-2xl w-full focus:outline-none'
            type='password'
            name='confirm-password'
            placeholder='••••••••'
            required
          />
          {formObject.confirmPassword === undefined ? (
            <p className='hidden'></p>
          ) : formObject.confirmPassword === true ? (
            <p className='text-lime-300 uppercase'>ok!</p>
          ) : (
            <p className='text-red-300'>null</p>
          )}
        </div>

        <div className='absolute -bottom-16 text-2xl ml-4'>
          <p>
            Already have an account?{' '}
            <span className='text-[#2B813C]'>
              <Link href={'/auth/signin'}>Sign In</Link>
            </span>
          </p>
        </div>
      </form>
      <button
        type='submit'
        form='signUpForm'
        className='h-full bg-[#010514] hover:bg-[#0b1a52] rounded-md px-4 mr-4 transition-colors duration-100 ease-linear'
      >
        Sign Up
      </button>
    </div>
  )
}

export default SignUp
