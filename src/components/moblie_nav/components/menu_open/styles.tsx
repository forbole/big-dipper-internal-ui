import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();

  const root = {
    background: theme?.palette?.background?.default
    ?? 'rgba(0, 0, 0, 1)',
    color: theme?.palette?.custom?.fonts?.fontTwo ?? 'rgba(0, 0, 0, 1)',
  };
  const useStyles = makeStyles({
    root: {
      zIndex: 151,
      height: '100vh',
      background: root.background,
      color: root.color,
      position: 'fixed',
      width: '100%',
      opacity: 0,
      visibility: 'hidden',
      transition: '0.2s ease-in-out',
      display: 'flex',
      flexDirection: 'column',
      '&.open': {
        opacity: 1,
        visibility: 'visible',
      },
      '& .bottom-actions': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '1rem',
      },
      '& .language-selector': {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        '& p': {
          fontSize: '0.75rem',
          margin: '0 0.3rem',
        },
      },
      '& .theme-container': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        '& p': {
          margin: 0,
          fontSize: '0.75rem',
        },
        '& .theme-icon': {
          marginRight: '0.3rem',
        },
      },
    },
    content: {
      '&.mobile-nav-open-content': {
        marginTop: '3.5rem',
        padding: '0 1rem 1rem',
        overflow: 'auto',
        boxSizing: 'border-box',
        flex: 1,
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
