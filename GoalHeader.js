import { StyleSheet, View, Text,  Image} from 'react-native';

export default function GoalHeader() {
    return(
        <View style={styles.margin}>
            <Image source={require('@/assets/images/goal.png')} style={styles.goalImage} />
            <Text style={styles.goalFont}>    G O A L S    </Text>
            <Image source={require('@/assets/images/goal.png')} style={styles.goalImage} />
        </View>
    )
};

const styles = StyleSheet.create({
    margin: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderColor: '#8f8f8f',
      backgroundColor: '#c7c5c5',
    },
    goalFont: {
      fontSize: 15,
    },
    goalImage: {
      height: 30,
      width: 30,
    },
  });
