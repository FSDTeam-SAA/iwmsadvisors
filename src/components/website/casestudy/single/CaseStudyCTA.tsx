import React from 'react'

const CaseStudyCTA = ({
    client,
    duration,
    teamSize
}: {
    client: string;
    duration: string;
    teamSize: string;
}) => {
  return (
    <div className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Client</h3>
            <p className="text-gray-100">{client}</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Duration</h3>
            <p className="text-gray-100">{duration}</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Team Size</h3>
            <p className="text-gray-100">{teamSize}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyCTA