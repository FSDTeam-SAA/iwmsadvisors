import FAQAccordion from '@/components/shared/FAQ'
import FAQHero from '@/components/website/faq/FAQHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <FAQHero />
        <FAQAccordion />
    </div>
  )
}

export default page