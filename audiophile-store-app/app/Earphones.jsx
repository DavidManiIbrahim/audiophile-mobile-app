import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from './components/Navbar';

export default function EarphonesScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>EARPHONES</Text>

        <View style={styles.card}>
          <Text style={styles.productName}>YX1 EARPHONES</Text>
          <Text style={styles.productDescription}>
            Tailor-made earphones delivering impressive performance and clarity.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('ProductDetail', {
                productId: 'yx1',
                category: 'earphones',
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
  button: { borderWidth: 1, borderColor: '#000', paddingVertical: 12, paddingHorizontal: 20, alignSelf: 'flex-start' },
  buttonText: { color: '#000', fontWeight: '700' },
});
