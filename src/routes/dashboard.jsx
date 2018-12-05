// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
//import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
//import MachineUnitsTableList from "views/MachineUnitsTableList/MachineUnitsTableList.jsx";
//import Typography from "views/Typography/Typography.jsx";
//import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "under_construction/components/Notifications/UCNotificationCase.jsx";
import AddMachineUnitClass from "views/MachineUnit/AddMachineUnitClass.jsx";
import UCLoginPage from "under_construction/views/UCLoginPage.jsx";
//import LoginPage from "components/layouts/LoginPage/WelcomePage.jsx";

const dashboardRoutes = [
    {
        path: "/dashboard",
        sidebarName: "Статистика",
        navbarName: "Статистика",
        icon: Dashboard,
        component: DashboardPage
    },
    // {
    //     path: "/machine-unit-profile",
    //     sidebarName: "Картотека",
    //     navbarName: "Картотека",
    //     icon: Person,
    //     component: MachineUnitProfile
    // },
    {
        path: "/add-machine-unit",
        sidebarName: "Добавить станок",
        navbarName: "Добавить станок",
        icon: "add_box",
        component: AddMachineUnitClass
    },
    // {
    //     path: "/machine-units-table",
    //     sidebarName: "Оборудование",
    //     navbarName: "Оборудование",
    //     icon: "content_paste",
    //     component: MachineUnitsTableList
    // },
    // {
    //     path: "/exp",
    //     sidebarName: "experimental",
    //     navbarName: "experimental -- Паспорт оборудования",
    //     icon: "add_box",
    //     component: AddMachineUnitClass
    // },
    {
        path: "/login",
        sidebarName: "exp_loginForm",
        navbarName: "experimental",
        icon: "voice_over_off",
        component: UCLoginPage
    },
    // {
    //     path: "/typography",
    //     sidebarName: "Typography",
    //     navbarName: "Typography",
    //     icon: LibraryBooks,
    //     component: Typography
    // },
    // {
    //     path: "/icons",
    //     sidebarName: "Icons",
    //     navbarName: "Icons",
    //     icon: BubbleChart,
    //     component: Icons
    // },
    {
        path: "/notifications",
        sidebarName: "Notifications",
        navbarName: "Notifications",
        icon: Notifications,
        component: NotificationsPage
    },
    {redirect: true, path: "/", to: "/welcome", navbarName: "Redirect"}
];

export default dashboardRoutes;
