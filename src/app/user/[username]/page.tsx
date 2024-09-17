import ExampleEditor from '@/components/ExampleEditor'
import UserSettings from '@/components/UserSettings'

type Props = {
  params: { username: string }
}

const Username = ({ params }: Props) => {
  return (
    <>
      <main className='flex flex-col py-20 px-10'>
        <h1 className='text-9xl flex justify-start'>
          {params.username}&apos;s, settings
        </h1>

        <div className='grid grid-cols-10'>
          <div className='col-span-4 text-4xl bg-fuchsia-800'>
            <UserSettings />
          </div>
          <div className='col-span-6 bg-slate-800'>
            <ExampleEditor />
          </div>
        </div>
      </main>
    </>
  )
}

export default Username
