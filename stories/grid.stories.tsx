import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Grid from '../src/grid';
import { ThemeKnob } from './theme_knob';
import getFaqDetails from '../stories/utils/grid';

export default {
  title: 'Grid',
  component: Grid,
  decorators: [withKnobs],
};

const Template = () => (
  <ThemeKnob>
    <Grid container spacing={2}>
            {getFaqDetails().map((x, i) => {
              return (
                <Grid key={i} item xs={12} desktop={6}>
                  <h2>
                    {x.question}
                  </h2>
                  <p >
                    {x.ans}
                  </p>
                </Grid>
              );
            })}
          </Grid>
    
  </ThemeKnob>
);

/**
 * Default props
 */
export const Default = Template.bind({
});

