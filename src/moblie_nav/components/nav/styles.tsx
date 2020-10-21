import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();

  const networkSelect = {
    color: theme?.palette?.custom?.fonts?.fontOne ?? 'green',
    online: theme?.palette?.secondary?.main ?? '#35D07F',
    offline: theme?.palette?.primary?.main ?? '#FA3A39',
  };
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
      '& .network-container': {
        zIndex: 150,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 0.3rem 0 0.7rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        '&:hover': {
          cursor: 'pointer',
        },
      },
      '& .network-select-text': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: networkSelect.color,
        '&:before': {
          content: '" "',
          display: 'inline-block',
          marginRight: '0.2rem',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
        },
        '&.online:before': {
          background: networkSelect.online,
        },
        '&.offline:before': {
          background: networkSelect.offline,
        },
      },
      '& .action-container': {
        display: 'flex',
        alignItems: 'center',
        minWidth: 0,
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
