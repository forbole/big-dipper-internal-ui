export const useNavHook = (callback:any) => {
  const handleLogoClick = () => {
    if (callback) {
      callback();
    }
  };

  return {
    handleLogoClick,
  };
};
ß;
