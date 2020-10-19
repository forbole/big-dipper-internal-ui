export interface MobileProps {
  logoSrc?: string;
}

type toggleIsOpen = () => void;

export interface MobileHookProps {
  isOpen: boolean;
  toggleIsOpen: toggleIsOpen;
}
