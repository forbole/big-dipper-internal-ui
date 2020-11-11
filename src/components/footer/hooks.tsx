export const useFooterHook = (callback:any) => {
  const handleLogoClick = () => {
    if (callback) {
      callback();
    }
  };

  return {
    handleLogoClick,
  };
};
