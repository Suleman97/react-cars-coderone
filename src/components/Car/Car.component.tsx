import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components';
import { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from 'typings/car';

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 16.5em;
  min-height: 22.2em;
  max-height: 25.2em;
  box-shadow: 0 1.3px 15px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `};
`;

const CarThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CarName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
`}
`;

const PricesContainer = styled.div`
  ${tw`
  w-full
  flex
  justify-center
  mt-3
`}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
  text-xs
  font-thin
`}
`;

const DailyPrices = styled.h4`
  ${tw`
  text-red-500
  font-bold
  text-sm
`}
`;
const MonthlyPrices = styled.h4`
  ${tw`
  text-gray-500
  font-bold
  text-sm
`}
`;

const SmallIcon = styled.span`
  ${tw`
  text-gray-400
  text-sm
  mr-1
`}
`;
const CarDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
`}
`;

const CarDetail = styled.span`
  ${tw`
    flex
    items-center
  `}
`;

const CarInfo = styled.h5`
  ${tw`
    text-gray-400
    text-xs
  `}
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

const RentButton = styled(Button)`
  ${tw`
  min-w-full
  mt-5
  `}
`;

export const Car = (props: ICarProps): ReactElement => {
  const {
    thumbnailSrc,
    name,
    mileage,
    gearType,
    gas,
    dailyPrice,
    monthlyPrice,
  } = props;

  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} alt="car name" />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrices>
          ${dailyPrice}
          <SmallText>/Day</SmallText>
        </DailyPrices>
        <MonthlyPrices>
          ${monthlyPrice}
          <SmallText>/Month</SmallText>
        </MonthlyPrices>
      </PricesContainer>
      <Seperator />
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text="Rent Now" />
    </CarContainer>
  );
};
