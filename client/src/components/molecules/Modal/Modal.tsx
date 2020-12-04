import React from 'react';
import styled from 'styled-components';
import ColumnFlexContainer from '@atoms/div/ColumnFlexContainer';
import RowFlexContainer from '@atoms/div/RowFlexContainer';
import Title from '@atoms/p/LeftLargeText';
import Closed from '@atoms/button/TextButton';
import myColor from '@theme/color';
import { hideModal } from '@actions/modal/type';
import { useDispatch } from 'react-redux';

interface Props extends modalProps {
  title?: string;
  children: React.ReactChild[] | React.ReactChild;
}

interface modalProps {
  width?: string;
  height?: string;
}

const defaultProps = {
  title: '',
  width: '80%',
  height: '60%',
};

const ModalBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${myColor.background.translucentBlack};
  z-index: 3;
`;

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Modal = styled.div<modalProps>`
  max-width: 800px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: white;
  box-shadow: 8px 8px 8px -4px #7b7b7b;
  border: 0;
  border-radius: 8px;
  padding: 10px 40px;
  z-index: 4;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
`;

const modal: React.FC<Props> = ({ title, children, ...props }: Props) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(hideModal());
  };

  return (
    <>
      <ModalBackground onClick={closeModal} />
      <ModalContainer>
        <Modal {...props}>
          <ColumnFlexContainer width="100%" height="100%">
            <RowFlexContainer width="100%" margin="10px 0">
              <Title>
                <>{title}</>
              </Title>
              <ButtonContainer>
                <Closed onClick={closeModal} color="black">
                  X
                </Closed>
              </ButtonContainer>
            </RowFlexContainer>
            <>{children}</>
          </ColumnFlexContainer>
        </Modal>
      </ModalContainer>
    </>
  );
};

modal.defaultProps = defaultProps;

export default modal;
