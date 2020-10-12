import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '../utils/media_queries';

export const useGetStyles = ({
  tableBreakPoint = 769,
}: any) => {
  const theme: any = useTheme();

  // root colors
  const root = {
    background: theme?.palette?.custom?.footer
    ?? '#242322',
    color: theme?.palette?.custom?.onDarkSurface ?? 'white',
  };

  // logo colors
  const logoContainer = {
    color: theme?.palette?.custom?.white ?? 'white',
  };

  // copyright colors
  const copyright = {
    color: theme?.palette?.custom?.onDarkSurface ?? 'white',
  };

  const listItem = {
    fontSize: theme?.typography?.body3?.fontSize ?? 14,
  }

  const useStyles = makeStyles({
    root: {
      background: root.background,
      color: root.color,
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      [getMinMediaQuery(tableBreakPoint)]: {
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
    },
    logoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      color: logoContainer.color,
    },
    mobileOnly: {
      [getMinMediaQuery(tableBreakPoint)]: {
        display: 'none',
      },
    },
    tabletAndUp: {
      display: 'none',
      [getMinMediaQuery(tableBreakPoint)]: {
        display: 'block',
        borderRadius: '20px',
      },
    },
    listContainer: {
      [getMinMediaQuery(tableBreakPoint)]: {
        flex: 1,
        marginLeft: '2rem',
        paddingTop: 0,
      },
    },
    list: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    listItem: {
      whiteSpace: 'nowrap',
      width: 'auto',
      padding: '0',
      fontSize: listItem.fontSize,
      '& span': {
        margin: '0 1rem',
      },
    },
    // playStore: {
    //   display: 'none',
    //   [getMinMediaQuery(theme.breakpoints.tablet)]: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    // },
    // socialMediaContainer: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   [getMinMediaQuery(theme.breakpoints.tablet)]: {
    //     alignSelf: 'flex-end',
    //     '& svg': {
    //       width: '22px',
    //     },
    //   },
    // },
    // socialMediaContent: {
    //   marginRight: '0.7rem',
    //   display: 'flex',
    //   alignItems: 'center',
    //   '&:hover': {
    //     cursor: 'pointer',
    //   },
    // },
    copyright: {
      color: copyright.color,
    },
    logo: {
      width: '150px',
    },
    // appleBadge: {
    //   '& img': {
    //     width: '100px',
    //   },
    //   marginRight: '0.5rem',
    // },
    // googleBadge: {
    //   '& img': {
    //     width: '110px',
    //   },
    // },
  });

  return {
    classes: useStyles(),
  };
};
