// Reexport the native module. On web, it will be resolved to TapeworkAudioInterfaceModule.web.ts
// and on native platforms to TapeworkAudioInterfaceModule.ts
export { default } from './TapeworkAudioInterfaceModule';
export { default as TapeworkAudioInterfaceView } from './TapeworkAudioInterfaceView';
export * from  './TapeworkAudioInterface.types';
