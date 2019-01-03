import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AddIcon from '@material-ui/icons/Add';
import Divider from "@material-ui/core/Divider/Divider";
import GridList from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs";
// assets
import unit1 from "assets/img/units/1.jpg";
import unit2 from "assets/img/units/2.jpg";
import unit3 from "assets/img/units/3.jpg";
import unit4 from "assets/img/units/4.jpg";


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

function MachineUnitPassport(props) {
    const {classes} = props;
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card style={{
                    border: "1.3px solid",
                    borderColor: "#666699"
                }}>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>
                            {"CERIM, K178"}
                        </h4>
                        <p className={classes.cardCategoryWhite}>
                            <small>{"Клееевая затяжка носочно-гиленочной части заготовки верха обуви."}</small>
                        </p>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={9}>
                                <CustomTabs
                                    title={""}
                                    headerColor="primary"
                                    tabs={[
                                        {
                                            tabName: "Технические Характеристики",
                                            tabIcon: AddIcon,
                                            tabContent: (
                                                <div>
                                                    <Divider/>
                                                    <h5>
                                                        Электрообеспечение
                                                    </h5>
                                                    <Table
                                                        tableHeaderColor="primary"
                                                        tableHead={["Напряжение", "Мощность", "Сила тока"]}
                                                        tableData={[
                                                            ["380", "5000", "120"]
                                                        ]}
                                                    />
                                                    <h5>
                                                        Гидравлика
                                                    </h5>
                                                    <Table
                                                        tableHeaderColor="primary"
                                                        tableHead={["Давление, КПа", "Емкость системы, кг", "Марка масла"]}
                                                        tableData={[
                                                            ["20", "100", "МГЕ-46"]
                                                        ]}
                                                    />
                                                    <h5>
                                                        Пневматика
                                                    </h5>
                                                    <Table
                                                        tableHeaderColor="primary"
                                                        tableHead={["Давление, КПа", "Потребление за цикл, л"]}
                                                        tableData={[
                                                            ["6", "30"]
                                                        ]}
                                                    />
                                                    <h5>
                                                        Термооснастка
                                                    </h5>
                                                    <Table
                                                        tableHeaderColor="primary"
                                                        tableHead={["Тип термоэлемента", "Характеристики", "Напряжение, В", "Мощность, Вт", "Количество, шт"]}
                                                        tableData={[
                                                            ["ТЭН пальчиковый", "D 12, L 150", "220", "300", "4"]
                                                        ]}
                                                    /></div>
                                            )
                                        },
                                        {
                                            tabName: "Руководство по эксплуатации",
                                            tabIcon: AddIcon,
                                            tabContent: (
                                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                                    doloremque dolores, doloribus expedita explicabo, facilis, fugiat
                                                    itaque iusto labore pariatur quam sapiente sint temporibus unde
                                                    vero! Excepturi nam quis tempora!</div>
                                            )
                                        },
                                        {
                                            tabName: "Графики обслуживания",
                                            tabIcon: AddIcon,
                                            tabContent: (
                                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Asperiores distinctio est, facere illo impedit ipsa molestias
                                                    nesciunt nostrum obcaecati odit officiis quasi quibusdam quos saepe
                                                    similique, ut velit veniam voluptatibus.</div>
                                            )
                                        }
                                    ]}
                                />
                                <Button
                                    color={"primary"}
                                >
                                    {"Редактировать"}
                                </Button>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                                <Card>
                                    <CardHeader color={"primary"}>
                                        <h4 className={classes.cardTitleWhite}>
                                            {"Галерея"}
                                        </h4>
                                        <p className={classes.cardCategoryWhite}>
                                            <small>{"/* может содержать презентационные фото станка, так и фотоотчеты о поломках */"}</small>
                                        </p>
                                    </CardHeader>
                                    <CardBody>
                                        <GridList cellHeight={160} cols={1}>
                                            <GridListTile key={1} cols={1}>
                                                <img src={unit1} alt={"fuuck"}/>
                                            </GridListTile><GridListTile key={1} cols={1}>
                                            <img src={unit2} alt={"fuuck"}/>
                                        </GridListTile><GridListTile key={1} cols={1}>
                                            <img src={unit3} alt={"fuuck"}/>
                                        </GridListTile><GridListTile key={1} cols={1}>
                                            <img src={unit4} alt={"fuuck"}/>
                                        </GridListTile>
                                            <Button
                                                title={"Добавить фото"}
                                                style={{
                                                    border: "1.3px solid",
                                                    borderColor: "#666699"
                                                }}
                                                variant={"outlined"}
                                                color={"transparent"}

                                            >
                                                <AddIcon fontSize={"large"} color={"#666699"}/>
                                            </Button>
                                        </GridList>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

export default withStyles(styles)(MachineUnitPassport);
