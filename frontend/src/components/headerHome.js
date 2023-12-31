import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function HeaderHome({ name }) {
    return (
        <View style={styles.main}>
            <View style={{justifyContent: "center"}}>
                <Text style={styles.headerText}>Welcome, {name}</Text>
            </View>
            <TouchableOpacity onPress={() => name.navigation.navigate('home')} style={{justifyContent: "center", padding: "20px"}}>
                <Text style={{fontWeight: 700, backgroundColor: '#41B6E6', borderRadius: '15px', padding: '5px', color: 'white'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: 'center',
        marginTop: "10px",
        height: "70px",
        width: "94%",
        borderRadius: '15px',
        backgroundColor: 'white',
    },
    headerText: {
        fontSize: "25px",
        left: "10px",
        color: "black",
        textTransform: 'capitalize',
        fontWeight: 700
    }
})