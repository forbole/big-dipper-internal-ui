import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      margin: '0 1rem',
      fontSize: '1.3rem',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
