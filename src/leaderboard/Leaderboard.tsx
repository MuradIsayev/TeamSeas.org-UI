import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import { LeaderboardItem } from './LeaderboardItem';

type Props = {};

export const Leaderboard = (props: Props) => {
  return (
    <Box w="100%">
      <VStack spacing={4}>
        <LeaderboardItem
          donation={{
            count: 1,
            displayName: 'Murick',
            createdAt: 'test'
          }}
        />
        <LeaderboardItem
          donation={{
            count: 1,
            displayName: 'Murick',
            createdAt: 'test'
          }}
        />
        <LeaderboardItem
          donation={{
            count: 1,
            displayName: 'Murick',
            createdAt: 'test'
          }}
        />
      </VStack>
    </Box>
  );
};
