import { useArgs } from '@storybook/preview-api';
import  Modal  from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export const ModalStories = {
  args: { 
    isOpen: true,
    contenido: 'Este es el contenido del modal',
  },
  /**
   * 👇 To avoid linting issues, it is recommended to use a function with a capitalized name.
   * If you are not concerned with linting, you may use an arrow function.
   */
   render: function Render({ isOpen, ...args }) {
    const [_, updateArgs] = useArgs();

     function close() {
      
      updateArgs({ ...args, isOpen: !isOpen });
     }

     return <Modal {...args} close={close}  aceptar={close} cancel={close} save={close} isOpen={isOpen} />;
  },
};