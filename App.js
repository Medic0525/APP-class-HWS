import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, Platform } from 'react-native';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
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
        <Text style = {[styles.h1, styles.sectionTitle]}>Popular Books</Text>
        <View style = {styles.bookgroup}>
          <ScrollView horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle = {styles.scrollGroup}>

            {/*Book 1*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_fashinopolis.png")} style = {styles.bookpage}/>
              <Text style = {[styles.h2, {marginTop: 16}]}>Fashionopolis</Text>
              <Text style = {[styles.p1, {marginTop: 8}]}>Dana Thomas</Text>
            </View>

            {/*Book 2*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_chanel.png")} style = {styles.bookpage}/>
              <Text style = {[styles.h2, {marginTop: 16}]}>Chanel</Text>
              <Text style = {[styles.p1, {marginTop: 8}]}>Patrick Mauriès</Text>
            </View>

            {/*Book 3*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_calligraphy.png")} style = {styles.bookpage}/>
              <Text style = {[styles.h2, {marginTop: 16}]}>Calligraphy</Text>
              <Text style = {[styles.p1, {marginTop: 8}]}>June & Lucy</Text>
            </View>

          </ScrollView>
        </View>

        {/*newest book*/}
        <Text style = {[styles.h1, styles.sectionTitle]}>Newest</Text>
        <View style = {styles.bookgroup}>

          <ScrollView horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle = {styles.scrollGroup}>

            {/*Book 1*/}
            <TouchableOpacity style = {styles.bookcard} onPress = {() => navigation.navigate("Details")}>
              <Image source = {require("./assets/img_book_ysl.png")} style = {styles.bookpage}/>
              <View style = {styles.rating}>
                {[1,2,3,4,5].map(x => (<Image key = {x} source = {x <= 4 ? require("./assets/icon_star_filled.png") : require("./assets/icon_star_empty.png")}/>))}
              </View>
              <Text style = {[styles.h2, {marginTop: 8}]}>Yves Saint Laurent</Text>
              <Text style = {[styles.p1, {marginTop: 8}]}>Dana Thomas</Text>
            </TouchableOpacity>

            {/*Book 2*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_tbos.png")} style = {styles.bookpage}/>
              <View style = {styles.rating}>
                {[1,2,3,4,5].map(x => (<Image key = {x} source = {x <= 3 ? require("./assets/icon_star_filled.png") : require("./assets/icon_star_empty.png")}/>))}
              </View>
              <Text style = {[styles.h2, {marginTop: 8}]}>The Book of Signs</Text>
              <Text style = {[styles.p1, {marginTop: 8}]}>Patrick Mauriès</Text>
            </View>

            {/*Book 3*/}
            <View style = {styles.bookcard}>
              <Image source = {require("./assets/img_book_stitchedup.png")} style = {styles.bookpage}/>
              <View style = {styles.rating}>
                {[1,2,3,4,5].map(x => (<Image key = {x} source = {x <= 3 ? require("./assets/icon_star_filled.png") : require("./assets/icon_star_empty.png")}/>))}
              </View>
              <Text style = {[styles.h2, {marginTop: 8}]}>Stitched Up</Text>
              <Text style = {[styles.p1, {marginTop: 8}]}>June & Lucy</Text>
            </View>

          </ScrollView>
        </View>

      </ScrollView>

      {/*nav bar*/}
      <View style = {styles.nav}>

        {/*home*/}
        <TouchableOpacity style = {styles.navItem} onPress={() => setActiveTab("home")}>
          <Image style = {styles.navIcon} source = {activeTab === "home" ? require("./assets/icon_home_actived.png") : require("./assets/icon_home.png")}/>
          <Text style={[styles.navText, activeTab === "home" && styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
      
        {/*wishlist*/}
        <TouchableOpacity style = {styles.navItem} onPress={() => setActiveTab("wishlist")}>
          <Image style = {styles.navIcon} source = {activeTab === "wishlist" ? require("./assets/icon_nav_bookmark_actived.png") : require("./assets/icon_nav_bookmark.png")}/>
          <Text style={[styles.navText, activeTab === "wishlist" && styles.navTextActive]}>Wishlist</Text>
        </TouchableOpacity>

        {/*mybook*/}
        <TouchableOpacity style = {styles.navItem} onPress={() => setActiveTab("mybook")}>
          <Image style = {styles.navIcon} source = {activeTab === "mybook" ? require("./assets/icon_mybook_actived.png") : require("./assets/icon_mybook.png")}/>
          <Text style={[styles.navText, activeTab === "mybook" && styles.navTextActive]}>My books</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

function DetailsScreen({navigation}){
  const [activeTab, setActiveTab] = useState("home")
  const [bookMarked, setBookMarked] = useState(false)
  return(
    <SafeAreaView style = {[styles.infoContainer, {flex: 1}]}>
      <StatusBar barStyle = 'dark-content'/>
      
      {/*header*/}
      <View style = {styles.header}>
        <TouchableOpacity onPress = {() => navigation.goBack()}>
          <Image source = {require("./assets/icon_back.png")} style = {styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => setBookMarked(!bookMarked)}>
          <Image source = {bookMarked ? require("./assets/icon_bookmark_actived.png") : require("./assets/icon_bookmark.png")} style = {styles.icon}/>
        </TouchableOpacity>
      </View>

      {/*main area*/}
      <View>
        
        <View style = {styles.bigPic}>
          <Image source = {require("./assets/img_book_ysl.png")} style = {{ width: 210, height: 300}}/>
        </View>

        <View style = {styles.bookInfo}>
          <Text style = {[styles.h1, {textAlign: "center"}]}>Yves Saint Laurent</Text>
          <Text style = {[styles.p1, {textAlign: "center", color: GlobalStyles.colors.gray, marginTop: 8}]}>Suzy Menkes </Text>
          <View style = {styles.infoRating}>
             <View style = {styles.InfoRatingStar}>
                {[1,2,3,4,5].map(x => (<Image style = {styles.infoStar} key = {x} source = {x <= 4 ? require("./assets/icon_star_filled.png") : require("./assets/icon_star_empty.png")}/>))}
              </View>
            <Text style = {[styles.p2, {marginLeft: 8}]}>4.0 / 5.0</Text>
          </View>
        </View>

        <View style = {styles.infoDesc}>
          <Text style = {[styles.p1, {textAlign: "center", MarginTop: 16}]}>A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.</Text>
        </View>

      </View>

      <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>BUY NOW FOR $46.99</Text>
      </TouchableOpacity>

      {/*nav bar*/}
      <View style = {styles.nav}>

        {/*home*/}
        <TouchableOpacity style = {styles.navItem} onPress={() => setActiveTab("home")}>
          <Image style = {styles.navIcon} source = {activeTab === "home" ? require("./assets/icon_home_actived.png") : require("./assets/icon_home.png")}/>
          <Text style={[styles.navText, activeTab === "home" && styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
      
        {/*wishlist*/}
        <TouchableOpacity style = {styles.navItem} onPress={() => setActiveTab("wishlist")}>
          <Image style = {styles.navIcon} source = {activeTab === "wishlist" ? require("./assets/icon_nav_bookmark_actived.png") : require("./assets/icon_nav_bookmark.png")}/>
          <Text style={[styles.navText, activeTab === "wishlist" && styles.navTextActive]}>Wishlist</Text>
        </TouchableOpacity>

        {/*mybook*/}
        <TouchableOpacity style = {styles.navItem} onPress={() => setActiveTab("mybook")}>
          <Image style = {styles.navIcon} source = {activeTab === "mybook" ? require("./assets/icon_mybook_actived.png") : require("./assets/icon_mybook.png")}/>
          <Text style={[styles.navText, activeTab === "mybook" && styles.navTextActive]}>My books</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}




export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
    weightH: 500,
    weightP: 400,
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
    fontWeight: GlobalStyles.fonts.weightH
  },

  h2:{
    fontSize: GlobalStyles.fonts.sizeh2,
    fontFamily: GlobalStyles.fonts.family,
    fontWeight: GlobalStyles.fonts.weightH
  },

  p1:{
    fontSize: GlobalStyles.fonts.sizep1,
    fontFamily: GlobalStyles.fonts.family,
    fontWeight: GlobalStyles.fonts.weightP
  },

  p2:{
    fontSize: GlobalStyles.fonts.sizep2,
    fontFamily: GlobalStyles.fonts.family,
    fontWeight: GlobalStyles.fonts.weightP
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 32,
    height: 56
  },

  icon:{
    margin: 8
  },

  sectionTitle: {
    paddingVertical: GlobalStyles.spacing.vertical,
    marginLeft: 20,
    marginTop: 8
  },

  scrollGroup: {
    paddingHorizontal: 20
  },

  bookcard: {
    marginRight: 16
  },



  rating: {
    flexDirection: "row",
    marginTop: 16
  },

  nav: {
    flexDirection: "row",
    height: 56,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 42,
  },
  
  navItem: {
    alignItems: 'center', 
    justifyContent: 'center',
  },

  navTextActive:{
    color: GlobalStyles.colors.purple
  },
  infoContainer: {
    backgroundColor: '#fff'
  },

  bigPic: {
    marginTop: 24,
    marginBottom: 24,
    alignItems: 'center'
  },

  infoBookCover: {
    width: 210, 
    height: 300, 
    borderRadius: 8,
  },

  bookInfo: {
    alignItems: 'center', 
  },

  infoTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center', 
  },

  infoAuthor: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },

  infoStar: {
    width: 14,
    height: 14,
    marginHorizontal: 1,
  },

  infoRating: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 12,
  },

  InfoRatingStar: {
    flexDirection: "row",
    alignItems: 'center', 
  },


  ratingTotal: {
    color: '#BBB',
  },

  infoDesc: {
    paddingHorizontal: 40,
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 22,
    color: '#333',
  },

  buyButton: {
    backgroundColor: GlobalStyles.colors.purple,
    width: 190, 
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 30,
    alignSelf: 'center', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  buyButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
