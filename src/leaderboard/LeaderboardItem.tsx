import React from 'react';
import { Donation } from '../types';

interface Props {
  donation: Donation;
}

export const LeaderboardItem = ({ donation }: Props) => {
  return (
    <div>
      <div>{donation.displayName}</div>
    </div>
  );
};
