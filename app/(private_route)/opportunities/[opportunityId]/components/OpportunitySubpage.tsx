import { Opportunity } from '@/types';
import React from 'react'

interface OpportunitySubpageProps {
  oppDetails: any;
}

const OpportunitySubpage: React.FC<OpportunitySubpageProps> = ({
  oppDetails
}) => {
    return <div>OpportunitySubpage for {oppDetails.title}</div>;
};

export default OpportunitySubpage
