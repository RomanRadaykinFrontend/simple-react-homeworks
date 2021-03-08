import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import HW12 from './HW12';
import { HW12Decorator } from './HW12StoriesDecorator';



export default {
    title: 'HW12',
    component: HW12,
    decorators: [HW12Decorator]
} as Meta;

const Template: Story= (args) => <HW12/>;

export const HW12Example = Template.bind({});
HW12Example.args = {
};

