import React, { useState } from 'react';
import { option } from 'yargs';
import RadioCard from './RadioCard';
import { useRadioGroup } from '@chakra-ui/radio';
import { Heading, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import { NumberInput, NumberInputField } from '@chakra-ui/number-input';
import { Button } from '@chakra-ui/button';

interface Props {
  initialCount: number;
  next: (values: any) => void;
}

const options = [5, 20, 50, 100];

export const CountSelection = ({ initialCount, next }: Props) => {
  const [pounds, setPounds] = useState(initialCount);
  const [customAmount, setCustomAmount] = useState(
    '' + (options.includes(pounds) ? '' : pounds)
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'pounds',
    value: pounds.toString(),
    onChange: nextValue => {
      setCustomAmount('');
      setPounds(parseInt(nextValue));
    }
  });

  const group = getRootProps();

  const nextStep = () => {
    next({ count: pounds });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h2" size="md">
        JOIN #TEAMSEAS
      </Heading>
      <Text fontSize="md" fontWeight="bold">
        $1 removes a pound of trash
      </Text>
      <SimpleGrid mt={1} columns={2} spacing={2} {...group}>
        {options.map(value => {
          const radio = getRadioProps({ value, enterKeyHint: '' });
          return (
            <RadioCard key={value} {...radio}>
              {value} pounds
            </RadioCard>
          );
        })}
      </SimpleGrid>
      <NumberInput
        onFocus={() => setPounds(0)}
        onChange={value => {
          setPounds(parseInt(value));
          setCustomAmount(value);
        }}
        value={customAmount}
      >
        <NumberInputField placeholder="Other amount" />
      </NumberInput>

      <hr />

      <Button
        w="full"
        colorScheme="blue"
        size="lg"
        borderRadius="full"
        onClick={nextStep}
      >
        Next
      </Button>
    </VStack>
  );
};
