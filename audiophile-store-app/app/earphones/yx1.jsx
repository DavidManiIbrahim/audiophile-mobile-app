import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import About from '../components/About';
import Footer from '../components/Footer';


const { width } = Dimensions.get('window');

const products = [
  {
    id: 'xx99-mark-ii',
    title: 'XX99 MARK II HEADPHONES',
    description: 'The new XX99 Mark II headphones are the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    // image: require('./assets/xx99-mark-ii.png'), 
  },
  {
    id: 'xx99-mark-i',
    title: 'XX99 MARK I HEADPHONES',
    description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate sound reproduction for audiophiles, mixing engineers, and music enthusiasts alike.',
    // image: require('./assets/xx99-mark-i.png'), 
  },
  {
    id: 'xx59',
    title: 'XX59 HEADPHONES',
    description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable design makes them a perfect companion at home or on the go.',
    // image: require('./assets/xx59.png'), 
  },
];

const categories = [
  { id: 'headphones', title: 'HEADPHONES',
    // image: require('./assets/category-headphones.png')
     },
  { id: 'speakers', title: 'SPEAKERS',
    //  image: require('./assets/category-speakers.png')
     },
  { id: 'earphones', title: 'EARPHONES',
    //  image: require('./assets/category-earphones.png')
     },
];

export default function HeadphonesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
     
     <Navbar />
     
      <Text style={styles.pageTitle}>HEADPHONES</Text>

      {/* Product Sections */}
      {products.map((product, index) => (
        <View key={product.id} style={styles.productSection}>
          <Image source={product.image} style={styles.productImage} resizeMode="contain" />
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>SEE PRODUCT</Text>
          </TouchableOpacity>
        </View>
      ))}
bankai
      {/* Categories */}
     <Category />

      {/* Info Section */}
     <About />

      {/* Footer */}
   <Footer />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginVertical: 20,
    textAlign: 'center',
  },
  productSection: {
    paddingHorizontal: 24,
    marginBottom: 40,
    alignItems: 'center',
  },
  productImage: {
    width: width * 0.8,
    height: 200,
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#7D7D7D',
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  ctaButton: {
    backgroundColor: '#D87D4A',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 4,
  },
  ctaButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 1,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  categoryCard: {
    alignItems: 'center',
    width: width / 3 - 30,
  },
  categoryImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  categoryTitle: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 6,
  },
  categoryShop: {
    fontWeight: '700',
    fontSize: 12,
    color: '#7D7D7D',
  },
  infoSection: {
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  infoHeading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#7D7D7D',
    lineHeight: 20,
  },
  infoImage: {
    width: '100%',
    height: 200,
    marginTop: 24,
    borderRadius: 10,
  },
  footer: {
    backgroundColor: '#000',
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  footerLogo: {
    fontWeight: '700',
    fontSize: 24,
    color: '#fff',
    marginBottom: 24,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  footerLink: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  footerDescription: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 24,
  },
  footerCopyright: {
    color: '#fff',
    fontSize: 10,
  },
});
