import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const root = {
    background: theme?.palette?.background?.default
    ?? 'rgba(0, 0, 0, 1)',
    color: theme?.palette?.custom?.fonts?.fontOne ?? 'rgba(0, 0, 0, 1)',
  };
  const useStyles = makeStyles({
    root: {
      zIndex: 99,
      height: '100vh',
      background: root.background,
      color: root.color,
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
        height: 'calc(100% - 3.5rem)',
        overflow: 'auto',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
