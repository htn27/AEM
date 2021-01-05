import moment from 'moment';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {LocaleConfig, CalendarList} from 'react-native-calendars';
import {Caption, Title, Button, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const testIDs = require('./testIDs');

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
  today: "To'Day",
};
LocaleConfig.defaultLocale = 'fr';

export default function index({navigation}) {
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = React.useState(today);
  const [markedDates, setMarkedDates] = React.useState({});
  // const [selectedDay, setSelectedDay] = React.useState();

  const setNewDaySelected = (date) => {
    const markedDate = Object.assign({});
    markedDate[date] = {
      selected: true,
      selectedColor: '#f78983',
    };
    setSelectedDate(date);
    setMarkedDates(markedDate);

    // setSelectedDay(day);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.calendar}>
          <CalendarList
            testID={testIDs.horizontalList.CONTAINER}
            markedDates={markedDates}
            current={selectedDate}
            horizontal
            pagingEnabled
            onDayPress={(date) => {
              setNewDaySelected(date.dateString);
            }}
            hideExtraDays={false}
            pastScrollRange={24}
            futureScrollRange={24}
          />
          <View style={styles.calendar_note}>
            <Caption>({moment(selectedDate).format('LL')})</Caption>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  calendar: {
    flexDirection: 'column',
  },
  calendar_note: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
