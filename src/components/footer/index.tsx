import React from 'react';
import classnames from 'classnames';
import { useTheme } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import { useGetStyles } from './styles';
import { FooterProps } from './types';
import { useFooterHook } from './hooks';
import {
  logo, logoWhite,
} from '../../resources/images';
/**
 * Footer component used across all pages
 */
export const Footer = (props: FooterProps) => {
  const theme = useTheme();
  const {
    breakpoint = 769,
    socialMediaComponents = [],
    blockExplorerText,
    copyrightText,
    className,
    links = {
    },
    bigDipperLogo = {
    },
    donate,
  } = props;

  const {
    src: bigDipperSrc = theme?.palette?.type === 'light' ? logo : logoWhite,
    alt: bigDipperAlt = 'Big Dipper Logo',
    onClick,
  } = bigDipperLogo;

  const {
    components: linkComponents = [],
    decorator: linkDecorator,
  } = links;

  const { handleLogoClick } = useFooterHook(onClick);

  const { classes } = useGetStyles({
    tabletBreakpoint: breakpoint,
  });

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'footer')}>
      {/* logo container start */}
      <div className={classnames(classes.logoContainer, 'logo-container')}>
        <div onClick={handleLogoClick} role="button">
          <img
            className={classnames(classes.logo, 'logo')}
            src={bigDipperSrc}
            alt={bigDipperAlt}
          />
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
        {!!donate && donate?.url && (
          <a
            className={classnames(classes.mobileOnly, 'donate-mobile', 'url')}
            href={donate.url}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
            >
              {donate.text}
            </Button>
          </a>
        )}
        {!!donate && donate?.onClick && (
          <Button
            className={classnames(classes.mobileOnly, 'donate-mobile', 'click')}
            onClick={donate.onClick}
            variant="contained"
            color="primary"
            size="small"
          >
            {donate.text}
          </Button>
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
      </div>
      {/* links container end */}
      {/* social media container start */}
      <div
        className={classnames(classes.socialMediaContainer, 'social-media-container')}
      >
        <div className="icons-container">
          {socialMediaComponents.map((x, i) => (
            <span
              key={i}
              className={classnames(classes.socialMediaContent, 'social-media-content')}
            >
              {x}
            </span>
          ))}
        </div>
        <Typography
          variant="body2"
          className={classnames(classes.mobileOnly, classes.copyright, 'copyright-text-tablet')}
        >
          {copyrightText}
        </Typography>
        {/* tablet donate button start */}
        {!!donate && donate?.url && (
          <a
            href={donate.url}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className={classnames(classes.tabletAndUp, 'donate-tablet')}
              variant="contained"
              color="primary"
              size="small"
            >
              {donate.text}
            </Button>
          </a>
        )}
        {!!donate && donate?.onClick && (
          <Button
            className={classnames(classes.tabletAndUp, 'donate-tablet')}
            onClick={donate.onClick}
            variant="contained"
            color="primary"
            size="small"
          >
            {donate.text}
          </Button>
        )}
        {/* tablet donate button end */}
      </div>
      {/* social media container end */}
    </div>
  );
};

export default Footer;
