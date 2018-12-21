import React from "react";
import _ from "lodash";
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
import Table from "under_construction/components/Table/Table.jsx";
import DialogRaw from "under_construction/components/Dialog/ConfirmationDialogRaw";
//assets
import ADD_MACHINE_UNIT_FORM_FIELD_PROPS from "variables/addMachineUnitFormFields.js";
import * as axios from "axios";


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
                label: "Электрическое",
                tooltipText: "Оборудование является потребителем электроэнергии.",
                name: "electric",
                id: "electric",
                checked: false,
                value: "electric",
                onChange: (event) => console.log(event.target)
            },
            {
                label: "Гидравлическое",
                tooltipText: "Оборудование оснащено гидравлической системой.",
                name: "hydraulic",
                id: "hydraulic",
                checked: false,
                value: "hydraulic",
                onChange: (event) => console.log(event.target)
            },
            {
                label: "Пневматическое",
                tooltipText: "Оборудование оснащено пневматической системой.",
                name: "pneumatic",
                id: "pneumatic",
                checked: false,
                value: "pneumatic",
                onChange: (event) => console.log(event.target)
            },
            {
                label: "Термическое",
                tooltipText: "Оборудование оснащено нагревательными или охладительными элементами.",
                name: "thermo",
                id: "thermo",
                checked: false,
                value: "thermo",
                onChange: (event) => console.log(event.target)
            },
            {
                label: "Механическое",
                name: "manual",
                id: "manual",
                checked: true,
                value: "manual",
                onChange: (event) => console.log(event.target)
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
        return _.map(ADD_MACHINE_UNIT_FORM_FIELD_PROPS[section], item => {
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

    const saveToDB = (values) => {
        axios.post("/api/machine_units", values);
    };

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Button
                        disabled
                        color={"primary"}
                        type={"submit"}
                    >
                        {"Сохранить изменения"}
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <form onChange={props.formOnChange()} onSubmit={props.handleSubmit(values => saveToDB(values))}>
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
                                    <GridItem xs={12} sm={12} md={12}>
                                        <ExpansionPanel disabled={!props.switchState["thermo"]}
                                                        elevation={3}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <h4 className={classes.heading}>{"Термооснастка"}</h4>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <GridContainer>
                                                    {formRenderer("THERMO")}
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
                            {"Сохранить изменения"}
                        </Button>
                        <Button
                            color={"primary"}
                            onClick={() => props.showDialog()}
                        >
                            {"Modal"}
                        </Button>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}

function validate(values) {

    const errors = {};

// TODO: combine with addMachineUnitFormFields.js in variables/
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

    console.log("fields to validate: ", FIELDS_TO_VALIDATE_LIST);

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

