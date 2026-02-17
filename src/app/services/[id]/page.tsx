import ServiceSingle from '@/components/website/Service/single/ServiceSingle'
import React from 'react'

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = React.use(params);
  return (
    <div>
        <ServiceSingle id={id} />
    </div>
  )
}

export default page