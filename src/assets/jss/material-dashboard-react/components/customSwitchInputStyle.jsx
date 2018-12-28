import {
    container,
    title
} from "assets/jss/material-kit-react.jsx";
import {
    primaryColor,
    dangerColor,
    successColor,
    defaultFont
} from "assets/jss/material-dashboard-react.jsx";
import customCheckboxRadioSwitch from "./customCheckboxRadioSwitch.jsx";

const customSwitchInputStyle = {
    disabled: {
        "&:before": {
            backgroundColor: "transparent !important"
        }
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderColor: "#D2D2D2 !important",
            borderWidth: "1px !important"
        },
        "&:after": {
            borderColor: primaryColor
        }
    },
    underlineError: {
        "&:after": {
            borderColor: dangerColor
        }
    },
    underlineSuccess: {
        "&:after": {
            borderColor: successColor
        }
    },
    labelRoot: {
        ...defaultFont,
        color: "#AAAAAA !important",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "1.42857"
    },
    labelRootError: {
        color: dangerColor
    },
    labelRootSuccess: {
        color: successColor
    },
    feedback: {
        position: "absolute",
        top: "18px",
        right: "0",
        zIndex: "2",
        display: "block",
        width: "24px",
        height: "24px",
        textAlign: "center",
        pointerEvents: "none"
    },
    marginTop: {
        marginTop: "16px"
    },
    formControl: {
        paddingBottom: "10px",
        margin: "27px 0 0 0",
        position: "relative"
    },
    sections: {
        padding: "70px 0"
    },
    container,
    title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    space50: {
        height: "50px",
        display: "block"
    },
    space70: {
        height: "70px",
        display: "block"
    },
    icons: {
        width: "17px",
        height: "17px",
        color: "#FFFFFF"
    },
    ...customCheckboxRadioSwitch
};

export default customSwitchInputStyle;
