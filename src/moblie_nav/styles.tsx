import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const rootBackground = theme?.palette?.background?.default
  ?? 'rgba(248, 248, 248, 1)';

  const useStyles = makeStyles({
    root: {
      background: rootBackground,
    },
  });

  return {
    classes: useStyles(),
  };
};
