'use client';

import { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import StyledComponentsRegistry from '@/lib/registry';

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <StyledComponentsRegistry>
      <NextUIProvider>{children}</NextUIProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
