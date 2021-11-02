import * as React from 'react';

import styled from 'styled-components';
import { Layout } from '../components/Layout';

const Container = styled.div`
  height: 500px;
`;

export default () => (
  <Layout
    title="Contact"
  >
    <Container>
      contact us
    </Container>
  </Layout>
);
