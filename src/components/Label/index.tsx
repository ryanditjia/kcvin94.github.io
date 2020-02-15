import React, { useState } from 'react';
import { LabelStyle } from './style';

interface Props {
  children: React.Node;
}

export default function Label({ children }: Props) {
  return <div css={LabelStyle}>{children}</div>;
}
