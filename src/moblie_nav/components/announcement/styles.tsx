import { ContactsOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
// import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = ({ textWidth }: any) => {
  console.log(textWidth * 0.05);
  const useStyles = makeStyles({
    root: {
      padding: '0.5rem 1rem',
      display: 'flex',
      justifyContent: 'flex-start',
      alignContent: 'center',
      position: 'relative',
      '& .announcement-text': {
        flex: '1',
        margin: '0',
        marginLeft: '0.3rem',
        fontSize: '0.75rem',
        animation: `$slide ${textWidth * 0.05}s infinite ease-in-out`,
        // overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    },
    '@keyframes slide': {
      '0%': {
        marginLeft: '100%',
        // transform: 'translate(110%,0)',
      },
      '100%': {
        marginLeft: `calc(-${textWidth}px + -30%)`,
        // transform: 'translate(-100%,0)',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
