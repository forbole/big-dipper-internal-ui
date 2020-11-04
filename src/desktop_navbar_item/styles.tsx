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
                fill: theme?.palette?.custom?.icon ?? theme?.palette?.primary?.main,
              },
            },
            '&.active': {
              background: theme?.palette?.custom?.highlight ?? theme?.palette?.primary?.light,
              color: theme?.palette?.primary?.main,
              '& .MuiListItemIcon-root': {
                '& svg': {
                  fill: theme?.palette?.primary?.main,
                },
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
