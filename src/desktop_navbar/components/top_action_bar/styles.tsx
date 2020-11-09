import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '1.5rem 1rem 0.5rem 1rem',
      zIndex: 1205,
      '& .side-actions-container': {
        display: 'flex',
        alignItems: 'center',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
