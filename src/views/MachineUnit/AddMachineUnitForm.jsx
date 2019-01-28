import React from "react";
import _ from "lodash";
// redux
import {Field, reduxForm} from "redux-form";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// core components
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSwitchInput from "components/CustomInput/CustomSwitchInput.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
//assets
import ADD_MACHINE_UNIT_FORM_FIELD_PROPS from "variables/addMachineUnitFormFields.js";
// utils

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontFamily: "Roboto",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto Slab', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

function AddMachineUnitForm(props) {

    const {classes} = props;

    const switchInputRenderer = () => {
        const SWITCH_ITEMS = [
            {
                label: "Является потребителем электроэнергии.",
                tooltipText: "Оборудование является потребителем электроэнергии.",
                name: "electric",
                id: "electric",
                checked: false,
                value: "electric"
            },
            {
                label: "Оснащено гидравлической системой.",
                tooltipText: "Оборудование оснащено гидравлической системой.",
                name: "hydraulic",
                id: "hydraulic",
                checked: false,
                value: "hydraulic"
            },
            {
                label: "Оснащено пневматической системой.",
                tooltipText: "Оборудование оснащено пневматической системой.",
                name: "pneumatic",
                id: "pneumatic",
                checked: false,
                value: "pneumatic"
            },
            {
                label: "Оснащено нагревательными и/или холодильными элементами.",
                tooltipText: "Оборудование оснащено нагревательными и/или холодильными элементами.",
                name: "thermo",
                id: "thermo",
                checked: false,
                value: "thermo"
            }
        ];
        return _.map(SWITCH_ITEMS, val => {
            return (
                <GridItem key={val.name} xs={12} sm={6} md={3}>
                    <Field
                        key={val.name}
                        name={val.name}
                        component={CustomSwitchInput}
                        id={val.id}
                        label={val.label}
                        tooltipText={val.tooltipText}
                        checked={props.switchState[val.name] || false}
                        onClick={(event, name) => props.switchStateHandler(event, val.name)}
                    />
                </GridItem>
            );
        });
    };

    const formRenderer = (section) => {
        const defaultErrorText = "Проверьте введенные данные.";
        return _.map(ADD_MACHINE_UNIT_FORM_FIELD_PROPS[section].fields, item => {
            const {
                component,
                name,
                labelText,
                shrink,
                errorText,
                tooltipText,
                endAdornment,
                startAdornment,
                menuValues,
                breakpoints
            } = item;
            return (
                <GridItem key={name} {...breakpoints}>
                    <Field
                        key={name}
                        name={name}
                        component={component}
                        formControlProps={{
                            fullWidth: true
                        }}
                        labelText={labelText}
                        shrink={shrink}
                        endAdornment={endAdornment}
                        startAdornment={startAdornment}
                        errorText={errorText || defaultErrorText}
                        tooltipText={tooltipText || null}
                        menuValues={menuValues || null}
                    />
                </GridItem>
            );
        })
    };
    // TODO: ExpansionPanel render helper
    // FIXME: card inline-styling stinks
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <form onSubmit={props.handleSubmit(() => props.showDialog())}>
                        <Card style={{
                            border: "1.3px solid",
                            borderColor: "#666699"
                        }}> {/*this card avaliable only for saving new machineUnit, not for updating*/}
                            <CardHeader color={"primary"}>
                                <h4 className={classes.cardTitleWhite}>
                                    {"Системы в составе оборудования"}
                                </h4>
                                <p className={classes.cardCategoryWhite}>
                                    <small>{"Оборудование может включать в себя одну или несколько функциональных систем. Выбор определит перечень характеристик для соответствующих систем."}</small>
                                </p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer direction={"row"}>
                                    {switchInputRenderer()}
                                </GridContainer>
                            </CardBody>
                            <CardFooter/>
                        </Card>
                        <Card style={{
                            border: "1.3px solid",
                            borderColor: "#666699"
                        }}>
                            <CardHeader color={"primary"}>
                                <h4 className={classes.cardTitleWhite}>
                                    {"Характеристики оборудования"}
                                </h4>
                                <p className={classes.cardCategoryWhite}>
                                    <small>{"/* содержит обязательные и опциональные поля */"}</small>
                                </p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <ExpansionPanel defaultExpanded
                                                        elevation={3}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <h4 className={classes.heading}>{"Общие"}</h4>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <GridContainer>
                                                    {formRenderer("general")}
                                                </GridContainer>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <ExpansionPanel
                                            disabled={!props.switchState["electric"]}
                                            elevation={3}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <h4 className={classes.heading}>{"Электрообеспечение"}</h4>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                {formRenderer("electric")}
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <CustomInput
                                                        disabled
                                                        labelText={"Сила тока"}
                                                        id={"ampers"}
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            name: "ampers",
                                                            id: "ampers",
                                                        }}
                                                        endAdornment={"A"}
                                                        helperText={"Высчитано по формуле"}
                                                    />
                                                </GridItem>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <ExpansionPanel
                                            disabled={!props.switchState["hydraulic"]}
                                            elevation={3}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <h4 className={classes.heading}>{"Гидравлическая система"}</h4>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                {formRenderer("hydraulic")}
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <ExpansionPanel
                                            disabled={!props.switchState["pneumatic"]}
                                            elevation={3}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <h4 className={classes.heading}>{"Пневматическая система"}</h4>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                {formRenderer("pneumatic")}
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <ExpansionPanel disabled={!props.switchState["thermo"]}
                                                        elevation={3}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <h4 className={classes.heading}>{"Термооснастка"}</h4>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <GridContainer>
                                                    {formRenderer("thermo")}
                                                </GridContainer>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                            </CardFooter>
                        </Card>
                        <Button
                            color={"primary"}
                            type={"submit"}
                        >
                            {"Продолжить"}
                        </Button>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}

function validate(values) {

    const errors = {};

// TODO: combine with addMachineUnitFormFields.js in variables
    // CONE-FIGURE

    const FIELDS_MAP = {
        general: ["usage", "producerBrand", "model", "serialNumber", "documentationLink", "description"],
        electric: ["voltage", "power"],
        hydraulic: ["hPressure", "hVolume", "oilType"],
        pneumatic: ["airPressure", "airConsumptionPerCycle"]
    };

    let FIELDS_TO_VALIDATE_LIST = [];

    FIELDS_TO_VALIDATE_LIST = FIELDS_TO_VALIDATE_LIST.concat(FIELDS_MAP.general);

    _.map(FIELDS_MAP, (section, key) => {
        if (!!values[key]) {
            FIELDS_TO_VALIDATE_LIST = FIELDS_TO_VALIDATE_LIST.concat(section);
        }
    });

    _.each(FIELDS_TO_VALIDATE_LIST, name => {
        if (!values[name]) {
            errors[name] = true;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: "add_machine"
})(withStyles(styles)(AddMachineUnitForm));

