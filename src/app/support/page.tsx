import Contact from '@/app/support/sections/contact'
import Hero from '@/app/support/sections/hero'
import Location from '@/app/support/sections/location'
import React from 'react'

const page = () => {
  return (
    <>
        <section>
            <Hero/>
        </section>
        <section>
            <Contact/>
        </section>
        <section>
            <Location/>
        </section>
    </>
  )
}

export default page