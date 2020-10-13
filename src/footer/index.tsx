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

export const Footer = (props: FooterProps) => {
  const {
    breakpoint = 769,
    BDLogoSrc = './src/resources/images/big-dipper-logo.png',
    BDLogoAlt = 'Big Dipper logo',
    linkComponents = [],
    socialMediaComponents = [],
    storeBadgesComponents = [],
    blockExplorerText,
    copyrightText,
    donateText,
    linkDecorator,
  } = props;
  const { classes } = useGetStyles({
    tabletBreakpoint: breakpoint,
  });

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
        <Button
          className={classnames(classes.mobileOnly, 'donate-mobile')}
          variant="contained"
          color="primary"
          size="small"
        >
          {donateText}
        </Button>
      </div>

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
        <div
          className={classnames(classes.badgeContainer, 'badge-container')}
        >
          {storeBadgesComponents.map((x, i) => (
            <span className={classnames('badge')} key={i}>
              {x}
            </span>
          ))}
        </div>
      </div>
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
        <Button
          className={classnames(classes.tabletAndUp, 'donate-tablet')}
          variant="contained"
          color="primary"
          size="small"
        >
          {donateText}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
