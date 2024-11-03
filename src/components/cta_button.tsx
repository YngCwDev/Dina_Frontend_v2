import React from 'react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface style{
  classname: string
}

const CtaButtonDark = ({classname}: style) => {
  return (
    <div className={`flex gap-2 items-center mx-auto my-4 rounded-xl w-fit ${classname}`}>
        <Link  href='/support' className={buttonVariants({variant:'black'})}>
          Contact Now
        </Link> 
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
        <Link  href='/support' className={buttonVariants({variant:'red'})}>
          
          Contact Now
          
        </Link> 
        <Link
          href='/support/quote'
          className="flex items-center "
        >
          <span className="font-medium">Request a Quote</span><ChevronRight size={20} strokeWidth={1}/>
        </Link>
      </div>
  )
}

export  {CtaButton, CtaButtonDark}