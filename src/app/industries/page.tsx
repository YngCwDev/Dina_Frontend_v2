import Contact from '@/components/contact'
import Hero from '@/app/industries/sections/hero'
import IndustryList from '@/app/industries/sections/industries'
import React from 'react'

const Industries = () => {
  return (
    <div>
      <section>
        <Hero/>
      </section>
      <section>
        <IndustryList/>
      </section>
      <section>
      <Contact/>
      </section>
    </div>
  )
}

export default Industries