import { Button } from '@chakra-ui/button';
import { Box, VStack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { CountSelection } from './CountSelection';

interface Props {}

export const DonationWizard = (props: Props) => {
  const [step, setStep] = useState(0);

  const next = () => setStep(step + 1);
  const previous = () => setStep(step - 1);

  const pages = [<CountSelection/>, <div>Step 2</div>];

  return (
    <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
      {pages[step]}

      <VStack spacing={2}>
        <Button
          w="full"
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          onClick={next}
        >
          Next
        </Button>
        <Button
          w="full"
          onClick={previous}
          size="lg"
          borderRadius="full"
          variant="ghost"
          fontSize="sm"
          color="gray.700
            "
        >
          Previous
        </Button>
      </VStack>
    </Box>
  );
};
