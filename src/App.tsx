import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/300.css';

import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  extendTheme,
  Stack,
  Spinner
} from '@chakra-ui/react';
import { Logo } from './Logo';
import { Counter } from './donation/Counter';
import { Leaderboard } from './leaderboard/Leaderboard';
import { DonationWizard } from './donation/DonationWizard';
import { useQuery, useSubscription } from 'urql';

const TotalDonationsQuery = `
  query Query {
    totalDonations
  }
`;

const TotalUpdatedQuery = `
  subscription Subscription {
    totalUpdated {
      total
    }
  }
`;

const handleSubscription = (prev: any, newTotal: any) => {
  return newTotal?.totalUpdated?.total;
};

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat'
  }
});

export const App = () => {
  const [res] = useSubscription(
    {
      query: TotalUpdatedQuery
    },
    handleSubscription
  );

  const [{ data, fetching, error }] = useQuery({
    query: TotalDonationsQuery
  });

  if (fetching)
    return (
      <Stack direction="row" spacing={4}>
        <Spinner size="xl" />
      </Stack>
    );
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} bg="gray.50">
          <VStack spacing={8}>
            <Logo h="44" pointerEvents="none" mt={10} mb={5} />
            <Heading as="h1" size="xl">
              JOIN THE MOVEMENT!
            </Heading>
            <Text>
              The team is growing everyday and scoring wins for the planet.
              <br /> Remove trash with us and track our progress!
            </Text>

            <Heading as="h1" fontSize={'8rem'}>
              <Counter from={0} to={res.data || data.totalDonations} />
            </Heading>

            <DonationWizard />

            <Leaderboard />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
