import Contact from '@/components/contact'
import CallToAction from '@/components/cta'
import Hero from '@/sections/industries/hero'
import IndustryList from '@/sections/industries/industries'
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