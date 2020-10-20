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
