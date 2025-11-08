import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from './components/Navbar';

export default function SpeakersScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>SPEAKERS</Text>

        <View style={styles.card}>
          <Text style={styles.productName}>ZX9 SPEAKER</Text>
          <Text style={styles.productDescription}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('ProductDetail', {
                productId: 'zx9',
                category: 'speakers',
              })
            }
          >
            <Text style={styles.buttonText}>SEE PRODUCT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 24 },
  card: { backgroundColor: '#F1F1F1', padding: 20, borderRadius: 8 },
  productName: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  productDescription: { color: '#333', marginBottom: 16 },
  button: { backgroundColor: '#000', paddingVertical: 12, paddingHorizontal: 20, alignSelf: 'flex-start' },
  buttonText: { color: '#fff', fontWeight: '700' },
});
