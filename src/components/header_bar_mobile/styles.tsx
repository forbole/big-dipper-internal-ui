import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      padding: '1rem',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'space-between',
      flexDirection: 'column',
      '& .flex-container': {
        display: 'flex',
        alignItems: 'center',
      },
      '& h3': {
        margin: 0,
        marginBottom: '0.5rem',
        fontSize: '1.5rem',
        fontWeight: 400,
        whiteSpace: 'nowrap',
      },
      '& .market-price': {
        overflow: 'hidden',
        background: theme?.palette?.background?.default,
        padding: theme?.palette?.custom?.gutters?.small,
        borderRadius: '2px',
        display: 'grid',
        gridGap: theme?.palette?.custom?.gutters?.small,
        gridTemplateColumns: 'repeat(2, 1fr)',
        width: '100%',
        boxSizing: 'border-box',
        '& .market-price-item': {
          display: 'flex',
          whiteSpace: 'nowrap',
          alignItems: 'center',
          overflow: 'hidden',
          width: '100%',
          justifyContent: 'flex-start',
          '& .price-key': {
            fontSize: '0.875rem',
            margin: 0,
            marginRight: '0.5rem',
            color: theme?.palette?.fonts?.fontThree,
          },
          '& .price-value': {
            color: theme?.palette?.fonts?.fontOne,
            fontSize: '0.875rem',
            margin: 0,
            fontWeight: 600,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
