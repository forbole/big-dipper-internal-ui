import React, { useState } from 'react';
import clsx from 'clsx';
import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { DesktopNavProps } from '../../src/components/desktop_navbar/types';
import { NetworkItem } from './mobile_nav';

export {
  NetworkItem,
};
export const useDesktopNavHook = () => {
  const [open, setOpen] = useState(false);
  const [isNetworkOpen, setNetworkOpen] = useState(false);
  const [mode, setMode] = useState({
    value: 'light mode',
    key: 'light',
  });

  const toggleDraw = () => {
    setOpen(!open);
  };

  const toggleMode = () => {
    const value = mode?.key === 'light' ? 'dark' : 'light';
    setMode({
      value: `${value} mode`,
      key: value,
    });
  };

  const toggleNetwork = () => {
    setNetworkOpen(!isNetworkOpen);
  };

  return {
    open,
    setOpen,
    toggleDraw,
    toggleMode,
    mode,
    toggleNetwork,
    isNetworkOpen,
  };
};

export const TextHolders = (props:DesktopNavProps) => {
  const {
    sideBar: {
      open,
      onClick,
    },
    topBar: {
      network: {
        toggleNetwork,
        isNetworkOpen,
      },
    },
  } = props;
  const OPEN_DRAWER_WIDTH = 230;
  const CLOSED_DRAWER_WIDTH = 55;
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      marginLeft: CLOSED_DRAWER_WIDTH,
      padding: '0.5rem',
      '&.open': {
        marginLeft: OPEN_DRAWER_WIDTH,
        transition: theme.transitions.create(['margin'], {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  }));

  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, {
        open,
      })}
    >
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
        donec massa sapien faucibus et molestie ac.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
        donec massa sapien faucibus et molestie ac.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
        donec massa sapien faucibus et molestie ac.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
        donec massa sapien faucibus et molestie ac.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
        donec massa sapien faucibus et molestie ac.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
        donec massa sapien faucibus et molestie ac.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
        donec massa sapien faucibus et molestie ac.
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
        consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
        hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
        nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
      </Typography>
    </div>

  );
};

export const defaultArgs = {
  sideBar: {
    table: {
      type: {
        required: true,
        summary: 'object',
        detail: JSON.stringify({
          open: 'boolean',
          onClick: '() => void',
          items: 'ReactElement[]',
        }, null, 2),
      },
      defaultValue: {
        summary: 'null',
      },
    },
    control: {
      type: null,
    },
  },
  topBar: {
    table: {
      type: {
        required: true,
        summary: 'object',
        detail: JSON.stringify({
          language: {
            selected: {
              key: 'string',
              value: 'string',
            },
            languages: [{
              key: 'string',
              value: 'string',
            }],
            onClick: '({key, value}) => void',
          },
          themeMode: {
            mode: {
              value: 'string',
              key: 'string',
            },
            onClick: '() => void',
          },
          searchBar: {
            searchBarPlaceholder: 'string',
            searchBarCallback: '(value: string | number) => void',
          },
          network: {
            selectedNetwork: {
              value: 'string [required]',
              online: 'boolean',
              iconSrc: 'string',
            },
            items: 'ReactElement[] [required]',
            isNetworkOpen: 'boolean',
            toggleNetwork: '() => void',
          },
          header: 'ReactElement',
        }, null, 2),
      },
      defaultValue: {
        summary: 'null',
      },
    },
    control: {
      type: null,
    },
  },
};
