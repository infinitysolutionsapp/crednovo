import React from 'react';
import {format} from 'date-fns';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

import {ContainerDate, TextDate} from './styles'

const Calendar: React.FC = ({date}) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const formattedDate = day + '/' + month +  '/' + year;
  return (
    <>
      <ContainerDate>
        <AntDesignIcon name="calendar" size={32} color="#000"/>
        <TextDate>{formattedDate}</TextDate>
      </ContainerDate>
    </>
  )
}

export default Calendar;