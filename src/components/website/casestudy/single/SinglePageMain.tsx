'use client';
import { useSingleCaseStudy } from '@/lib/hooks/useCaseStudy';
import React from 'react'
import CaseStudySingleHero from './CaseStudySingleHero';
import CaseStudyCTA from './CaseStudyCTA';
import SingleCaseStudiesDetails from './SingleCaseStudies-Details';

const SinglePageMain = ({ id }: { id: string }) => {
  const { data: caseStudyResponse, isLoading, error } = useSingleCaseStudy(id);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (error || !caseStudyResponse?.data) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        Failed to load case study. Please try again later.
      </div>
    );
  }

  const caseStudy = caseStudyResponse.data;

  // Map technologies to the expected format
  const technologies = caseStudy.technologiesUsed?.map((tech: string) => ({ name: tech })) || [];

  return (
    <div>
      <CaseStudySingleHero 
        image={caseStudy.image?.url || "/images/casestudiesbanner.jpg"} 
        title={caseStudy.title} 
        description={caseStudy.description}    
      />
      <CaseStudyCTA 
        client={caseStudy.client || "N/A"} 
        duration={caseStudy.duration || "N/A"} 
        teamSize={caseStudy.teamSize || "N/A"} 
      />
      <SingleCaseStudiesDetails 
        customerDescription={caseStudy.companyName || "No customer information available."}
        challengesDescription={caseStudy.challenge || "No challenge information available."}
        solutionsDescription={caseStudy.solution || "No solution information available."}
        technologies={technologies}
        benefitsDescription={caseStudy.benefit || "No benefit information available."}
        results={[{ text: caseStudy.resultImpact || "No results information available." }]}
        testimonial={{
            quote: caseStudy.caseExperience || "No experience shared.",
            author: caseStudy.clientName || "Client",
            position: "Stakeholder"
        }}
      />
    </div>
  );
};

export default SinglePageMain