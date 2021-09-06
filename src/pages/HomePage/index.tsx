import styled from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from 'components';
import { ReactElement } from 'react';

const PageContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  h-full
  items-center
  overflow-x-hidden
`}
`;

export const HomePage = (): ReactElement => {
  return (
    <PageContainer>
      <Navbar />
    </PageContainer>
  );
};
