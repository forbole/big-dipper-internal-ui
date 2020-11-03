import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '1.5rem 1rem 0.5rem 1rem',
      '& .search-input': {
        marginRight: '1rem',
        padding: '0',
        width: '40%',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
