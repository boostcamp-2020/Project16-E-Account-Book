import React, { useState } from 'react';
import styled from 'styled-components';
import myColor from '@theme/color';

const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${myColor.primary.accent}};
`;

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}

export default Example;
