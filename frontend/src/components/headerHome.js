import { View, Text, StyleSheet } from "react-native"


export default function HeaderHome({ name }) {
    return (
        <View style={styles.main}>
            <View style={{justifyContent: "center"}}>
                <Text style={styles.headerText}>Welcome, {name}</Text>
            </View>
            <View style={{justifyContent: "center", padding: "20px"}}>
                <Text>Logout</Text>
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