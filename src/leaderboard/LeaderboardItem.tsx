import React from 'react';
import { Donation } from '../types';
import { Flex } from '@chakra-ui/layout';

interface Props {
  donation: Donation;
}

export const LeaderboardItem = ({ donation }: Props) => {
  return (
    <Flex boxShadow="md" p={3} bg="white" borderRadius="lg" maxWidth="xl" w="100%">
      <div>{donation.displayName}</div>
    </Flex>
  );
};
