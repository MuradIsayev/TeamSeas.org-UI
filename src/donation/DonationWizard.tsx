import { Button } from '@chakra-ui/button';
import { Box, VStack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { CountSelection } from './CountSelection';
import { DonationDetails } from './DonationDetails';

interface Props {}

export const DonationWizard = (props: Props) => {
  const [step, setStep] = useState(0);
  const [donationDetails, setDonationDetails] = useState({ count: 20 });

  const next = (values: any = {}) => {
    const mergedDetails = { ...donationDetails, ...values };
    setStep(step + 1);

    setDonationDetails(mergedDetails);
  };
  const previous = () => setStep(step - 1);

  const pages = [
    <CountSelection next={next} initialCount={donationDetails.count} />,
    <DonationDetails next={next} previous={previous} />
  ];

  return (
    <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
      {pages[step]}
    </Box>
  );
};
