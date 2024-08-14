import { createStrictContext } from '@/shared/lib/react.ts';
import { ConfirmationContextType } from './types.ts';

export const confirmationContext =
  createStrictContext<ConfirmationContextType>();
