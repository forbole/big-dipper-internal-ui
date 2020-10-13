import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { getMinMediaQuery } from '../utils/media_queries';

export const useGetStyles = ({ tableBreakPoint = 769 }: any) => {
  const theme: any = useTheme();

  // root colors
  const root = {
    background: theme?.palette?.custom?.footer
    ?? 'rgba(0, 0, 0, 1)',
    color: theme?.palette?.custom?.onDarkSurface ?? 'rgba(255, 255, 255, 0.8)',
  };

  // logo colors
  const logoContainer = {
    color: theme?.palette?.custom?.white ?? 'white',
  };

  // copyright colors
  const copyright = {
    color: theme?.palette?.custom?.onDarkSurface ?? 'rgba(255, 255, 255, 0.8)',
  };

  const listItem = {
    fontSize: theme?.typography?.body3?.fontSize ?? '0.75rem',
  };

  const useStyles = makeStyles({
    root: {
      background: root.background,
      color: root.color,
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      '& a': {
        textDecoration: 'none',
      },
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
      '& .list-decorator': {
        margin: '0 1rem',
      },
    },
    badgeContainer: {
      display: 'none',
      [getMinMediaQuery(tableBreakPoint)]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .badge': {
          margin: '0.25rem',
        },
      },
    },
    socialMediaContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      [getMinMediaQuery(tableBreakPoint)]: {
        alignSelf: 'flex-end',
        '& svg': {
          width: '22px',
        },
      },
    },
    socialMediaContent: {
      marginRight: '0.7rem',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    copyright: {
      color: copyright.color,
      fontWeight: 300,
    },
    logo: {
      width: '150px',
    },
  });

  return {
    classes: useStyles(),
  };
};
