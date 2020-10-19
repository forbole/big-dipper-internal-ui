import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
// import { getMinMediaQuery } from '../utils/media_queries';

export const useGetStyles = () => {
  const theme: any = useTheme();

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
      '&.hamburger': {
        zIndex: 200,
        width: '20px',
        position: 'fixed',
        right: '15px',
        top: '12px',
        '&:hover': {
          cursor: 'pointer',
        },
        '&:before, &:after, & .hamburger-content': {
          content: '""',
          backgroundColor: 'blue',
          borderRadius: '10px',
          display: 'block',
          height: '2px',
          margin: '4px 0',
          transition: 'all 0.4s ease-in-out',
        },
        '&.active': {
          '&:before': {
            transform: 'translateY(7px) rotate(137deg)',
          },
          '&:after': {
            transform: 'translateY(-5px) rotate(-140deg)',
          },
          '& .hamburger-content': {
            transform: 'scale(0)',
          },
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
