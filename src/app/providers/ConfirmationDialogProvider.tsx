import React, { PropsWithChildren, useState } from 'react';

import { UiDialog } from '@/shared/ui';
import { ConfirmationParams } from '@/shared/lib/confirmation-dialog/types';
import { confirmationContext } from '@/shared/lib/confirmation-dialog/context';

export function ConfirmationDialogProvider({ children }: PropsWithChildren) {
  const [dialogParams, setDialogParams] = useState<ConfirmationParams>();

  const getConfirmationDialog = (params?: ConfirmationParams) => {
    return new Promise<boolean>(res => {
      setDialogParams({
        ...params,
        onClose: () => {
          params?.onClose?.();
          setDialogParams(undefined);
          res(false);
        },
        onConfirm: () => {
          params?.onConfirm?.();
          setDialogParams(undefined);
          res(true);
        },
      });
    });
  };

  return (
    <confirmationContext.Provider value={getConfirmationDialog}>
      {children}
      {dialogParams && <UiDialog params={dialogParams} />}
    </confirmationContext.Provider>
  );
}
