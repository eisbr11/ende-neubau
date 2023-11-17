import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Lilita_One } from 'next/font/google';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Config from '@/lib/Config';
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';
import Providers from './providers';
import './globals.css';
import { Background } from '@/components/Background/Background';

const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ende Neubau',
  // todo: add description
  description: '',
};

storyblokInit({
  accessToken: Config.storyblok_api_key,
  use: [apiPlugin],
  components: {
    feature: () => <>Feature</>,
  },
});

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={'dark'}>
      <body className={lilita.className}>
        <Providers>
          <Background />
          <div className={'z-10'}>{children}</div>
        </Providers>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
};

export default RootLayout;
