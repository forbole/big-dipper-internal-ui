import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      zIndex: 100,
      height: '100vh',
      background: 'blue',
      position: 'fixed',
      width: '100%',
      opacity: 0,
      visibility: 'hidden',
      '&.open': {
        animation: '$openView .2s ease-in-out',
        '-webkit-animation-fill-mode': 'forwards',
      },
      '&.close': {
        animation: '$closeView .2s ease-in-out',
        '-webkit-animation-fill-mode': 'forwards',
      },
    },
    '@keyframes openView': {
      '0%': {
        visibility: 'visible',
      },
      '10%': {
        opacity: 0,
        visibility: 'visible',
      },
      '100%': {
        opacity: 1,
        visibility: 'visible',
      },
    },
    '@keyframes closeView': {
      '0%': {
        opacity: 1,
        visibility: 'visible',
      },
      '100%': {
        opacity: 0,
        visibility: 'hidden',
      },
    },
    content: {
      '&.mobile-nav-open-content': {
        marginTop: '3.5rem',
        padding: '0 1rem 1rem',
        height: '100%',
        overflow: 'auto',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
