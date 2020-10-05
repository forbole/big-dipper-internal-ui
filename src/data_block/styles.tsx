import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      boxSizing: 'border-box',
      overflow: 'hidden',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      color: 'white',
      borderRadius: '6px',
      height: '110px',
      background: theme.palette.primary.main,
      '& .header': {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
        '& .label, & .duration': {
          margin: '0',
          fontWeight: '300',
          fontSize: '0.875rem',
        },
      },
      '& .content': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        '& h1': {
          margin: '0',
          fontWeight: '400',
          fontSize: '2.2rem',
        },
      },
    },
    select: {
      color: 'inherit',
      padding: '0',
      '& div': {
        padding: '0',
        fontSize: '0.875rem',
        fontWeight: '300',
      },
      '& svg': {
        color: 'inherit',
      },
      '&:before': {
        content: 'none',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
