import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.polydelic.test',
  appName: 'test-app',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: "http://localhost:5173/"
  }
};

export default config;
