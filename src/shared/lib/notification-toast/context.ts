import { createStrictContext } from '@/shared/lib/react.ts';
import { NotificationToastContextType } from './types.ts';

export const notificationToastContext =
  createStrictContext<NotificationToastContextType>();
