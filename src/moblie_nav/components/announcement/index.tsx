import React from 'react';
import classnames from 'classnames';
import { NotificationsActiveOutlined } from '@material-ui/icons';
import { useGetStyles } from './styles';
import { useAnnouncementHook } from './hooks';

const Announcement = (props:any) => {
  const { announcement } = props;
  const {
    ref,
    width,
  } = useAnnouncementHook();
  const { classes } = useGetStyles({
    textWidth: width,
  });

  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'announcement')}
    >
      <NotificationsActiveOutlined fontSize="small" />
      <p ref={ref} className={classnames('announcement-text')}>
        {announcement}
      </p>
    </div>
  );
};

export default Announcement;
