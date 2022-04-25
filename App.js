import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


const Stack = createNativeStackNavigator();
function Multiplication({ navigation }) {
  return(
    <View style={styles.container}>
      <Text> Multiplication <br></br> Find the product of the numbers below. </Text>
      <br></br>
      <Text> 25 * 10 =</Text>
      <br></br>
      <Text>13 * 11 =</Text>
      <br></br>
      <Text> 4 * 4 * 2 =</Text>
      <br></br>
      <Button title="Answers" onPress={()=> navigation.navigate('Answers')} ></Button>
      <br></br>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
}
function Division({ navigation }) {
  return(
    <View style={styles.container}>
      <Text >Division <br></br> Find the quotient. </Text>
      <br></br>
      <Text> 250 / 10 =</Text>
      <br></br>
      <Text> 10% of 200 =</Text>
      <br></br>
      <Text> 500 / 2 =</Text>
      <br></br>
      <Button title="Answers" onPress={()=> navigation.navigate('Answers')} ></Button>
      <br></br>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
}

function Addition({ navigation }) {
  return(
    <View style={styles.container}>
      <Text  >Addition <br></br> Add the numbers together. </Text>
      <br></br>
      <Text> 100+25 =</Text>
      <br></br>
      <Text>9+45 =</Text>
      <br></br>
      <Text> 500+536 =</Text>
      <br></br>
      <Button title="Answers" onPress={()=> navigation.navigate('Answers')} ></Button>
      <br></br>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
}

function Subtraction({ navigation }) {
  return(
    <View style={styles.container}>
      <Text> Subtraction <br></br> Subtract the intergers below. Negative Numbers are possible.</Text>
      <br></br>
      <Text> 10 - 15 =</Text>
      <br></br>
      <Text> 65 - 19 =</Text>
      <br></br>
      <Text> 200 - 120 =</Text>
      <br></br>
      <Button title="Answers" onPress={()=> navigation.navigate('Answers')} ></Button>
      <br></br>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
}
function Answers({ navigation }) {
  return(
    <View style={styles.container}>
      <Text> Below are the answers for each section <br></br></Text>
      <br></br>
      <Button title="Addition" onPress={()=> navigation.navigate('Addition')} ></Button>
      <Text>_____________</Text>
      <Text>100 + 25 = 125</Text>
      <Text> 9 + 45 = 54</Text>
      <Text>500 + 536 = 1,036</Text>
      <br></br>
      <Button title="Subtraction" onPress={()=> navigation.navigate('Subtraction')} ></Button>
      <Text>_____________</Text>
      <Text>10 - 15 = -15</Text>
      <Text> 65 - 19 = 46</Text>
      <Text>200 - 120 = 80</Text>
      <br></br>
      <Button title="Division" onPress={()=> navigation.navigate('Division')} ></Button>
      <Text>_____________</Text>
      <Text>520 / 10 = 25</Text>
      <Text> 10% of 200 = 20</Text>
      <Text>500 / 2 = 250</Text>
      <br></br>
      <Button title="Multiplication" onPress={()=> navigation.navigate('Multiplication')} ></Button>
      <Text>_____________</Text>
      <Text>25 * 10 = 250</Text>
      <Text> 13 * 11 = 143</Text>
      <Text>4 * 4 * 2 = 32</Text>
      <br></br>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text >Mental Math Practice App </Text>
      <Text>Which sub-topic would you like to practice today?</Text>
      <br></br>
      <Button title="Addition" onPress={()=> navigation.navigate('Addition')} ></Button>
      <br></br>
      <Button title="Subtraction" onPress={()=> navigation.navigate('Subtraction')} ></Button>
      <br></br>
      <Button title="Division" onPress={()=> navigation.navigate('Division')} ></Button>
      <br></br>
      <Button title="Multiplication" onPress={()=> navigation.navigate('Multiplication')} ></Button>
      <br></br>
      <Button title="Answers" onPress={()=> navigation.navigate('Answers')} ></Button>
      <br></br>
      <StatusBar style="auto" />
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Addition" component={Addition} />
        <Stack.Screen name="Subtraction" component={Subtraction} />
        <Stack.Screen name="Division" component={Division} />
        <Stack.Screen name="Multiplication" component={Multiplication} />
        <Stack.Screen name="Answers" component={Answers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    flex: 1,
    width: 5,
    elevation: 3,
  },
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  Text: {
    fontSize: 25,
    lineHeight: 21,
    alignContent: 'center',
},
});