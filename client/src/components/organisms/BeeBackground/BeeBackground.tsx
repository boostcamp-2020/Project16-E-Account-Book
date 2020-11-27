import React from 'react';
import BeeLogo from '@atoms/img/BeeLogo';
import Background from '@atoms/div/Background';
import YellowOverlapBackground from '@molecules/YellowOverlapBackground';

const BeeBackground: React.FC = () => {
  return (
    <Background>
      <YellowOverlapBackground />
      <BeeLogo />
    </Background>
  );
};

export default BeeBackground;
