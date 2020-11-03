import { green } from '@material-ui/core/colors';
import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const OPEN_DRAWER_WIDTH = 230;
  const CLOSED_DRAWER_WIDTH = 55;

  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'flex',
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
        width: `calc(100% - ${CLOSED_DRAWER_WIDTH}px)`,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.leavingScreen,
        }),
        '&.MuiPaper-elevation4': {
          boxShadow: 'none',
        },
      },
      '&.open': {
        marginLeft: OPEN_DRAWER_WIDTH,
        width: `calc(100% - ${OPEN_DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.easeInOut,
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
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: CLOSED_DRAWER_WIDTH,
    },
  }));

  return {
    classes: useStyles(),
  };
};