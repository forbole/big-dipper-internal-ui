import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      zIndex: 151,
      height: '100vh',
      background: 'blue',
      position: 'fixed',
      width: '100%',
      opacity: 0,
      visibility: 'hidden',
      transition: '0.2s ease-in-out',
      '&.open': {
        opacity: 1,
        visibility: 'visible',
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
