import React from 'react'
import ContactForm from '../contactComponent/ContactForm'
import Contact from '../contactComponent/Contact'
import Map from '../homeComponent/Map'
import Follow from '../homeComponent/Follow'

function ContactPage() {
  return (
    <div className='p-4 md:p-10'>
        <Contact />
        <ContactForm />
        <Map />
        <Follow />
    </div>
  )
}

export default ContactPage