import { Opportunity } from '@/types';
import React from 'react'

interface OpportunitySubpageProps extends Partial<Opportunity> {}

const OpportunitySubpage: React.FC<OpportunitySubpageProps> = ({
  provider,
  location,
  season,
  approved,
  industry,
  isfor,
  mode,
  typelabel,
  description,
  title,
  expiry_date,
  contact_email,
  type,
}) => {
    return <div>OpportunitySubpage for {title}</div>;
};

export default OpportunitySubpage
