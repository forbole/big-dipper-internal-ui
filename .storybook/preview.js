import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import './styles.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  docs: { page: () => (
    <>
      <Title />
      <Subtitle />
      <Description />
      <ArgsTable story={PRIMARY_STORY} />
      <Primary />
      <Stories />
    </>
  ),
},
}

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const decorators = [(Story) => {
  return (
    <>
      <Story />
    </>
  )
}
];
