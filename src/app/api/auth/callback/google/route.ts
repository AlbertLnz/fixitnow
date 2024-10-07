import { createSupabaseServerClient } from '@/utils/supabase/server'
import { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic' // An option in NextJS to prevent the route from being cached statically

export async function GET(request: NextRequest) {
  console.log('REQUEST', request)

  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code !== null) {
    const supabase = createSupabaseServerClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  return redirect('/app')
}
