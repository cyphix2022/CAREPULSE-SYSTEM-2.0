import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href='/'>
        <Image
          src="/assets/icons/logo-full.svg"
          alt="logo"
          width={100}
          height={100}
          className="h-10 w-fit"
        />
        </Link>
      </div>
    </div>
  )
}

export default Success