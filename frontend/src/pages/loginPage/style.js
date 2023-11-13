import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",
        height: "100%",
        gap: '10px',
        backgroundColor: '#251336'
    },
    input: {
        padding: "8px",
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        color: 'white'
    },
    label: {
        paddingTop: "15px",
        right: '100px',
        color: "white"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'purple',
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
    linkButton: {
        paddingLeft: '9px',
        width: 'auto',
        color: "purple",
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContent: {
        paddingTop: "30px",
        display: "flex",
        justifyContent: "center",
        gap: "70px"
    }

});

export default styles;