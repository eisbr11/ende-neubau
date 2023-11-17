'use client';

import { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
