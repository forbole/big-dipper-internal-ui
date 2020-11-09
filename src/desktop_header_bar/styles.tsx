import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      '& .announcement-container': {
        overflow: 'hidden',
      },
      '& .flex-container': {
        display: 'flex',
        alignItems: 'center',
      },
      '& h3': {
        margin: 0,
        fontSize: '1.875rem',
        fontWeight: 400,
        whiteSpace: 'nowrap',
      },
      '& .market-price': {
        display: 'flex',
        overflow: 'auto',
        background: theme?.palette?.background?.paper,
        padding: '0.5rem 1rem',
        borderRadius: '2px',
        '& .market-price-item': {
          display: 'flex',
          whiteSpace: 'nowrap',
          alignItems: 'center',
          justifyContent: 'center',
          '&:not(:last-child)': {
            marginRight: '1rem',
          },
          '& .price-key': {
            fontSize: '0.875rem',
            margin: 0,
            marginRight: '0.5rem',
            color: theme?.palette?.fonts?.fontThree,
          },
          '& .price-value': {
            color: theme?.palette?.fonts?.fontOne,
            fontSize: '1.25rem',
            margin: 0,
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
