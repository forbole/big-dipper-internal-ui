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
// wingman maybe come back later
// import CssBaseline from '@material-ui/core/CssBaseline';
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
      {/* <CssBaseline /> */}
      <Story />
    </>
  )
}
];
