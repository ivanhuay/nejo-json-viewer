import { fn } from '@storybook/test';

import Nejo from '../nejo';
import styles from './customvariables.module.scss';

const basicData = {
    first_name: 'Ivan',
    last_name: 'Huayraña',
    age: 32,
    status: 'Open to work'
}

const nestedData = {
    first_name: 'Ivan',
    last_name: 'Huayraña',
    age: 32,
    status: 'Open to work',
    job_experience: [
        {
            company: 'R/GA',
            position: 'Tech Lead',
            from: new Date("2019-04-01T09:00"),
            to: new Date("2024-09-30T09:00")
        },
        {
            company: 'Grava.io',
            position: 'Full Stack Developer',
            from: new Date("2024-09-30T09:00"),
            to: new Date("2019-03-30T09:00")
        },
    ]
}
export default {
  title: 'Nejo Json Viewer',
  component: Nejo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    jsonData: { control: 'object' },
  },
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BasicData = {
  args: {
    label: 'Basic Data',
    jsonData: basicData
  },
};

export const Nested = {
  args: {
    label: 'Nested',
    jsonData: nestedData
  },
};

export const CustomCss = {
    args: {
      label: 'Custom CSS',
      jsonData: basicData,
      className: styles.custom
    },
  };