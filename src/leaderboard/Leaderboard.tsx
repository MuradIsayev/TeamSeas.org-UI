import React, { useState } from 'react';
import {
  Box,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  VStack
} from '@chakra-ui/react';
import { LeaderboardItem } from './LeaderboardItem';
import { Donation } from '../types';
import { useQuery } from 'urql';

const DonationsQuery = `
query Query($orderBy: OrderByParams) {
    donations(orderBy: $orderBy) {
      id
      count
      displayName
      message
      team
      createdAt
    }
  }
`;

type DonationsQueryRes = {
  donations: Donation[];
};

interface Props {}

export const Leaderboard = (props: Props) => {
  const [field, setOrderByField] = useState('createdAt');

  const [{ data, fetching, error }] = useQuery<DonationsQueryRes>({
    query: DonationsQuery,
    variables: {
      orderBy: {
        field,
        direction: 'desc'
      }
    }
  });

  if (fetching || !data) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <Box w="100%" mt={16}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={2}>
          LEADERBOARD
        </Heading>

        <RadioGroup onChange={setOrderByField} value={field}>
          <Stack direction="row">
            <Radio value="createdAt">Most Recent</Radio>
            <Radio value="count">Most Pounds </Radio>
          </Stack>
        </RadioGroup>

        {data.donations.map(donation => (
          <LeaderboardItem key={donation.id} donation={donation} />
        ))}
      </VStack>
    </Box>
  );
};
