import React from 'react';
import SquircleCard from './SquircleCard';

export default {
  title: 'Atoms/div/SquircleCard',
  component: SquircleCard,
};

export const squircleCard = (): JSX.Element => {
  return <SquircleCard>SquircleCard</SquircleCard>;
};

squircleCard.story = {
  name: 'SquircleCard',
};
