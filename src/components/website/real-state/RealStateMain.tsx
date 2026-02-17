import React from 'react'
import RealStateHero from './RealStateHero'
import { getSingleRealEstate } from '@/lib/api/api'
import RealStateOverAllView from './RealStateOverAllView'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

const RealStateMain = async ({ id }: { id: string }) => {
    let data = null;
    try {
        const response = await getSingleRealEstate(id);
        data = response?.data;
    } catch (error) {
        console.error("Error fetching real estate:", error);
    }

    if (!data) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Real Estate Item Not Found</h2>
                <p className="text-gray-600 mb-8">The requested item could not be found or there was an error fetching the data.</p>
                <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                    <ChevronLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="-mt-12 md:-mt-20"> {/* Negative margin to offset page padding and make hero full width */}
            <RealStateHero 
                image={data.image?.url || ""} 
                title={data.title || ""} 
                description={data.overview || ""} 
                subtitles={data.subtitles}
            />
            <div className="container mx-auto px-4 py-12">
                <RealStateOverAllView 
                    overview={data.overview} 
                    keyCapabilities={data.keyCapabilities} 
                />
            </div>
        </div>
    )
}

export default RealStateMain