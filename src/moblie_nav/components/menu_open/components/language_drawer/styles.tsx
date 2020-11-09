import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();

  const content = {
    background: theme?.palette?.background?.default
    ?? 'rgba(0, 0, 0, 1)',
    divider: theme?.palette?.divider
    ?? 'rgba(0, 0, 0, 1)',
    selected: theme?.palette?.custom?.fonts?.fontThree
    ?? 'rgba(0, 0, 0, 1)',
  };
  const useStyles = makeStyles({
    root: {
      '& .content': {
        background: content.background,
        padding: '1rem',
        '& .item': {
          padding: '1rem 0',
          '&.selected': {
            color: content.selected,
          },
          '&:not(:last-child)': {
            borderBottom: `solid ${content.divider} 1px`,
          },
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
