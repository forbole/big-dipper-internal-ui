import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();

  const input = {
    background: theme?.palette?.background?.paper
    ?? 'rgba(0, 0, 0, 1)',
  };

  const icon = {
    color: theme?.palette?.custom?.fonts?.fontFour ?? 'rgba(0, 0, 0, 1)',
  };

  const useStyles = makeStyles({
    root: {
      padding: '0.5rem 1rem',
      '& .input': {
        width: '100%',
        background: input.background,
        padding: '0.2rem 0.5rem',
        fontSize: '0.875rem',
        '& input': {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        },
      },
    },
    icon: {
      '&.icon': {
        color: icon.color,
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
