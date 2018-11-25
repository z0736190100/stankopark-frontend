import React from "react";
import _ from "lodash";
import {Field, reduxForm} from "redux-form";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from "@material-ui/core/es/ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/es/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/es/ExpansionPanelDetails/ExpansionPanelDetails";
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
import Table from "under_construction/components/Table/Table.jsx";
//assets
import ADD_MACHINE_UNIT_FORM_FIELD_PROPS from "variables/addMachineUnitFormFields.js";

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

function AddMachineUnit(props) {
    const {classes, tableData} = props;

    // KUNG-FUSION: i18n of form field labels - how to?

    const switchInputRenderer = () => {
        const SWITCH_ITEMS = [
            {
                label: "Электрическое",
                name: "electric",
                id: "electric",
                checked: false,
                value: "electric"
            },
            {
                label: "Гидравлическое",
                name: "hydraulic",
                id: "hydraulic",
                checked: false,
                value: "hydraulic"
            },
            {
                label: "Пневматическое",
                name: "pneumatic",
                id: "pneumatic",
                checked: false,
                value: "pneumatic"
            },
            {
                label: "Механическое",
                name: "manual",
                id: "manual",
                checked: true,
                value: "manual"
            },
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
                        checked={props.switchState[val.name] || false}
                        onClick={(name) => props.switchStateHandler(val.name)}/>
                </GridItem>
            );
        });
    };

    const formRenderer = (section) => {
        const defaultErrorText = "Check if right.";
        return _.map(ADD_MACHINE_UNIT_FORM_FIELD_PROPS[section], item => {
            const {
                component,
                name,
                labelText,
                errorText,
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
                        endAdornment={endAdornment}
                        startAdornment={startAdornment}
                        errorText={errorText || defaultErrorText}
                        menuValues={menuValues || null}
                    />
                </GridItem>
            );
        })
    };

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Button
                        disabled
                        color={"primary"}
                    >
                        {"Сохранить изменения"}
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <Card> {/*this card avaliable only for saving new machineUnit, not for updating*/}
                        <CardHeader color={"primary"}>
                            <h4 className={classes.cardTitleWhite}>
                                {"Тип оборудования"}
                            </h4>
                            <p className={classes.cardCategoryWhite}>
                                <small>{"Выбор определит набор характеристик оборудования"}</small>
                            </p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer direction={"row"} zeroMinWidth>
                                {switchInputRenderer()}
                            </GridContainer>
                        </CardBody>
                        <CardFooter/>
                    </Card>
                    <Card>
                        <CardHeader color={"primary"}>
                            <h4 className={classes.cardTitleWhite}>
                                {"Характеристики оборудования"}
                            </h4>
                            <p className={classes.cardCategoryWhite}>
                                <small>{"Содержит обязательные и опциональные поля"}</small>
                            </p>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={props.handleSubmit(values => console.log(values))}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <ExpansionPanel defaultExpanded
                                                        elevation={3}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <h4 className={classes.heading}>{"Общие"}</h4>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <GridContainer>
                                                    {formRenderer("GENERAL")}
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
                                                {formRenderer("ELECTRICS")}
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
                                                        startAdornment={"A"}
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
                                                {formRenderer("HYDRAULICS")}
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
                                                {formRenderer("PNEUMATICS")}
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </GridItem>
                                </GridContainer>
                            </form>
                        </CardBody>
                        <CardFooter>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Паспорт</h4>
                            <p className={classes.cardCategoryWhite}>
                                <small>чекаут перед сохранением</small>
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="success"
                                tableHead={["Field", "Value"]}
                                tableData={tableData}
                            />
                            <Button
                                disabled
                                color={"primary"}
                            >
                                {"Сохранить изменения"}
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <Button
                        disabled
                        color={"primary"}
                    >
                        {"Сохранить изменения"}
                    </Button>
                </GridItem>
            </GridContainer>
        </div>
    );
}

function validate(values) {
    const errors = {};
// TODO: validation list - just names required- can be different of ADD_MACHINE_UNIT_FORM_FIELD_PROPS, for All Fields
    const FIELDS_TO_VALIDATE_LIST = [
        "usage", "producerBrand", "model", "serialNumber", "documentationLink", "description", "voltage", "power", "hPressure", "hVolume", "airPressure", "airConsumptionPerCycle"
    ];
    _.each(FIELDS_TO_VALIDATE_LIST, name => {
        if (!values[name]) {
            errors[name] = true;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: "addMachineUnitForm"
})(withStyles(styles)(AddMachineUnit));

