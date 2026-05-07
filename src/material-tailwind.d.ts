import * as React from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler<T>;
    onPointerLeaveCapture?: React.PointerEventHandler<T>;
    onResize?: React.ReactEventHandler<T>;
    onResizeCapture?: React.ReactEventHandler<T>;
  }
}
