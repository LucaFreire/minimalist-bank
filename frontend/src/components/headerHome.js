import { View, Text, StyleSheet } from "react-native"


export default function HeaderHome({ name }) {
    return (
        <View style={styles.main}>
            <View style={{justifyContent: "center"}}>
                <Text style={styles.headerText}>Welcome, {name}</Text>
            </View>
            <View>
                <Text>0</Text>
            </View>
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
        width: 350,
        borderRadius: '15px',
        backgroundColor: 'gray',
    },
    headerText: {
        fontSize: "25px",
        left: "10px",
        color: "white"
    }
})