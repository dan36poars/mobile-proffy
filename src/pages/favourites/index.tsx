import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// styles
import styles from './styles';

// Pages
import PageHeader from '../../components/PageHeaders';
import TeacherItem from '../../components/TeacherItem';

function Favourites() {
  return (
    <>
      <View style={styles.container}>
        <PageHeader title="Meus Proffys Favoritos" />
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
  )
}

export default Favourites
