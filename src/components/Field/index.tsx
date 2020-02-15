import React, { useState } from 'react';
import { FieldStyle } from './style';

interface Props {
  children: React.Node;
}

export default function Field({ children }: Props) {
  return <div css={FieldStyle}>{children}</div>;
}
