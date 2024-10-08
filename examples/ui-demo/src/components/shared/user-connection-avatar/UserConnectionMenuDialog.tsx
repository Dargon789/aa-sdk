import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Dialog } from "@account-kit/react";

type UserConnectionDialogMenuProps = {
  isOpen: boolean;
  onClose: () => void;
} & PropsWithChildren &
  ComponentPropsWithoutRef<typeof Dialog>;

type UserConnectionDialogMenuTriggerProps = {
  toggleOpenState: () => void;
} & PropsWithChildren;

const UserConnectionDialogMenu = ({
  isOpen,
  onClose,
  children,
}: UserConnectionDialogMenuProps) => {
  return (
    <div>
      <Dialog isOpen={isOpen} onClose={onClose}>
        {children}
      </Dialog>
    </div>
  );
};

export const MenuTrigger = (
  props: UserConnectionDialogMenuTriggerProps &
    ComponentPropsWithoutRef<"button">
) => {
  return (
    <button onClick={() => props.toggleOpenState()}>{props.children}</button>
  );
};

export const MenuContent = (
  props: PropsWithChildren & ComponentPropsWithoutRef<"div">
) => {
  return (
    <div className="w-full bg-bg-surface-default radius-t-2 md:radius-2 md:min-w-96 p-6">
      {props.children}
    </div>
  );
};

UserConnectionDialogMenu.Trigger = MenuTrigger;
UserConnectionDialogMenu.Content = MenuContent;

export default UserConnectionDialogMenu;