import { StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

import { SafeAreaView, Text } from '../components/Themed';

export default function Start() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to the Dome</Text>

      <Link href="main/fight" style={styles.link} asChild>
        <Button title="Enter" />
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 30,
    fontSize: 20
  },
  link: {
    marginTop: 16,
    paddingVertical: 16,
  },
});
