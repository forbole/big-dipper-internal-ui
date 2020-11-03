import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return (
      createStyles({
        root: {
          '&.desktop-item': {
            '& .MuiListItemIcon-root': {
              minWidth: '40px',

              '& svg': {
                fill: theme?.palette?.custom?.icon ?? theme?.primary?.main,
              },
            },
          },
        },
      })
    );
  });

  return {
    classes: useStyles(),
  };
};
