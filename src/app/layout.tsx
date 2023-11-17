import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Config from '@/lib/Config';
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';
import './globals.css';

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
  children: ReactNode;
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
