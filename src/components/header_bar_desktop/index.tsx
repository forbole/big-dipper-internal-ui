import React from 'react';
import classnames from 'classnames';
import { NavbarAnnouncement } from '../..';
import { DesktopHeaderBarProps } from './types';
import { useGetStyles } from './styles';

const HeaderBarDesktop = (props:DesktopHeaderBarProps) => {
  const { announcement, title, market } = props;
  const { classes } = useGetStyles();
  return (
    <div className={classnames(classes.root, 'big-dipper', 'header-bar-desktop')}>
      <div className={classnames('flex-container')}>
        <h3>{title}</h3>
        {
          !!announcement && (
          <div className={classnames('announcement-container')}>
            <NavbarAnnouncement announcement={announcement} />
          </div>
          )
        }
      </div>
      <div className={classnames('market-price')}>
        {market.map((x) => {
          return (
            <div className={classnames('market-price-item')} key={x.key}>
              <p className={classnames('price-key')}>
                {x.key}
                :
              </p>
              <p className={classnames('price-value')}>{x.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderBarDesktop;
