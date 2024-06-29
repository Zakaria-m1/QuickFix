import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import globalStyles from '../../styles/global';
import CustomNavBar from '../common/NavBar';

const jobTypes = [
  'Rörmokare',
  'Elektriker',
  'IT-Support',
  'Flytttjänst',
  'Rådgivning',
  'Inredning',
  'Annat'
];

const RequestForm = ({ route }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [jobType, setJobType] = useState('');
  const [media, setMedia] = useState(null);

  useEffect(() => {
    if (route.params?.jobType) {
      setJobType(route.params.jobType);
    }
  }, [route.params?.jobType]);

  const handleMediaSelect = () => {
    launchImageLibrary({ mediaType: 'mixed' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setMedia(response.assets[0]);
      }
    });
  };

  const handleSubmit = () => {
    // Add validation and form submission logic
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <CustomNavBar title="Skapa en annons" />
      <View style={styles.contentContainer}>
        <Text style={globalStyles.title}>Vald tjänst: {jobType}</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Titel"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Beskrivning"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Pris (kr)"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Typ av jobb"
          value={jobType}
          onChangeText={setJobType}
          editable={false}
        />
        <TouchableOpacity style={styles.mediaButton} onPress={handleMediaSelect}>
          <Text style={styles.mediaButtonText}>Lägg till bild eller video</Text>
        </TouchableOpacity>
        {media && (
          <Image
            source={{ uri: media.uri }}
            style={styles.mediaPreview}
          />
        )}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Skicka</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  mediaButton: {
    backgroundColor: '#FFA500',  // Orange
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  mediaButtonText: {
    color: '#000',  // Black
    fontSize: 16,
  },
  mediaPreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: '#FFA500',  // Orange
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#000',  // Black
    fontSize: 16,
  },
});

export default RequestForm;
