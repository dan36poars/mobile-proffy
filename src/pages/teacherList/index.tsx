import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

// Style
import styles from './styles';

// Icons
import { Feather } from '@expo/vector-icons';

// Components
import PageHeader from '../../components/PageHeaders';
import TeacherItem from '../../components/TeacherItem';
import style from '../../components/TeacherItem/styles';

function TeacherList() {

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function handleToogleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
    <>
      <View style={styles.container}>
        <PageHeader 
          title="Proffys disponíveis" 
          headerRight={ (
            <BorderlessButton onPress={handleToogleFiltersVisible}>
              <Feather name="filter" size={20} color="#FFF" />
            </BorderlessButton>
          ) }>
          {isFiltersVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput
                placeholderTextColor="#C1BCCC"
                style={styles.input}
                placeholder="Qual a matéria?"
              />
              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da Semana</Text>
                  <TextInput
                    placeholderTextColor="#C1BCCC"
                    style={styles.input}
                    placeholder="Qual o dia?"
                  />
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    placeholderTextColor="#C1BCCC"
                    style={styles.input}
                    placeholder="Qual hora?"
                  />
                </View>
              </View>

              <RectButton style={styles.submitButton}>
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
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </ScrollView>
      </View>
    </>
  );
};

export default TeacherList;
