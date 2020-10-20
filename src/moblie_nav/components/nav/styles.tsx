import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();

  const networkSelect = {
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
        marginRight: '0.3rem',
        '&:hover': {
          cursor: 'pointer',
        },
      },
      '& .network-select': {
        fontSize: '0.75rem',
        wordBreak: 'break-all',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '100%',
        textOverflow: 'ellipsis',
        textAlign: 'right',
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
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
