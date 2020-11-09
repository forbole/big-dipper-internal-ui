import { useState } from 'react';

export const useLanguagesHook = (callback:any) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = ({ key, value }:any) => {
    if (callback) {
      callback({
        key, value,
      });
    }
    handleClose();
  };

  return {
    anchorEl,
    handleOpen,
    handleClose,
    handleChange,
  };
};
