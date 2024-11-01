import Contact from '@/sections/support/contact'
import Hero from '@/sections/support/hero'
import Location from '@/sections/support/location'
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