import React from 'react';
// import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
// import RowFlexContainer from '@atoms/div/RowFlexContainer';
// import LeftNormalText from '@atoms/p/LeftNormalText';
// import TextArea from '@atoms/textarea/TextArea';
// import styled from 'styled-components';
import myColor from '@theme/color';

interface Props {
  backgroundColor?: string;
}

const defaultProps = {
  backgroundColor: myColor.primary.main,
};

const CreateAccountbookSetting: React.FC<Props> = () => {
  return <></>;
};

CreateAccountbookSetting.defaultProps = defaultProps;

export default CreateAccountbookSetting;
