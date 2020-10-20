import { makeStyles } from '@material-ui/styles';
// import { useTheme } from '@material-ui/core/styles';
// import { getMinMediaQuery } from '../utils/media_queries';

export const useGetStyles = () => {
  // const theme: any = useTheme();

  const useStyles = makeStyles({
    root: {
      '&.mobile-nav-bar': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '1rem',
      },
      '& .logo': {
        width: '120px',
        zIndex: 200,
        '&:hover': {
          cursor: 'pointer',
        },
      },
      '& .network-select': {
        zIndex: 150,
        marginRight: '1rem',
      },
      '& .action-container': {
        display: 'flex',
        alignItems: 'center',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
