import React from 'react';
import { View, Text } from 'react-native';

// Style
import styles from './styles';

// Components
import PageHeader from '../../components/PageHeaders';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';
import style from '../../components/TeacherItem/styles';

function TeacherList() {
  return (
    <>
      <View style={styles.container}>
        <PageHeader title="Proffys disponíveis" />
      </View>
      <View style={{ flex: 1, height: 100 }}>
        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
        >
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </ScrollView>
      </View>
    </>
  );
};

export default TeacherList;
