import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      '&.selected-network': {
        padding: '0.4rem 1rem',
        background: theme?.palette?.background?.paper,
        color: theme?.palette?.custom?.fonts?.fontOne,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover': {
          cursor: 'pointer',
        },

        '& .network-icon': {
          width: '20px',
          marginRight: '0.5rem',
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
