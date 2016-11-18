import React from 'react';
import { Nag } from '@recipher/component';

export default ({ condition }) => {
  return (
    <Nag condition={condition}>
      <span>Please change your password before continuing.</span>
    </Nag>
  );
}