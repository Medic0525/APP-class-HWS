import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle = 'dark-content'/>
      <View style = {styles.header}>
        <Image source = "./assets/icon_menu.png" style = {styles.icon}/>
        <Image source = "./assets/icon_search.png" style = {styles.icon}/>
      </View>

    </SafeAreaView>
  );
}
const GlobalStyles = {
  spacing: {
    vertical: 16,    
    horizontal: 8,
  },
  colors: {
    purple: '#6200EE', 
    background: '#FFFFFF',
    gray: '#666666',
    black: '#131313',
  },
  fonts: {
    family: "Roboto",
    sizeh1: 24,
    sizeh2: 16,
    sizeb1: 14,
    sizeb2: 12
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: GlobalStyles.spacing.vertical,
    paddingHorizontal: GlobalStyles.spacing.horizontal,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  icon: {
    width: 24,
    height: 24,
    paddingVertical: 8,
    paddingHorizontal: 8,
    resizeMode: 'contain',
  }
});
