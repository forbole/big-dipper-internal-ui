import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();

  // icon for the hamburger
  const iconColor = theme?.palette?.custom?.fonts?.fontOne
  ?? 'rgba(0, 0, 0, 1)';

  const useStyles = makeStyles({
    root: {
      '&.hamburger': {
        zIndex: 200,
        width: '20px',
        position: 'fixed',
        right: '1rem',
        top: '1rem',
        '&:hover': {
          cursor: 'pointer',
        },
        '&:before, &:after, & .hamburger-content': {
          content: '""',
          backgroundColor: iconColor,
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
