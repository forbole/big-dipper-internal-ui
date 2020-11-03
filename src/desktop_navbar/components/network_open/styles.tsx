import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      position: 'fixed',
      top: 0,
      width: '100%',
      background: theme?.palette?.background?.paper,
      zIndex: 1201,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      opacity: 0,
      visibility: 'hidden',
      transition: '0.2s ease-in-out',
      '&.open': {
        opacity: 1,
        visibility: 'visible',
      },
      '& .actions': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      '& .content': {
        padding: '1rem',
      },
      '& img': {
        padding: '1rem 0.5rem 0.5rem',
        width: '200px',
      },
      '& .top-action-bar': {
        width: '100%',
        '& .input': {
          background: theme?.palette?.background?.default,
        },
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
