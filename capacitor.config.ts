import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
    appId: 'com.polydelic.test',
    appName: 'test-app',
    webDir: 'dist',
    bundledWebRuntime: false,
    server: {
        // url: 'http://localhost:5173/',
        // url: 'http://10.0.2.2:5173', // Android
        url: 'http://192.168.50.38:5173/',
        cleartext: true,
    },
}

export default config
