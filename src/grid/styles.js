// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
export const styles = (theme) => ({
    /* Styles applied to the root element. */
    root: {},
    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
    },
    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0', // For instance, it's useful when used with a `figure` element.
    },
    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0,
    },
    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column',
    },
    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse',
    },
    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse',
    },
    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap',
    },
    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse',
    },
    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center',
    },
    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start',
    },
    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end',
    },
    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline',
    },
    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center',
    },
    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start',
    },
    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end',
    },
    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between',
    },
    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around',
    },
    /* Styles applied to the root element if `justifyContent="center"`. */
    'justify-content-xs-center': {
      justifyContent: 'center',
    },
    /* Styles applied to the root element if `justifyContent="flex-end"`. */
    'justify-content-xs-flex-end': {
      justifyContent: 'flex-end',
    },
    /* Styles applied to the root element if `justifyContent="space-between"`. */
    'justify-content-xs-space-between': {
      justifyContent: 'space-between',
    },
    /* Styles applied to the root element if `justifyContent="space-around"`. */
    'justify-content-xs-space-around': {
      justifyContent: 'space-around',
    },
    /* Styles applied to the root element if `justifyContent="space-evenly"`. */
    'justify-content-xs-space-evenly': {
      justifyContent: 'space-evenly',
    },
    ...generateGutter(theme, 'xs'),
    ...theme.breakpoints.keys.reduce((accumulator, key) => {
      // Use side effect over immutability for better performance.
      generateGrid(accumulator, theme, key);
      return accumulator;
    }, {}),
  });