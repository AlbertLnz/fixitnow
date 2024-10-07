import { createSupabaseServerClient } from '@/utils/supabase/server'

const HomePage = async () => {
  const supabase = createSupabaseServerClient()
  const { data: user } = await supabase.from('users').select('*').eq('id', 1)

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default HomePage
