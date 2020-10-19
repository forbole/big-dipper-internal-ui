import { makeStyles } from '@material-ui/styles';
// import { useTheme } from '@material-ui/core/styles';
// import { getMinMediaQuery } from '../utils/media_queries';

export const useGetStyles = () => {
  // const theme: any = useTheme();

  const useStyles = makeStyles({
    root: {
      padding: '1rem',
      '& .top-bar-container': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      },
      '& .logo': {
        width: '120px',
        zIndex: 200,
      },
      '& .network-select': {
        zIndex: 150,
        marginRight: '3rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
