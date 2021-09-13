import { SCREENS } from 'constant';
import { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const AboutUsContainer = styled.div`
  ${tw`
  w-full
  flex
  flex-col
  lg:flex-row
  items-center
  justify-center
  pt-4
  pb-4
  pl-7
  pr-7
  md:pl-0
  md:pr-0
  bg-white
`}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-3/4
    lg:w-1/2
    flex
    flex-col
    md:ml-4
    2xl:ml-16
    lg:mr-4
`}
`;

const Title = styled.h1`
  ${tw`
  text-black
  text-2xl
  md:text-3xl
  font-extrabold
  md:font-black
  md:leading-normal
`}
`;

const Description = styled.p`
  ${tw`
  text-gray-500
  text-sm
  md:text-base
  max-w-3xl
  mt-4
  font-normal
`}
`;

export const AboutUs = (): ReactElement => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src="/assets/images/jeep.png" alt="Jeep image" />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <Description>
          Looking for unbeatable deals on a car rental? Rent a Hot Rate Car with
          Hotwire and you'll save up to 60%* on your rental car reservation. We
          work with top brand-name rental agencies to help you find the car
          rental for your trip with a variety of car sizes and convenient
          pick-up and drop-off locations at the airport and in town. From
          dedicated customer service, to less expensive insurance and cheap car
          rentals, Hotwire makes car rentals easy. Need to rent a car with lower
          fuel costs? Hotwire offers Hot Rate economy car rentals for as low as
          $11.99 per day†. Round trip or one-way, luxury or cheap car rentals,
          Hotwire has your ride..
        </Description>
      </InfoContainer>
    </AboutUsContainer>
  );
};
