import React from 'react';

const InformationSVG = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" {...props}>
    <path d="m480.6,81.3h-449.2c-11.3,0-20.4,9.1-20.4,20.4v308.7c0,11.3 9.1,20.4 20.4,20.4h449.2c11.3,0 20.4-9.1 20.4-20.4v-308.7c5.68434e-14-11.3-9.1-20.4-20.4-20.4zm-20.4,279.4l-122.8-115.5 122.8-98.4v213.9zm-215.4-61.9c11.2,8.2 21.2,3.5 25.6,0l34.8-27.9 126.4,119h-351.2l128-120.4 36.4,29.3zm180.9-176.7l-168.1,134.6-167.4-134.6h335.5zm-249.5,121.6l-124.4,117v-217l124.4,100z" />
  </svg>
);

export default InformationSVG;
