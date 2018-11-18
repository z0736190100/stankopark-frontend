import React from "react";
import _ from "lodash";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomSelectInput from "components/Experimental/CustomSelectInput.jsx";
import CustomSwitchInput from "./trans/CustomSwitchInput"

import avatar from "assets/img/faces/gh_logo.png";
import formFields from "./machineUnitFormFields";
import ExpansionPanel from "@material-ui/core/es/ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/es/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/es/ExpansionPanelDetails/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import CustomSelectInput from "@material-ui/core/es/CustomSelectInput/CustomSelectInput";

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

function Experimental(props) {
    const {classes} = props;

    // KUNG-FUSION: i18n of form field labels - how to?

    let formState = {};
    const menuItemValues = [
        {
            value: 12,
            text: 12
        },
        {
            value: 36,
            text: 36
        },
        {
            value: 110,
            text: 110
        },
        {
            value: 220,
            text: 220
        },
        {
            value: 380,
            text: 380
        }
    ];

    const menuItemValuesUsage = [
        {
            value: "заготовительные работы",
            text: "заготовительные работы"
        },
        {
            value: "сборочные работы",
            text: "сборочные работы"
        },
        {
            value: "затяжные работы",
            text: "затяжные работы"
        },
        {
            value: "финишные и упаковочные работы",
            text: "финишные и упаковочные работы"
        },
    ];

    const changeFormState = fs => {
        formState[fs.id] = fs.value;
        console.log(JSON.stringify(formState));
    };

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

    const switchInputRenderer = () => {
        return _.map(SWITCH_ITEMS, val => {
            return (
                <GridItem key={val.name} xs={12} sm={6} md={3}>
                    <CustomSwitchInput
                        id={val.id}
                        label={val.label}
                        name={val.name}
                        checked={props.switchState[val.name] || false}
                        onClick={(name) => props.switchStateHandler(val.name)}/>
                </GridItem>
            );
        });
    };

    const formFieldsRenderer = () => {
        return _.map(formFields, ({inputProps, itemBreakpoints}) => {
            return (
                <GridItem key={inputProps.name} {...itemBreakpoints}>
                    <CustomInput
                        onChange={event => changeFormState(event.target)}
                        {...inputProps}
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
            );
        });
    };

    const saveMachineUnit = unit => {
        axios.post("/api/machine_units", unit);
    };

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Button
                        disabled
                        color={"primary"}
                        onClick={() => saveMachineUnit(formState)}
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
                            <form action="#">
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <ExpansionPanel defaultExpanded
                                                        elevation={3}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <h4 className={classes.heading}>{"Общие"}</h4>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <GridContainer>
                                                    <GridItem xs={12} sm={12} md={12}>
                                                        <CustomSelectInput
                                                            onChange={event => props.selectOC(event)}
                                                            labelText={"Целевое назначение (группа работ)"}
                                                            helperText={"Выберите значение"}
                                                            menuValues={menuItemValuesUsage}
                                                            formControlProps={{
                                                                fullWidth: true
                                                            }}
                                                            inputProps={{
                                                                name: "usage",
                                                                id: "usage",
                                                                value: props.iii
                                                            }}
                                                        />
                                                    </GridItem>
                                                    {formFieldsRenderer()}
                                                    <GridItem xs={12} sm={12} md={12}>
                                                        <CustomInput
                                                            error={true}
                                                            onChange={event => changeFormState(event.target)}
                                                            labelText={"Описание"}
                                                            id={"description"}
                                                            formControlProps={{
                                                                fullWidth: true
                                                            }}
                                                            inputProps={{
                                                                multiline: true,
                                                                rows: 5
                                                            }}
                                                            helperText={"Опишите назначение станка, указанное в паспорте"}
                                                        />
                                                    </GridItem>
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
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <CustomSelectInput
                                                        onChange={event => props.selectOC(event)}
                                                        labelText={"Напряжение"}
                                                        helperText={"Выберите значение"}
                                                        startAdornment={"V"}
                                                        menuValues={menuItemValues}
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            name: "voltage",
                                                            id: "voltage",
                                                            value: props.iii
                                                        }}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <CustomInput
                                                        disabled
                                                        onChange={event => changeFormState(event.target)}
                                                        labelText={"Мощность"}
                                                        id={"watts"}
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            name: "watts",
                                                            id: "watts",
                                                        }}
                                                        startAdornment={"W"}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={4}>
                                                    <CustomInput
                                                        disabled
                                                        onChange={event => changeFormState(event.target)}
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
                                                <GridItem xs={12} sm={12} md={6}>
                                                    <CustomInput
                                                        onChange={event => changeFormState(event.target)}
                                                        labelText={"Рабочее давление системы"}
                                                        id={"oil_pressure"}
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            name: "oil_pressure",
                                                            id: "oil_pressure",
                                                        }}
                                                        endAdornment={"КПа"}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={6}>
                                                    <CustomInput
                                                        onChange={event => changeFormState(event.target)}
                                                        labelText={"Емкость системы"}
                                                        id={"oil_value"}
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            name: "oil_value",
                                                            id: "oil_value",
                                                        }}
                                                        endAdornment={"Кг"}
                                                    />
                                                </GridItem>
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
                                                <GridItem xs={12} sm={12} md={6}>
                                                    <CustomInput
                                                        onChange={event => changeFormState(event.target)}
                                                        labelText={"Рабочее давление системы"}
                                                        id={"air_pressure"}
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            name: "air_pressure",
                                                            id: "air_pressure",
                                                        }}
                                                        endAdornment={"КПа"}
                                                    />
                                                </GridItem>
                                                <GridItem xs={12} sm={12} md={6}>
                                                    <CustomInput
                                                        onChange={event => changeFormState(event.target)}
                                                        labelText={"Потребление за рабочий цикл"}
                                                        id={"air_value"}
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            name: "air_value",
                                                            id: "air_value",
                                                        }}
                                                        endAdornment={"М куб."}
                                                    />
                                                </GridItem>
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
                    <Card profile>
                        <CardAvatar profile>
                            <a href="#rr">
                                <img src={avatar}/>
                            </a>
                        </CardAvatar>
                        <CardBody profile>
                            <h6 className={classes.cardCategory}>{"ЖУРНАЛ"}</h6>
                            <h4 className={classes.cardTitle}>{props.iii}</h4>
                            <p className={classes.description}>
                                {
                                    "--выборка из общего журнала техобслуживания в табличном виде--"
                                }
                            </p>
                            <Button color={"success"}>{"TEST"}</Button>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <Button
                        disabled
                        color={"primary"}
                        onClick={() => saveMachineUnit(formState)}
                    >
                        {"Сохранить изменения"}
                    </Button>
                </GridItem>
            </GridContainer>
        </div>
    );
}

export default withStyles(styles)(Experimental);
