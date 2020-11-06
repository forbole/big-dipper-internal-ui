import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const OPEN_DRAWER_WIDTH = 230;
  const CLOSED_DRAWER_WIDTH = 55;

  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '& .search-input': {
        marginRight: '1rem',
        padding: '0',
        width: '100%',
        maxWidth: '500px',
      },
      '& .big-dipper-icon': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '1rem 0.5rem 0.5rem',
        '&:hover': {
          cursor: 'pointer',
        },
        '& img': {
          width: '200px',
        },
      },
    },
    appBar: {
      '&.appbar-container': {
        background: theme?.palette?.background?.default,
        color: theme?.palette?.custom?.fonts?.fontTwo ?? 'inherit',
        width: `calc(100% - ${CLOSED_DRAWER_WIDTH}px)`,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.enteringScreen,
        }),
        '&.MuiPaper-elevation4': {
          boxShadow: 'none',
        },
      },
      '&.open': {
        marginLeft: OPEN_DRAWER_WIDTH,
        width: `calc(100% - ${OPEN_DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
    drawer: {
      width: OPEN_DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      paddingLeft: '1rem',
      boxSizing: 'border-box',
    },
    drawerOpen: {
      width: OPEN_DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
      width: CLOSED_DRAWER_WIDTH,
    },
  }));

  return {
    classes: useStyles(),
  };
};
