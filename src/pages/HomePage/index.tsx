import styled from 'styled-components';
import tw from 'twin.macro';
import { Marginer, Navbar } from 'components';
import { ReactElement } from 'react';
import { TopSection } from './Top.section';
import { BookCard, BookingSteps } from 'sections';

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
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <BookingSteps />
    </PageContainer>
  );
};
