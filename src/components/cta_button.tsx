import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'


const CtaButtonDark = () => {
  return (
    <div className="flex gap-2 items-center mx-auto my-4 bg-zinc-800 rounded-xl w-fit text-">
        <Button variant={"ghost"} className="bg-red-700 text-white rounded-xl">
          Contact Now
        </Button> 
        <Link
          href='/form'
          className="flex items-center "
        >
          <span className="font-medium">Request a Quote</span><ChevronRight size={20} strokeWidth={1}/>
        </Link>
      </div>
  )
}
const CtaButton = () => {
  return (
    <div className="flex gap-2 items-center  bg-zinc-50/50 rounded-md w-fit text-zinc-900">
        <Button variant={"ghost"} className="bg-red-700 text-white rounded-md">
          <Link href='/'>
          Contact Now
          </Link>
        </Button> 
        <Link
          href='/form'
          className="flex items-center "
        >
          <span className="font-medium">Request a Quote</span><ChevronRight size={20} strokeWidth={1}/>
        </Link>
      </div>
  )
}

export  {CtaButton, CtaButtonDark}