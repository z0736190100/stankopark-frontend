import {container} from "assets/jss/material-kit-react.jsx";

export default {
    container: {
        ...container,
        zIndex: "2",
        position: "relative",
        paddingTop: "10vh",
        color: "#FFFFFF"
    },
    cardHidden: {
        opacity: "0",
        transform: "translate3d(0, -60px, 0)"
    },
    pageHeader: {
        minHeight: "100vh",
        height: "auto",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)"
        },
        "&:before,&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""'
        },
        "& footer li a,& footer li a:hover,& footer li a:active": {
            color: "#FFFFFF"
        },
        "& footer": {
            position: "absolute",
            bottom: "0",
            width: "100%"
        }
    },
    form: {
        margin: "0"
    },
    cardHeader: {
        width: "auto",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-40px",
        padding: "20px 0",
        marginBottom: "15px"
    },
    socialIcons: {
        maxWidth: "24px",
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
    },
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center"
    },
    cardFooter: {
        padding: "0",
        paddingTop: "10px",
        margin: "0 15px 10px",
        borderRadius: "0",
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        backgroundColor: "transparent",
        border: "0"
    },
    // cardFooter: {
    //   width: "100%",
    //   paddingTop: "0rem",
    //   border: "0",
    //   borderRadius: "6px",
    //   //justifyContent: "center !important",
    //   textAlign: "center"
    // },
    socialLine: {
        marginTop: "1rem",
        textAlign: "center",
        padding: "0"
    },
    inputIconsColor: {
        color: "#495057"
    },
    footerButtons: {
        width: "333px !important"
    }
};
