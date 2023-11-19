import { Label } from './Label';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
  }, 
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    text: 'Escribe aquí',
    primary: true,
   
  },
};

 