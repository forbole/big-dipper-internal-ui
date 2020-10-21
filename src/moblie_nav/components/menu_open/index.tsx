import React from 'react';
import classnames from 'classnames';
import {
  Language, ExpandMoreOutlined, Brightness4Outlined,
} from '@material-ui/icons';
import { NavOpenProps } from './types';
import { useGetStyles } from './styles';
import { useMenuOpenHook } from './hooks';
import { LanguageDrawer } from './components';

const MenuOpen = (props: NavOpenProps) => {
  const { classes } = useGetStyles();
  const hookProps = useMenuOpenHook();
  const {
    menu: {
      isMenuOpen,
      items,
      language: {
        selected,
        languages,
        onClick,
      },
      themeMode,
    },
  } = props;

  return (
    <>
      <LanguageDrawer {...hookProps} selected={selected} languages={languages} onClick={onClick} />
      <div
        className={classnames(classes.root, 'big-dipper', 'mobile-nav-open', {
          open: isMenuOpen,
        })}
      >
        <div
          className={classnames(classes.content, 'mobile-nav-open-content')}
        >
          {items.map((x, i) => (
            <React.Fragment key={i}>
              {x}
            </React.Fragment>
          ))}
        </div>
        {/* actions start */}
        <div className={classnames('bottom-actions')}>
          <div
            className={classnames('language-selector')}
            role="button"
            onClick={hookProps?.toggleDrawer}
          >
            <Language fontSize="small" className={classnames('globe-icon')} />
            <p className={classnames('selected-language')}>{selected?.value}</p>
            <ExpandMoreOutlined fontSize="small" className={classnames('more-icon')} />
          </div>
          {!!themeMode && (
            <div
              className={classnames('theme-container')}
              role="button"
              onClick={themeMode?.onClick}
            >
              <Brightness4Outlined
                fontSize="small"
                className={classnames('theme-icon')}
              />
              <p>
                {themeMode?.mode?.value}
              </p>
            </div>
          )}
        </div>
        {/* actions end */}
      </div>
    </>
  );
};

export default MenuOpen;
