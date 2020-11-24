import React from 'react';
import initNuml from '../helpers/init-numl';

export default function NudeProvider({ children }) {
  initNuml();

  return <nu-root padding="10x 2x" width="max 800px" space="around" gap="5x" flow="column">
    {children}
  </nu-root>;
}
