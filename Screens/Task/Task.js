import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {styles} from './Style/TaskStyle';
import {
  notificationImg,
  UserProfile,
  AddImg,
  profilePic,
} from '../../theme/Images';
import {Agenda, calendarTheme} from 'react-native-calendars';

export default function Task() {
  const [state, setState] = useState({
    items: {
      '2025-01-16': [
        {
          name: 'Meeting with client',
          time: '10:00 AM To 11:00 AM',
          task: 'Discuss project updates',
        },
      ],
      '2024-04-30': [
        {
          name: 'Team brainstorming session',
          time: '9:00 AM',
          task: 'Plan upcoming tasks',
        },
        {
          name: 'Project presentation',
          time: '2:00 PM',
          task: 'Present project progress',
        },
        {
          name: 'Project presentation',
          time: '5:00 PM',
          task: 'Review feedback',
        },
      ],
      '2024-05-15': [
        {
          name: 'Team brainstorming session',
          time: '9:00 AM',
          task: 'Discuss project strategies',
        },
        {
          name: 'Project presentation',
          time: '2:00 PM',
          task: 'Finalize project plan',
        },
      ],
      '2025-01-17': [
        {
          name: 'Team brainstorming session',
          time: '9:00 AM',
          task: 'Brainstorm new ideas',
        },
        {
          name: 'Project presentation',
          time: '2:00 PM',
          task: 'Review project milestones',
        },
      ],
    },
  });
  const {items} = state;
  const customTheme = {
    ...calendarTheme,
    agendaTodayColor: '#20bf55',
    agendaKnobColor: '#20bf55',
    selectedDayBackgroundColor: '#20bf55',
    dotColor: '#20bf55',
  };
  const renderEmptyData = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>No task for this day</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <SafeAreaView />
      <View style={styles.taskView}>
        <View>
          <Image source={profilePic} style={styles.userProfile} />
        </View>
        <View style={styles.details}>
          <Text style={styles.mesText}>Task List</Text>
          <Text style={styles.taskText}>Upcoming Task</Text>
        </View>
        <TouchableOpacity>
          <Image source={notificationImg} style={styles.notiImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.calenderView}>
        <View style={styles.mainCalenderView}>
          <Agenda
            items={items}
            theme={customTheme}
            showOnlySelectedDayItems={true}
            renderEmptyData={renderEmptyData}
            renderItem={item => (
              <View
                style={{
                  marginTop: 20,
                  marginVertical:10,
                  backgroundColor: 'white',
                  marginHorizontal: 10,
                  padding: 10,
                }}>
                <Text>{item.name}</Text>
                <Text>{item.time}</Text>
                <Text>{item.task}</Text>
              </View>
            )}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.stickyCircle}>
        <Image source={AddImg} style={styles.addImg}/>
      </TouchableOpacity>
    </View>
  );
}

