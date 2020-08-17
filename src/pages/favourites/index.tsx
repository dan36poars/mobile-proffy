import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

// styles
import styles from './styles';

// Pages
import PageHeader from '../../components/PageHeaders';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function Favourites() {

  const [favourites, setFavourites] = useState([]);

  function loadFavourites() {
    AsyncStorage.getItem('favourites').then(response => {
      if (response) {
        const favouritedTeachers = JSON.parse(response);
        setFavourites(favouritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavourites();
  });

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
          {favourites.map((teacher: Teacher) => {
            return (
              <TeacherItem 
                key={teacher.id}
                teacher={teacher}
                favourited
              />
            );
          })}

        </ScrollView>
      </View>
    </>
  )
}

export default Favourites
