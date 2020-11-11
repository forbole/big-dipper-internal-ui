import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .selected-button': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '&:hover': {
          cursor: 'pointer',
        },
        '& svg': {
          fontSize: '1.3rem',
          marginRight: '0.1rem',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
