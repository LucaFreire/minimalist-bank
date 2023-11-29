import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#11111F',
    },
    inputContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
        height: "100%",
        gap: '10px',
        backgroundColor: '#11111F',
    },
    signInButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "50px",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#41B6E6',
    },
    arrowStyle: {
        height: "15px",
        width: "10px",
        padding: "18px",
        left: '20px',
        top: '5px'
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    input: {
        padding: "8px",
        width: "70%",
        backgroundColor: '#11111F'
    }

});

export default style;