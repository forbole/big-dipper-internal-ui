import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = ({ textWidth, animationMargin }: any) => {
  const theme: any = useTheme();
  const icon = {
    background: theme?.palette?.background?.default
    ?? 'rgba(0, 0, 0, 1)',
    color: theme?.palette?.custom?.fonts?.fontTwo ?? 'rgba(0, 0, 0, 1)',
  };
  const text = {
    color: theme?.palette?.custom?.fonts?.fontOne ?? 'rgba(0, 0, 0, 1)',
  };
  const useStyles = makeStyles({
    root: {
      padding: '0.5rem 1rem 0.5rem 0',
      display: 'flex',
      justifyContent: 'flex-start',
      alignContent: 'center',
      position: 'relative',
      '& .announcement-text': {
        flex: '1',
        margin: '0',
        marginLeft: '0.3rem',
        fontSize: '0.75rem',
        animation: `$slide ${textWidth * 0.05}s infinite ease-in-out`,
        whiteSpace: 'nowrap',
        color: text.color,
      },
    },
    '@keyframes slide': {
      '0%': {
        marginLeft: `${animationMargin}%`,
      },
      '100%': {
        marginLeft: `calc(-${textWidth}px + -10%)`,
      },
    },
    icon: {
      '&.icon': {
        padding: '0 1.5rem 0 1rem',
        background: `linear-gradient(90deg, ${icon.background} 67%, transparent 100%)`,
        color: icon.color,
        zIndex: 5,
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
