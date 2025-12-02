import { requireNativeView } from 'expo';
import * as React from 'react';

import { TapeworkAudioInterfaceViewProps } from './TapeworkAudioInterface.types';

const NativeView: React.ComponentType<TapeworkAudioInterfaceViewProps> =
  requireNativeView('TapeworkAudioInterface');

export default function TapeworkAudioInterfaceView(props: TapeworkAudioInterfaceViewProps) {
  return <NativeView {...props} />;
}
