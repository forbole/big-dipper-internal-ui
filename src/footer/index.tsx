import React from 'react';
import classnames from 'classnames';
import {
  Typography,
  Button,
  List,
  ListItem,
  Link,
} from '@material-ui/core';
import { useGetStyles } from './styles';
import { FooterProps } from './types';
// import {
//   footerLinks,
//   socialMediaLinks,
//   getStoreBadge,
// } from './utils';

export const Footer = (props: FooterProps) => {
  const {
    breakpoint,
    BDLogoSrc,
    BDLogoAlt,
    blockExplorerText,
    copyrightText,
  } = props;
  const { classes } = useGetStyles({
    tabletBreakpoint: breakpoint,
  });
  // const storeBadges = getStoreBadge(classes);

  return (
    <div className={classnames(classes.root, 'big-dipper', 'footer')}>
      <div className={classnames(classes.logoContainer, 'logo-container')}>
        <div>
          <Link
            href="/"
          >
            <img
              className={classnames(classes.logo, 'logo')}
              src={BDLogoSrc}
              alt={BDLogoAlt}
            />
          </Link>
          <Typography
            variant="body2"
            className={classnames('cosmos-block-explorer-text')}
          >
            {blockExplorerText}
          </Typography>
          <Typography
            variant="body2"
            className={classnames(classes.tabletAndUp, classes.copyright, 'copyright-text')}
          >
            {copyrightText}
          </Typography>
        </div>
        {/* <Button
          className={classnames(classes.mobileOnly)}
          variant="contained"
          color="primary"
          size="small"
        >
          {t('donate')}
        </Button> */}
      </div>
{/*
      <div
        className={classes.listContainer}
      >
        <List
          className={classes.list}
        >
          {footerLinks.map((x, i) => {
            return (
              <ListItem
                key={x.key}
                className={classes.listItem}
              >
                <NextLink
                  href={`${x.url}`}
                >
                  <Link
                    href={`${x.url}`}
                    color="inherit"
                    underline="none"
                  >
                    {t(x.key)}
                  </Link>
                </NextLink>
                {i !== footerLinks.length - 1 && (
                  <span>|</span>
                )}
              </ListItem>
            );
          })}
        </List>
        <div
          className={classes.playStore}
        >
          {storeBadges.map((x) => (
            <a
              className={x.className}
              href={x.url}
              target="_blank"
              rel="noreferrer"
              key={x.alt}
            >
              <img
                src={x.image}
                alt={x.alt}
                title={x.alt}
              />
            </a>
          ))}
        </div>
      </div>
      <div
        className={classes.socialMediaContainer}
      >
        {socialMediaLinks.map((x, i) => (
          <a
            href={x.url}
            target="_blank"
            rel="noreferrer"
            className={classes.socialMediaContent}
            key={i}
          >
            <x.component />
          </a>
        ))}
        <Button
          className={classnames(classes.tabletAndUp)}
          variant="contained"
          color="primary"
          size="small"
        >
          {t('donate')}
        </Button>
      </div> */}
    </div>
  );
};

Footer.defaultProps = {
  BDLogoSrc: './src/resources/images/big-dipper-logo.png',
  BDLogoAlt: 'big dipper logo',
  breakpoint: 769,
};

export default Footer;
