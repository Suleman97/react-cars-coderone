import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Marginer } from 'components';
import { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { SCREENS } from 'constant';

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    mb-6
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9

  `}
`;

const ItemContainer = styled.div`
  ${tw`
  flex
  relative
  mr-2

`}
`;

const Icon = styled.div`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-2
  `}
`;

const SmallIcon = styled.span`
  ${tw`
  text-gray-700
  fill-current
  text-xs
  md:text-base
  ml-1
  `}
`;

const Name = styled.div`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    mt-1
    cursor-pointer
    select-none
  `}
`;

const LineSeperator = styled.div`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-3
    md:ml-3
  `}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;
  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};
  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

export const BookCard = (): ReactElement => {
  const [startDtae, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDtae, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };
  console.log(startDtae);

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDtae} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar
            offset
            value={returnDtae}
            onChange={setReturnDate as any}
          />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
};
