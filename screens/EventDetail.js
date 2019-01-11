import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { hidden } from "ansi-colors";

class LogoTitle extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "flex-start"
        }}
      >
        <Image
          source={require("../assets/images/back.png")}
          style={{ alignSelf: "center", marginLeft: 16 }}
        />
        <Text
          style={{
            backgroundColor: "#fff",
            textAlign: "center",
            fontSize: 24,
            flex: 1,
            fontFamily: "roboto-regular"
          }}
        >
          Event Detail
        </Text>
        <Image
          source={require("../assets/images/favorite.png")}
          style={{ alignSelf: "center", marginRight: 16 }}
        />
      </View>
    );
  }
}
export default class EventDetail extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />
  };
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    };
  }

  find_dimesions(layout) {
    const { x, y, width, height } = layout;
    const state = this.state;
    state.height = height;
    state.width = width;
    this.setState(state);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
      {/* BANNER */}
        <View
          style={styles.banner}
          onLayout={event => {
            this.find_dimesions(event.nativeEvent.layout);
          }}
        >
          <Image
            source={require("../assets/images/detail2x3.png")}
            style={{
              flex: 1,
              resizeMode: "cover"
            }}
          />
        </View>

        {/* Information */}
        <View
          style={{
            borderRadius: 10,
            position: "relative",
            top: (-this.state.height * 1) / 3,
            left: 16,
            width: this.state.width - 32,
            flexDirection: "column",
            zIndex: 1,
            backgroundColor: "white",
            borderColor: "#979797"
          }}
        >
          <View style={{flexDirection:'row', position:'relative'}}>
              <Text style={styles.title}>2nd Annual VR Hackathon</Text>
              <Text style={{
                    borderRadius:20,
                    backgroundColor:'#2196F3', 
                    fontSize:10, 
                    fontFamily:'roboto-bold',
                    color:'#FFFFFF', 
                    marginTop:16,
                    height:14
                    }}>  FREE  </Text>
          </View>           
          

          <View style={{marginTop: 16,}}>
            <View style={styles.inforLayout}>
              <Image
                source={require("../assets/images/clock.png")}
                style={{
                  marginLeft: 16,
                  alignSelf: "center",
                  resizeMode: "cover"
                }}
              />
              <Text style={styles.infor}>12 January, 2019 | 12:00am</Text>
            </View>
            <View style={styles.inforLayout}>
              <Image
                source={require("../assets/images/address.png")}
                style={{
                  marginLeft: 16,
                  alignSelf: "center",
                  resizeMode: "cover"
                }}
              />
              <Text style={styles.infor}>13 Tan Tao, District 7, Ho Chi Minh</Text>
            </View>
            <View style={styles.inforLayout}>
              <Image
                source={require("../assets/images/medal.png")}
                style={{
                  marginLeft: 16,
                  alignSelf: "center",
                  resizeMode: "cover"
                }}
              />
              <Text style={styles.infor}>1st Prize 7000$</Text>
            </View>


            <View style={styles.tagLayout}>
              <Text style={styles.tag}>   Virtual tour   </Text>
              <Text style={styles.tag}>   AI   </Text>
              <Text style={styles.tag}>   Art   </Text>

                  {/* Join */}
              <Text style={{
                borderRadius:7,
                backgroundColor:'#2196F3', 
                fontSize:16, 
                fontFamily:'roboto-medium',
                textAlign:'center',
                color:'#FFFFFF', 
                position:'absolute',
                top:0,
                right:16,
                }}>  Join now  </Text>
            </View>

            <View style={{
              marginLeft: 16,
              flexDirection: 'row',
              }}>
                <Image
                  source={require("../assets/images/people(1).png")}
                  style={{
                    resizeMode: "cover"
                  }}
                />
                <Image
                  source={require("../assets/images/people(2).png")}
                  style={{
                    resizeMode: "cover"
                  }}
                />
                <Image
                  source={require("../assets/images/people(3).png")}
                  style={{
                    resizeMode: "cover"
                  }}
                />
                <Text style={styles.going}>+ 42 Going</Text>
            </View>
            <View style={{backgroundColor:'rgba(92, 92, 92, 0.23)',
                          width:this.state.width-64, 
                          height:1, 
                          alignSelf:'center',
                          marginTop:6}}/>
          </View>
          
          {/* Description*/}
          <View style={{ marginLeft: 16, marginTop: 16 }}>
            <Text style={{
              fontFamily: "roboto-medium",
              fontSize: 14,
              opacity: 0.83,
            }}>Description</Text>

            <Text style={{
              marginTop:8,
              marginRight:16,
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>2019 Hackathon Puts Focus On Mental Health + Wellness
            2-day Technology-Driven Behavioral Design Summit Hackathon
            NewPathVR is producing a VR Wellness Hackathon in January 2019 in San Francisco. NewPathVR is convening a group of interested developers 
            <Text style={{
              marginTop:8,
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'#2196F3',    
            }}> see more</Text>
            </Text>
          </View>
          
          
          {/* {Mentor} */}
          <View style={{ marginLeft: 16, marginTop: 16 }}>
            <Text style={{
                fontFamily: "roboto-medium",
                fontSize: 14,
                opacity: 0.83,
              }}>Mentors</Text>
            {/* picture mentor */}
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Image
                source={require("../assets/images/mentor(3).png")}
                style={{
                  resizeMode: "cover", marginRight: 8,
                }}
              />
              <Image
                source={require("../assets/images/mentor(1).png")}
                style={{
                  resizeMode: "cover", marginRight: 8,
                }}
              />
              <Image
                source={require("../assets/images/mentor(2).png")}
                style={{
                  resizeMode: "cover", marginRight: 8,
                }}
              />
            </View>
          </View>

          {/* Agenda*/}
          <View style={{ marginLeft: 16, marginTop: 16, marginRight:16, }}>
            <Text style={{
              fontFamily: "roboto-medium",
              fontSize: 14,
              opacity: 0.83,
            }}>Agenda</Text>

            <Text style={{
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>08:00 | Doors open, check-in, coffee and breakfast is served
            </Text>
            <Text style={{
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>08:30 | Introduction and overview 
            </Text>
            <Text style={{
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>08:50 | Team registration
            </Text>
            <Text style={{
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>09:00 | Start hacking!
            </Text>
            <Text style={{
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>12:00 | Lunch
            </Text>
            <Text style={{
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>17:00 | Submit your project
            </Text>
            <Text style={{
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>17:00 | Supper
            </Text>
            <Text style={{
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>18:00 | Demo presentations
            </Text>
            <Text style={{
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>19:00 | Judging and winners announced
            </Text>
            <Text style={{
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'rgba(92, 92, 92, 0.6)'
            }}>19:00 | Wrap-up and socializing
            </Text>
          </View>
          

          {/* More */}
          <View style={{ marginLeft: 16, marginTop: 16, marginBottom:16 }}>
          <Text style={{
              marginTop:8,
              fontFamily: "roboto-regular",
              fontSize: 14,
              color:'#2196F3',    
            }}>View full information</Text>
          </View>
        </View>
       
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  banner: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start"
  },
  title: {
    fontFamily: "roboto-bold",
    fontSize: 20,
    marginLeft: 16,
    marginTop: 16,
    color: "#000000",
    opacity: 0.7
  },
  infor: {
    fontFamily: "roboto-regular",
    fontSize: 14,
    marginLeft: 16,
    color: "#5C5C5C",
    opacity: 0.83,
    textAlign: "center",
    alignSelf: "center"
  },
  inforLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",    
    height: 28
  },
  tag:{
    fontFamily: "roboto-regular",
    fontSize: 10,
    color: "#FFFFFF",
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "rgba(33, 150, 243, 0.71)",
    borderRadius:10,
    marginRight:10,
  },
  tagLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",    
    height: 28,
    marginLeft:17,
    position:'relative'
  },
  going: {
    fontFamily: "roboto-regular",
    fontSize: 10,
    marginLeft: 6,
    color: "#5C5C5C",
    opacity: 0.83,
    textAlign: "center",
    alignSelf: "center"
  },
});
