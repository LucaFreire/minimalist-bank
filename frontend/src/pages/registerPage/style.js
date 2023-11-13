import { StyleSheet } from "react-native-web";

const style = StyleSheet.create({
    main: {
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
        marginTop: "100px",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'purple',
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