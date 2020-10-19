import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      zIndex: -10,
      height: '100vh',
      background: 'orange',
      position: 'fixed',
      width: '100%',
      opacity: 0,
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
        opacity: 0,
        zIndex: 99,
      },
      '100%': {
        opacity: 1,
        zIndex: 99,
      },
    },
    '@keyframes closeView': {
      '0%': {
        opacity: 1,
        zIndex: 99,
      },
      '100%': {
        opacity: 0,
        zIndex: -10,
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
