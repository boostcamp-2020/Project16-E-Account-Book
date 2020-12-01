import React from 'react';
import Modal from './Modal';

interface Props {
  title: string;
}

export default {
  title: 'Molecules/Modal',
  component: Modal,
  argTypes: {
    title: { control: 'text' },
  },
};

export const modal = ({ title }: Props): JSX.Element => {
  return (
    <Modal title={title}>
      <p>여기에 Modal의 content를 채워주세요</p>
    </Modal>
  );
};

modal.story = {
  name: 'Modal',
};

modal.args = {
  title: '모달 제목',
};
