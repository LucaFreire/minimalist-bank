import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#11111F'
    },
    buttonsSection: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "98%",
        height: "45%",
        padding: "10px",
        borderRadius: "15px"
    },
    buttons: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "40%",
        borderRadius: "15px",
        backgroundColor: "#41B6E6"
    }

});

export default styles;