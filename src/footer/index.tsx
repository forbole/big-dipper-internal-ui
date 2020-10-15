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
import { logo } from '../resources/images';

/**
 * Footer component used across all pages
 */
export const Footer = (props: FooterProps) => {
  const {
    breakpoint = 769,
    socialMediaComponents = [],
    storeBadgesComponents = [],
    blockExplorerText,
    copyrightText,
    links = {
    },
    bigDipperLogo = {
    },
    donate = {
    },
  } = props;

  const {
    src: bigDipperSrc = logo,
    alt: bigDipperAlt = 'Big Dipper Logo',
  } = bigDipperLogo;

  const {
    text: donateText = '',
    url: donateUrl = '#',
  } = donate;

  const {
    components: linkComponents = [],
    decorator: linkDecorator,
  } = links;

  const { classes } = useGetStyles({
    tabletBreakpoint: breakpoint,
  });

  return (
    <div className={classnames(classes.root, 'big-dipper', 'footer')}>
      {/* logo container start */}
      <div className={classnames(classes.logoContainer, 'logo-container')}>
        <div>
          <Link
            href="/"
          >
            <img
              className={classnames(classes.logo, 'logo')}
              src={bigDipperSrc}
              alt={bigDipperAlt}
            />
          </Link>
          <Typography
            variant="body2"
            className={classnames('block-explorer-text')}
          >
            {blockExplorerText}
          </Typography>
          <Typography
            variant="body2"
            className={classnames(classes.tabletAndUp, classes.copyright, 'copyright-text-mobile')}
          >
            {copyrightText}
          </Typography>
        </div>
        {/* mobile donate button start */}
        {!!donateText && (
          <a
            className={classnames(classes.mobileOnly, 'donate-mobile')}
            href={donateUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
            >
              {donateText}
            </Button>
          </a>
        )}
        {/* mobile donate button end */}
      </div>
      {/* logo container end */}
      {/* links container start */}
      <div
        className={classnames(classes.listContainer, 'list-container')}
      >
        <List
          className={classnames(classes.list, 'list')}
        >
          {linkComponents.map((x, i) => {
            return (
              <ListItem
                key={i}
                className={classnames(classes.listItem, 'list-item')}
              >
                {x}
                {i !== linkComponents.length - 1 && (
                  <span className={classnames('list-decorator')}>{linkDecorator}</span>
                )}
              </ListItem>
            );
          })}
        </List>
        {/* play store badges start */}
        <div
          className={classnames(classes.badgeContainer, 'badge-container')}
        >
          {storeBadgesComponents.map((x, i) => (
            <span className={classnames('badge')} key={i}>
              {x}
            </span>
          ))}
        </div>
        {/* play store badges end */}
      </div>
      {/* links container end */}
      {/* social media container start */}
      <div
        className={classnames(classes.socialMediaContainer, 'social-media-container')}
      >
        {socialMediaComponents.map((x, i) => (
          <span
            key={i}
            className={classnames(classes.socialMediaContent, 'social-media-content')}
          >
            {x}
          </span>
        ))}
        <Typography
          variant="body2"
          className={classnames(classes.mobileOnly, classes.copyright, 'copyright-text-tablet')}
        >
          {copyrightText}
        </Typography>
        {/* tablet donate button start */}
        {!!donateText && (
          <a
            className={classnames(classes.tabletAndUp, 'donate-tablet')}
            href={donateUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
            >
              {donateText}
            </Button>
          </a>
        )}
        {/* tablet donate button end */}
      </div>
      {/* social media container end */}
    </div>
  );
};

export default Footer;
