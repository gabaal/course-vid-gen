import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex w-full h-full mt-20 items-center justify-center'>
      <SignUp />
    </div>
  )
}