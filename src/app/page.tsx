import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const HomePage = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: user } = await supabase.from('users').select('*').eq('id', 1)

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default HomePage
