import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'

import { createSupabaseServerClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { parseUserDataLib } from '@/lib/parseUserData'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const userData = searchParams.get('userData')
  const type = searchParams.get('type') as EmailOtpType | null
  const token_hash = searchParams.get('token_hash')
  const next = searchParams.get('next') ?? '/app'

  if (type && token_hash) {
    const supabase = createSupabaseServerClient()
    console.log('USERDATA', userData)
    console.log('SUPABASE', supabase)

    // Add user to my database
    if (userData) {
      const user = parseUserDataLib(userData)
      const { email, password } = user

      const { error: dbError } = await supabase.from('users').insert({
        email,
        password,
      })

      if (dbError) {
        console.log('Error creating user:', dbError.message)
        redirect('/error')
      }
    }

    // Create token
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      redirect(next)
    }
  }

  redirect('/error')
}
