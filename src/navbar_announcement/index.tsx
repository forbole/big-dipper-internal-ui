import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { NotificationsActiveOutlined } from '@material-ui/icons';
import { useGetStyles } from './styles';
import { useAnnouncementHook } from './hooks';

const Announcement = (props:any) => {
  const { announcement } = props;
  const {
    ref,
    width,
    handleAnimation,
    animationMargin,
  } = useAnnouncementHook();
  const { classes } = useGetStyles({
    textWidth: width,
    animationMargin,
  });

  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'announcement')}
    >
      <NotificationsActiveOutlined fontSize="small" className={classnames(classes.icon, 'icon')} />
      <Typography
        ref={ref}
        onAnimationIteration={handleAnimation}
        className={classnames('announcement-text')}
      >
        {announcement}
      </Typography>
    </div>
  );
};

export default Announcement;
