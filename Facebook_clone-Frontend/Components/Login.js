import { signIn } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-12 space-y-8">
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
        width={200}
        height={200}
      />
      <a
        onClick={signIn}
        className="px-8 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white">
        Login with Facebook
      </a>
    </div>
  )
}

export default Login