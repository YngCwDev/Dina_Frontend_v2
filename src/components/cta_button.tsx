import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface style{
  classname: string
}

const CtaButtonDark = ({classname}: style) => {
  return (
    <div className={`flex gap-2 items-center mx-auto my-4 rounded-xl w-fit ${classname}`}>
        <Button variant={"ghost"} className="bg-red-700 text-white rounded-xl">
          Contact Now
        </Button> 
        <Link
          href='/form'
          className="flex items-center "
        >
          <span className="">Request a Quote</span><ChevronRight size={20} strokeWidth={1} className='relative top-[1px]'/>
        </Link>
      </div>
  )
}
const CtaButton = ({classname}: style) => {
  return (
    <div className={`flex gap-2 items-center  bg-zinc-50/50 rounded-md w-fit text-zinc-900 ${classname}`}>
        <Button variant={"ghost"} className="bg-red-700 text-white rounded-md">
          <Link href='/support'>
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