import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    main: {
        backgroundColor: '#251336'
    },
    inputContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
        height: "100%",
        gap: '10px',
        backgroundColor: '#251336'
    },
    signInButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "50px",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'purple',
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
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        color: 'white'
    }

});

export default style;