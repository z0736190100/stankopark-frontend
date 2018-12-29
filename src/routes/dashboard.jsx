// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
//import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
//import MachineUnitsTableList from "views/MachineUnitsTableList/MachineUnitsTableList.jsx";
//import Typography from "views/Typography/Typography.jsx";
//import Icons from "views/Icons/Icons.jsx";
import AddMachineUnitClass from "views/MachineUnit/AddMachineUnitClass.jsx";
import MUP from "under_construction/components/MachineUnitPassport/MachineUnitPassport.jsx";
import MachineUnitsTableList from "views/MachineUnitsTableList/MachineUnitsTableList.jsx"
//import LoginPage from "components/layouts/LoginPage/WelcomePage.jsx";

const dashboardRoutes = [
    {
        path: "/dashboard",
        sidebarName: "Статистика",
        navbarName: "Статистика",
        icon: Dashboard,
        component: DashboardPage
    },
    {
        path: "/add-machine-unit",
        sidebarName: "Добавить станок",
        navbarName: "Добавить станок",
        icon: "add_box",
        component: AddMachineUnitClass
    },
    {
        path: "/machine-units",
        sidebarName: "Реестр",
        navbarName: "Реестр оборудования",
        icon: "assignment",
        component: MachineUnitsTableList
    },
    {
        path: "/mup",
        sidebarName: "passport",
        navbarName: "passport",
        icon: "assignment",
        component: MUP
    },
    {redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect"}
];

export default dashboardRoutes;
