import { RotatingLines } from 'react-loader-spinner';

import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <RotatingLines strokeColor="gray" />
    </Container>
  );
};

export default Loader;
