import { NativeModule, requireNativeModule } from 'expo';

import { TapeworkAudioInterfaceModuleEvents } from './TapeworkAudioInterface.types';

declare class TapeworkAudioInterfaceModule extends NativeModule<TapeworkAudioInterfaceModuleEvents> {
  PI: number;
  playAudioInSync(audioUris: string[]): Promise<void>;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<TapeworkAudioInterfaceModule>('TapeworkAudioInterface');
