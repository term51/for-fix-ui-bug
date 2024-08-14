import React from 'react';

export type ScreenImportsLazyType<T extends string> = {
  [key in T]: () => Promise<{ default: React.ComponentType<any> }>;
};

export type ScreenImportsType<T extends string> = {
  [key in T]: React.ComponentType<any>;
};
