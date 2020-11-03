import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0.5rem 1rem',
    },
  });

  return {
    classes: useStyles(),
  };
};
