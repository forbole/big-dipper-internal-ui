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
      transition: '0.2s ease-in-out',
      '&.open': {
        opacity: 1,
        visibility: 'visible',
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
