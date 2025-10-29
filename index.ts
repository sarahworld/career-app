// if (typeof globalThis.require === 'undefined') {
//     // @ts-ignore - we intentionally expose a runtime shim for libs that expect global.require
//     (globalThis as any).require = (moduleName: string) => {
//         // Use eval('require') to avoid bundler/static-analysis issues
//         // Metro/React Native provides a module-scoped `require` function at runtime.
//         // eslint-disable-next-line no-eval
//         return eval('require')(moduleName);
//     };
// }
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
