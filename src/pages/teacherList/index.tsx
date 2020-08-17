import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


// Services
import api from '../../services/api';

// Style
import styles from './styles';

// Icons
import { Feather } from '@expo/vector-icons';

// Components
import PageHeader from '../../components/PageHeaders';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import style from '../../components/TeacherItem/styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {

  const [favourites, setFavourites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  function loadFavourites() {
    AsyncStorage.getItem('favourites').then(response => {
      if(response) {   
        const favouritedTeachers =  JSON.parse(response);
        const favouritedTeachersId = favouritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });
  
        setFavourites(favouritedTeachersId);
      }
    });    
  }

  useFocusEffect(()=>{
    loadFavourites();
  });

  function handleToogleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavourites();
    
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });    

    setIsFiltersVisible(false);
    setTeachers(response.data);
    
  }

  return (
    <>
      <View style={styles.container}>
        <PageHeader
          title="Proffys disponíveis"
          headerRight={(
            <BorderlessButton onPress={handleToogleFiltersVisible}>
              <Feather name="filter" size={20} color="#FFF" />
            </BorderlessButton>
          )}>
          {isFiltersVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput
                placeholderTextColor="#C1BCCC"
                style={styles.input}
                placeholder="Qual a matéria?"
                value={subject}
                onChangeText={text => setSubject(text)}
              />
              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da Semana</Text>
                  <TextInput
                    placeholderTextColor="#C1BCCC"
                    style={styles.input}
                    placeholder="Qual o dia?"
                    value={week_day}
                    onChangeText={text => setWeek_day(text)}
                  />
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    placeholderTextColor="#C1BCCC"
                    style={styles.input}
                    placeholder="Qual hora?"
                    value={time}
                    onChangeText={text => setTime(text)}
                  />
                </View>
              </View>

              <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>

            </View>
          )}
        </PageHeader>
      </View>
      <View style={{ flex: 1, height: 100 }}>
        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
        >

          {teachers.map( (teacher: Teacher ) => {
            return (
              <TeacherItem
                key={teacher.id}
                teacher={teacher}
                favourited={favourites.includes(teacher.id)}
              />
            );
          })}
          
        </ScrollView>
      </View>
    </>
  );
};

export default TeacherList;
