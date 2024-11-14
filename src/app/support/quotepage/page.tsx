import React from 'react'
import Hero from './sections/hero'
import Form from './sections/form'

const Page = () => {
  return (
    <div className='lg:container'>
      <section>
        <Hero/>
      </section>
      <section>
        <Form/>
      </section>
    </div>
  )
}

export default Page