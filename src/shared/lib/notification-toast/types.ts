export type NotificationToastParams = {
  message: string;
  actionLabelText?: string;
  duration?: number;
  onDismiss?: () => void;
  onAction?: () => void;
};

export type NotificationToastContextType = (
  params: NotificationToastParams,
) => void;
