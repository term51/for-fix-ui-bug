import React, { PropsWithChildren, useState } from 'react';

import { UiSnackbar } from '@/shared/ui';
import { notificationToastContext } from '@/shared/lib/notification-toast/context';
import { NotificationToastParams } from '@/shared/lib/notification-toast/types';

export function NotificationToastProvider({ children }: PropsWithChildren) {
  const [notificationParams, setNotificationParams] =
    useState<NotificationToastParams>();

  const getNotificationToast = (params: NotificationToastParams) => {
    setNotificationParams({
      ...params,
      onDismiss: () => {
        params?.onDismiss?.();
        setNotificationParams(undefined);
      },
      onAction: () => {
        params?.onAction?.();
        setNotificationParams(undefined);
      },
    });
  };

  return (
    <notificationToastContext.Provider value={getNotificationToast}>
      {children}
      {notificationParams && <UiSnackbar params={notificationParams} />}
    </notificationToastContext.Provider>
  );
}
