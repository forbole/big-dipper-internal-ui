import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      zIndex: 99,
      height: '100vh',
      background: 'yellow',
      position: 'fixed',
      width: '100%',
      visibility: 'hidden',
      opacity: 0,
      '&.open': {
        animation: '$openNetworkView .2s ease-in-out',
        '-webkit-animation-fill-mode': 'forwards',
      },
      '&.close': {
        animation: '$closeNetworkView .2s ease-in-out',
        '-webkit-animation-fill-mode': 'forwards',
      },
    },
    '@keyframes openNetworkView': {
      '0%': {
        opacity: 0,
        visibility: 'visible',
      },
      '100%': {
        opacity: 1,
        visibility: 'visible',
      },
    },
    '@keyframes closeNetworkView': {
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
      '&.mobile-network-open-content': {
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
