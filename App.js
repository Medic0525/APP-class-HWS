import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {

  const [activeTab, setActiveTab] = useState("home")

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle = 'dark-content'/>
      
      {/*header*/}
      <View style = {styles.header}>
        <Image source = {require("./assets/icon_menu.png")} style = {styles.icon}/>
        <Image source = {require("./assets/icon_search.png")} style = {styles.icon}/>
      </View>

      {/*main area*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/*popular book*/}
        <View style = {styles.bookgroup}>
          <Text style = {styles.h1}>Popular Books</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator = {false}>

            {/*Book 1*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_fashinopolis.png")} style = {styles.bookpage}/>
              <Text style = {styles.h2}>Fashionopolis</Text>
              <Text style = {styles.p1}>Dana Thomas</Text>
            </View>

            {/*Book 2*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_chanel.png")} style = {styles.bookpage}/>
              <Text style = {styles.h2}>Chanel</Text>
              <Text style = {styles.p1}>Patrick Mauriès</Text>
            </View>

            {/*Book 3*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_calligraphy.png")} style = {styles.bookpage}/>
              <Text style = {styles.h2}>Calligraphy</Text>
              <Text style = {styles.p1}>June & Lucy</Text>
            </View>

          </ScrollView>
        </View>

        {/*newest book*/}
        <View style = {styles.bookgroup}>
          <Text style = {styles.h1}>Newest</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator = {false}>

            {/*Book 1*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_ysl.png")} style = {styles.bookpage}/>
              <View style = {styles.rating}>
                {[1,2,3,4,5].map(x => (<Image key = {x} source = {x <= 4 ? require("./assets/icon_star_filled.png") : require("./assets/icon_star_empty.png")}/>))}
              </View>
              <Text style = {styles.h2}>Yves Saint Laurent</Text>
              <Text style = {styles.p1}>Dana Thomas</Text>
            </View>

            {/*Book 2*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_tbos.png")} style = {styles.bookpage}/>
              <View style = {styles.rating}>
                {[1,2,3,4,5].map(x => (<Image key = {x} source = {x <= 3 ? require("./assets/icon_star_filled.png") : require("./assets/icon_star_empty.png")}/>))}
              </View>
              <Text style = {styles.h2}>The Book of Signs</Text>
              <Text style = {styles.p1}>Patrick Mauriès</Text>
            </View>

            {/*Book 3*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_stitchedup.png")} style = {styles.bookpage}/>
              <View style = {styles.rating}>
                {[1,2,3,4,5].map(x => (<Image key = {x} source = {x <= 3 ? require("./assets/icon_star_filled.png") : require("./assets/icon_star_empty.png")}/>))}
              </View>
              <Text style = {styles.h2}>Stitched Up</Text>
              <Text style = {styles.p1}>June & Lucy</Text>
            </View>

          </ScrollView>
        </View>

      </ScrollView>

      {/*nav bar*/}
      <View style = {styles.nav}>

        {/*home*/}
        <TouchableOpacity onPress={() => setActiveTab("home")}>
          <Image source = {activeTab === "home" ? require("./assets/icon_home.png") : require("./assets/icon_home_actived.png")}/>
        </TouchableOpacity>
      
        {/*wishlist*/}
        <TouchableOpacity onPress={() => setActiveTab("wishlist")}>
          <Image source = {activeTab === "home" ? require("./assets/icon_nav_bookmark.png") : require("./assets/icon_nav_bookmark_actived.png")}/>
        </TouchableOpacity>

        {/*mybook*/}
        <TouchableOpacity onPress={() => setActiveTab("mybook")}>
          <Image source = {activeTab === "home" ? require("./assets/icon_mybook.png") : require("./assets/icon_mybook_actived.png")}/>
        </TouchableOpacity>
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
    weighth: 500,
    weightp: 400,
    sizeh1: 24,
    sizeh2: 16,
    sizep1: 14,
    sizep2: 12
  }
};

const styles = StyleSheet.create({
  h1:{
    fontSize: GlobalStyles.fonts.sizeh1,
    fontFamily: GlobalStyles.fonts.family,
    fontWeight: GlobalStyles.fonts.weighth
  },

  h2:{
    fontSize: GlobalStyles.fonts.sizeh2,
    fontFamily: GlobalStyles.fonts.family,
    fontweight: GlobalStyles.fonts.weighth
  },

  p1:{
    fontSize: GlobalStyles.fonts.sizep1,
    fontFamily: GlobalStyles.fonts.family,
    fontWeight: GlobalStyles.fonts.weightp
  },

  p2:{
    fontSize: GlobalStyles.fonts.sizep2,
    fontFamily: GlobalStyles.fonts.family,
    fontweight: GlobalStyles.fonts.sizep2
  },

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
