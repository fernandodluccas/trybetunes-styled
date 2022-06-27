import React from 'react';
import { ClipLoader } from 'react-spinners';
import Container from './styles';

export default function Loading() {
  return (
    <Container>
      <ClipLoader color="#e33b6d" />
    </Container>
  );
}
