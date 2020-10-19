type logo = {
  src?: string;
  alt?: string;
}
export interface MobileProps {
  logo: logo;
}

type toggleIsOpen = () => void;

export interface MobileHookProps {
  isOpen: boolean;
  toggleIsOpen: toggleIsOpen;
}
