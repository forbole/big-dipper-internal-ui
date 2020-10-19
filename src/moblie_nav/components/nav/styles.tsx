import { makeStyles } from '@material-ui/styles';
// import { useTheme } from '@material-ui/core/styles';
// import { getMinMediaQuery } from '../utils/media_queries';

export const useGetStyles = () => {
  // const theme: any = useTheme();

  const useStyles = makeStyles({
    root: {
      background: 'pink',
    },
  });

  return {
    classes: useStyles(),
  };
};
