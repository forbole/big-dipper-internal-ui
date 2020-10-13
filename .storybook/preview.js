import React from 'react';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// wingman maybe come back later
// import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
