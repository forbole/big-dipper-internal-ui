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
      items = [],
      themeMode,
      language,
    },
  } = props;

  return (
    <>
      {!!language && (
        <LanguageDrawer
          {...hookProps}
          selected={language!.selected}
          languages={language!.languages}
          onClick={language!.onClick}
        />
      )}
      <div
        className={classnames(classes.root, 'big-dipper', 'mobile-nav-open', {
          open: isMenuOpen,
        })}
      >
        <div
          className={classnames(classes.content, 'mobile-nav-open-content')}
        >
          {items?.map((x, i) => (
            <React.Fragment key={i}>
              {x}
            </React.Fragment>
          ))}
        </div>
        {/* actions start */}
        <div className={classnames('bottom-actions')}>
          {/* language start */}
          {
            !!language && (
              <div
                className={classnames('language-selector')}
                role="button"
                // onClick={hookProps?.toggleDrawer}
              >
                <Language fontSize="small" className={classnames('globe-icon')} />
                <p className={classnames('selected-language')}>{language!.selected?.value}</p>
                <ExpandMoreOutlined fontSize="small" className={classnames('more-icon')} />
              </div>
            )
          }
          {/* language end */}
          {/* theme start */}
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
          {/* theme end */}
        </div>
        {/* actions end */}
      </div>
    </>
  );
};

export default MenuOpen;
