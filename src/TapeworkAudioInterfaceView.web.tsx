import * as React from 'react';

import { TapeworkAudioInterfaceViewProps } from './TapeworkAudioInterface.types';

export default function TapeworkAudioInterfaceView(props: TapeworkAudioInterfaceViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
