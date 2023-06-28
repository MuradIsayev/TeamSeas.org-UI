import React, { useState } from 'react';
import { option } from 'yargs';
import RadioCard from './RadioCard';
import { useRadioGroup } from '@chakra-ui/radio';
import { SimpleGrid, VStack } from '@chakra-ui/layout';
import { NumberInput, NumberInputField } from '@chakra-ui/number-input';

interface Props {}

const options = [5, 20, 50, 100];

export const CountSelection = (props: Props) => {
  const [pounds, setPounds] = useState(20);
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

  return (
    <VStack spacing={4} align="stretch">
      <SimpleGrid mt={1} mb={2} columns={2} spacing={2} {...group}>
        {options.map(value => {
          const radio = getRadioProps({ value, enterKeyHint: '' });
          return (
            <RadioCard key={value} {...radio}>
              {value} pounds
            </RadioCard>
          );
        })}
      </SimpleGrid>
      <NumberInput mb={3}
        onFocus={() => setPounds(0)}
        onChange={value => {
          setPounds(parseInt(value));
          setCustomAmount(value);
        }}
        value={customAmount}
      >
        <NumberInputField placeholder="Other amount" />
      </NumberInput>
    </VStack>
  );
};
