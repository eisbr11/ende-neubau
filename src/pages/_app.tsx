import { storyblokInit, apiPlugin } from '@storyblok/react';
import Config from '@/lib/Config';
import App from 'next/app';

storyblokInit({
  accessToken: Config.storyblok_api_key,
  use: [apiPlugin],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyApp extends App {

}

export default App;
