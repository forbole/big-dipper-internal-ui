export interface MobileProps {

}

type toggleIsOpen = () => void;

export interface MobileHookProps {
  isOpen: boolean;
  toggleIsOpen: toggleIsOpen;
}
