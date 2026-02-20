import CustomImage from '@/components/shared/CustomImage'
import React from 'react'

const RealStateHero = ({ image, title, description, subtitles }: { image: string, title: string, description?: string, subtitles?: string[] }) => {
  return (
    <section className="relative w-full overflow-hidden min-h-[40vh] md:min-h-[60vh] flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <CustomImage
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {subtitles && subtitles.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {subtitles.map((sub, idx) => (
                <span key={idx} className="bg-blue-600/90 text-white text-xs md:text-sm px-4 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm">
                  {sub}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-4xl font-bold text-white drop-shadow-2xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-2xl font-normal leading-relaxed text-white/90 max-w-2xl mx-auto drop-shadow-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default RealStateHero