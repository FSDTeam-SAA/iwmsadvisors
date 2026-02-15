import ContactForm from '@/components/website/contact/ContactForm'
import ContactHero from '@/components/website/contact/ContactHero'
import ContactInformation from '@/components/website/contact/ContactInformation'
import React from 'react'

const page = () => {
  return (
    <div>
        <ContactHero />
        <ContactForm />
        <ContactInformation />
    </div>
  )
}

export default page