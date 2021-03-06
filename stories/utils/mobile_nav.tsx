import React, { useState } from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

export const useMobileHook = () => {
  const [isOpen, setOpen] = useState(false);
  const [isNetworkOpen, setNetworkOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [mode, setMode] = useState({
    value: 'light mode',
    key: 'light',
  });

  const toggleMode = () => {
    const value = mode?.key === 'light' ? 'dark' : 'light';
    setMode({
      value: `${value} mode`,
      key: value,
    });
  };

  const toggleIsOpen = () => {
    if ((isOpen && isNetworkOpen) || (isOpen && isNavOpen)) {
      if (isNetworkOpen) {
        setNetworkOpen(false);
      }
      if (isNavOpen) {
        setNavOpen(false);
      }
      setOpen(false);
    } else {
      // if initial state is closed then we open navbar
      setNavOpen(true);
      setOpen(true);
    }
  };

  const toggleNetwork = () => {
    // make sure everything else is closed first
    if (isNavOpen) {
      setNavOpen(false);
    }
    setNetworkOpen(true);
    setOpen(true);
  };

  return {
    isOpen,
    toggleIsOpen,
    isNetworkOpen,
    isNavOpen,
    toggleNetwork,
    toggleMode,
    mode,
  };
};

export const MenuItem = (props:any) => {
  const { value } = props;
  const useStyles = makeStyles({
    root: {
      fontSize: '1rem',
      margin: '1rem 0',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {value}
    </div>
  );
};

const dummyData = {
  name: 'Cosmos Hub',
  logo: 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/8178b6bcce1d1563bac10f8a150c713724a742f1/cosmoshub.svg?sanitize=true',
  links: [
    {
      name: 'Mainnet',
      chain_id: 'cosmoshub-3',
      url: 'https://cosmos.bigdipper.live',
    },
    {
      name: 'Testnet',
      chain_id: 'stargate-3a',
      url: 'https://stargate.bigdipper.live',
    },
    {
      name: 'Testnet',
      chain_id: 'gaia-13007',
      url: 'https://gaia.bigdipper.live',
    },
    {
      name: 'Retired',
      chain_id: 'cosmoshub-2',
      url: 'https://cosmoshub-2.bigdipper.live',
    },
    {
      name: 'Retired',
      chain_id: 'cosmoshub-1',
      url: 'https://cosmoshub-1.bigdipper.live',
    },
  ],
};
export const NetworkItem = () => {
  const useStyles = makeStyles({
    root: {
      fontSize: '1rem',
      margin: '1rem 0',
      '& .logo-container': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        '& p': {
          margin: 0,
        },
        '& img': {
          width: '25px',
          marginRight: '0.5rem',
        },
        '& .item': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '1.5rem 0',
        },
        '& .networks': {
          width: '100%',
        },
        '& .status': {
          padding: '0.2rem 0.5rem',
          color: 'white',
          fontSize: '0.75rem',
          '&.retired': {
            background: 'pink',
          },
          '&.testnet': {
            background: 'orange',
          },
          '&.mainnet': {
            background: 'red',
          },
        },
      },
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="logo-container">
        <img src={dummyData.logo} alt="logo" />
        <div className="networks">
          <p>
            {dummyData.name}
          </p>
          {dummyData.links.map((x) => {
            return (
              <div className="item" key={x.chain_id}>
                <p>
                  {x.chain_id}
                </p>
                <div className={classnames(x.name.toLowerCase(), 'status')}>
                  {x.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const defaultArgs = {
  logo: {
    table: {
      type: {
        summary: 'object',
        detail: JSON.stringify({
          src: 'string',
          alt: 'string',
          onClick: '() => void',
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
  searchBar: {
    table: {
      type: {
        summary: 'object',
        detail: JSON.stringify({
          searchBarPlaceholder: 'string',
          searchBarCallback: '(value: string | number) => void [required]',
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
  announcement: {
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'null',
      },
    },
    control: {
      type: null,
    },
  },
  network: {
    table: {
      type: {
        summary: 'object',
        detail: JSON.stringify({
          selectedNetwork: {
            value: 'string [required]',
            online: 'boolean',
            iconSrc: 'string',
          },
          items: 'ReactElement[] [required]',
          isNetworkOpen: 'boolean',
          toggleNetwork: '() => void',
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
  menu: {
    table: {
      type: {
        summary: 'object',
        detail: JSON.stringify({
          isMenuOpen: 'boolean [required]',
          items: 'ReactElement[] [required]',
          language: {
            selected: {
              key: 'string [required]',
              value: 'string [required]',
            },
            languages: [{
              key: 'string [required]',
              value: 'string [required]',
            }],
            onClick: '({key, value}) => void [required]',
          },
          themeMode: {
            mode: {
              value: 'string [required]',
              key: 'string [required]',
            },
            onClick: '() => void [required',
          },
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
  hamburgerIcon: {
    table: {
      type: {
        summary: 'object',
        detail: JSON.stringify({
          isOpen: 'boolean [required]',
          onClick: '() => void [required]',
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
  className: {
    table: {
      type: {
        summary: 'string',
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
