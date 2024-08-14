export type ConfirmationParams = {
  icon?: 'no-network' | 'alert' | 'warning';
  title?: string;
  description?: string;
  closeText?: string;
  confirmText?: string;
  onClose?: () => void;
  onConfirm?: () => void;
};

export type ConfirmationContextType = (
  params?: ConfirmationParams,
) => Promise<boolean>;
