import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#251336'
    },
    buttonsSection: {
        backgroundColor: "gray",
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
        height: "45%",
        borderRadius: "15px",
        backgroundColor: "#251336"
    }

});

export default styles;