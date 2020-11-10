import React from 'react';
import classnames from 'classnames';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const LinkComponent = (props:any) => {
  const {
    url,
    title,
  } = props;

  return (
    <Link
      href={url}
      color="inherit"
      underline="none"
    >
      {title}
    </Link>
  );
};

export const SocialMediaComponent = (props:any) => {
  const {
    url,
    component: Component,
    className,
  } = props;

  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <Component />
    </a>
  );
};

export const StoreBadgeComponent = (props:any) => {
  const {
    url,
    className,
    imageSrc,
    imageAlt,
  } = props;
  const useStyles = makeStyles({
    root: {
      '&.apple': {
        '& img': {
          width: '100px',
        },
      },
      '&.google': {
        '& img': {
          width: '110px',
        },
      },
    },
  });
  const classes = useStyles();
  return (
    <a
      className={classnames(classes.root, className)}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        title={imageAlt}
      />
    </a>
  );
};

export const defaultArgs = {
  breakpoint: {
    table: {
      type: {
        summary: 'string | number',
      },
      defaultValue: {
        summary: 769,
      },
    },
    control: {
      type: null,
    },
  },
  bigDipperLogo: {
    type: {
      required: false,
    },
    description: 'defaults to packaged big dipper logo',
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
  blockExplorerText: {
    type: {
      required: true,
    },
    description: '{chain} Block Explorer etc',
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
  copyrightText: {
    type: {
      required: true,
    },
    description: 'Copyright © Forbole 2020 etc',
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
  donate: {
    type: {
      required: false,
    },
    description: 'all optional',
    table: {
      type: {
        summary: 'object',
        detail: JSON.stringify({
          text: 'string',
          url: 'string',
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
  links: {
    type: {
      required: false,
    },
    description: 'all optional',
    table: {
      type: {
        summary: 'object',
        detail: JSON.stringify({
          components: 'ReactElement[]',
          decorator: 'ReactElement | string',
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
  socialMediaComponents: {
    type: {
      required: false,
    },
    table: {
      type: {
        summary: 'ReactElement[]',
      },
      defaultValue: {
        summary: '[]',
      },
    },
    control: {
      type: null,
    },
  },
  storeBadgesComponents: {
    type: {
      required: false,
    },
    table: {
      type: {
        summary: 'ReactElement[]',
      },
      defaultValue: {
        summary: '[]',
      },
    },
    control: {
      type: null,
    },
  },
  className: {
    type: {
      required: false,
    },
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
