import { makeStyles } from '@material-ui/styles';

export const useGetStyles = (height:number) => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: `${height}px`,
    },
  });

  return {
    classes: useStyles(),
  };
};
