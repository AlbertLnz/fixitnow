import RrssLayout from '@/icons/RrssLayout'
import Image from 'next/image'
import user from '@/assets/imgs/user.webp'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='grid grid-cols-[1fr,auto,1fr] items-center justify-center py-4 px-8'>
      <div>
        <RrssLayout />
      </div>

      <h1 className='text-6xl text-center custom-wavy-underline'>
        {'<FixItNow />'}
      </h1>

      <div className='justify-self-end'>
        <Link href='/user/albertlnz'>
          <Image
            src={user}
            alt='user'
            width={120}
            height={120}
            className='size-[100px] rounded-full'
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
