import { registerWebModule, NativeModule } from 'expo';

import { TapeworkAudioInterfaceModuleEvents } from './TapeworkAudioInterface.types';

class TapeworkAudioInterfaceModule extends NativeModule<TapeworkAudioInterfaceModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(TapeworkAudioInterfaceModule, 'TapeworkAudioInterfaceModule');
