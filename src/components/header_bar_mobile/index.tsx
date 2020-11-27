import React from 'react';
import classnames from 'classnames';
import { HeaderBarMobileProps } from './types';
import { useGetStyles } from './styles';

const HeaderBarMobile = (props:HeaderBarMobileProps) => {
  const { title, market } = props;
  const { classes } = useGetStyles();
  return (
    <div className={classnames(classes.root, 'big-dipper', 'header-bar-mobile')}>
      <div className={classnames('flex-container')}>
        <h3>{title}</h3>
      </div>
      <div className={classnames('market-price')}>
        {market.map((x) => {
          return (
            <div className={classnames('market-price-item')} key={x.key}>
              <p className={classnames('price-key')}>
                {x.key}
              </p>
              <p className={classnames('price-value')}>{x.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderBarMobile;
