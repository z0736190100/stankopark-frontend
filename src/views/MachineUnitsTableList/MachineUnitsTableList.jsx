import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import AddIcon from '@material-ui/icons/Add';

import MUIDataTable from "mui-datatables";

import Fab from '@material-ui/core/Button';

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
const fab =
    {
        color: 'primary',
        icon: <AddIcon/>,
    };

const columns = ["Номер", "Производитель", "Модель", "Целевое назначение", "Описание"];

const data = [
    ["02-EH-013", "Завод Прессов", "ПКП-10", "заготовительные работы", "Пресс консольный с поворотным ударником"],
    ["02-E-010", "Sideco", "220410", "заготовительные работы", "Машинка для спускания краев заготовки."],
    ["04-ET-010", "Elvi", "Ub1010", "затяжные работы", "Парогенератор."],
    ["04-EPHT-005", "CERIM", "K178", "затяжные работы", "Машина для затяжки носочно-геленочной части верха обуви"],
    ["05-EH-007", "FAMAS", "300", "затяжные работы", "Пресс мембранный для приклейки подошвы"],
];

const options = {
    filterType: 'checkbox',
};

function MachineUnitsTableList(props) {
    const {classes} = props;
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>
                            {"ПЕРЕЧЕНЬ ОБОРУДОВАНИЯ"}
                        </h4>
                        <p className={classes.cardCategoryWhite}>
                            <small>{"Кликни на строку"}</small>
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Номер", "Производитель", "Модель", "Целевое назначение", "Описание"]}
                            tableData={[
                                ["02-EH-013", "Завод Прессов", "ПКП-10", "заготовительные работы", "Пресс консольный с поворотным ударником"],
                                ["02-E-010", "Sideco", "220410", "заготовительные работы", "Машинка для спускания краев заготовки."],
                                ["04-ET-010", "Elvi", "Ub1010", "затяжные работы", "Парогенератор."],
                                ["04-ET-005", "CERIM", "K178", "затяжные работы", "Машина для затяжки носочно-геленочной части верха обуви"],
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
            <Fab color={fab.color}>
            {fab.icon}
        </Fab>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>
                            {"ПЕРЕЧЕНЬ ОБОРУДОВАНИЯ"}
                        </h4>
                        <p className={classes.cardCategoryWhite}>
                            <small>{"Кликни на строку"}</small>
                        </p>
                    </CardHeader>
                    <CardBody>
                        <MUIDataTable
                            title={"Станкопарк"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

export default withStyles(styles)(MachineUnitsTableList);
