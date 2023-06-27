import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/300.css'


import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  extendTheme
} from '@chakra-ui/react';
import { Logo } from './Logo';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat'
  }
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg="gray.50">
        <VStack spacing={8}>
          <Logo h="32" pointerEvents="none" />
          <Heading as="h1" size="xl">
            JOIN THE MOVEMENT!
          </Heading>
          <Text>
            The team is growing everyday and scoring wins for the planet.
            <br /> Remove trash with us and track our progress!
          </Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
