import React, { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props): ReactElement {
  return (
    <div>
      <h3>Test Button</h3>
      <button>{children}</button>
    </div>
  );
}
