import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { LeaderboardItem } from './LeaderboardItem';

type Props = {};

export const Leaderboard = (props: Props) => {
  return (
    <Box w="100%">
      <Heading>LEADERBOARD</Heading>

      <LeaderboardItem
        donation={{
          count: 1,
          displayName: 'test',
          createdAt: 'test'
        }}
      />
    </Box>
  );
};
