import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      margin: '0 1rem',
      '&:hover': {
        cursor: 'pointer',
      },
      '& svg': {
        fontSize: '1.3rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
