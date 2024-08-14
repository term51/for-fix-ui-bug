import { useStrictContext } from '@/shared/lib/react.ts';
import { confirmationContext } from '@/shared/lib/confirmation-dialog/context.ts';

export const useConfirmationDialog = () => {
  return useStrictContext(confirmationContext);
};
