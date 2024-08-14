import { useStrictContext } from '@/shared/lib/react.ts';
import { notificationToastContext } from '@/shared/lib/notification-toast/context.ts';

export const useNotificationToast = () => {
  return useStrictContext(notificationToastContext);
};
