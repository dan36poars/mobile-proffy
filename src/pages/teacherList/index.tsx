import React from 'react';
import { View, Text } from 'react-native';

// Style
import styles from './styles';

// Components
import PageHeader from '../../components/PageHeaders';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import style from '../../components/TeacherItem/styles';

function TeacherList() {
  return (
    <>
      <View style={styles.container}>
        <PageHeader title="Proffys disponíveis">
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
          </View>
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
