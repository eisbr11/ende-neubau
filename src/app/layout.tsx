import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Config from '@/lib/Config';
import { FC, ReactElement } from 'react';
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';

const inter = Inter({ subsets: ['latin'] });

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
  children: ReactElement;
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    <StoryblokBridgeLoader options={{}} />
    </html>
  );
};

export default RootLayout;
