export const useLanguageDrawerHook = (callback:any, toggle:any) => {
  const handleChange = ({ key, value }:any) => {
    if (callback) {
      callback({
        key, value,
      });
    }
    toggle();
  };
  return {
    handleChange,
  };
};
