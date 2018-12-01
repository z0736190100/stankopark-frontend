import CustomInputForRedux from "components/CustomInput/CustomInputForRedux.jsx"

export default {
    REGISTRATION:
        [
            {
                component: CustomInputForRedux,
                name: "firstName",
                id: "firstName",
                labelText: "Имя",
                tooltipText: "Введите Ваше имя кириллицей.",
                breakpoints: {
                    xs: 12,
                    sm: 12,
                    md: 12
                }
            },
            {
                component: CustomInputForRedux,
                name: "lastName",
                id: "lastName",
                labelText: "Фамилия",
                tooltipText: "Введите Вашу фамилию кириллицей.",
                breakpoints: {
                    xs: 12,
                    sm: 12,
                    md: 12
                }
            },
            {
                component: CustomInputForRedux,
                name: "email",
                id: "email",
                labelText: "Email",
                tooltipText: "Ведите свой е-мейл.",
                breakpoints:
                    {
                        xs: 12,
                        sm: 12,
                        md: 12
                    }
            },
            {
                component: CustomInputForRedux,
                name: "password",
                id: "password",
                labelText: "Пароль",
                tooltipText: "Пароль должен быть длииинным и слооожным!",
                breakpoints:
                    {
                        xs: 12,
                        sm: 12,
                        md: 12
                    }
            },
            {
                component: CustomInputForRedux,
                name: "password2",
                id: "password2",
                labelText: "Повторите пароль",
                breakpoints:
                    {
                        xs: 12,
                        sm: 12,
                        md: 12
                    }
            }
        ],
    LOGIN: [
        {
            component: CustomInputForRedux,
            name: "email",
            id: "email",
            labelText: "Email",
            tooltipText: "Ведите свой е-мейл.",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 12
                }
        },
        {
            component: CustomInputForRedux,
            name: "password",
            id: "password",
            labelText: "Пароль",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 12
                }
        }
    ]
};


{/*<CustomInput*/}
    {/*labelText="Ник"*/}
    {/*id="first"*/}
    {/*formControlProps={{*/}
        {/*fullWidth: true*/}
    {/*}}*/}
    {/*inputProps={{*/}
        {/*type: "text",*/}
        {/*endAdornment: (*/}
            {/*<InputAdornment position="end">*/}
                {/*<People className={classes.inputIconsColor}/>*/}
            {/*</InputAdornment>*/}
        {/*)*/}
    {/*}}*/}
{/*/>*/}
{/*<CustomInput*/}
{/*labelText="Email..."*/}
{/*id="email"*/}
{/*formControlProps={{*/}
    {/*fullWidth: true*/}
{/*}}*/}
{/*inputProps={{*/}
    {/*type: "email",*/}
        {/*endAdornment: (*/}
        {/*<InputAdornment position="end">*/}
            {/*<Email className={classes.inputIconsColor}/>*/}
        {/*</InputAdornment>*/}
    {/*)*/}
{/*}}*/}
{/*/>*/}
{/*<CustomInput*/}
    {/*labelText="Пароль"*/}
    {/*id="pass"*/}
    {/*formControlProps={{*/}
        {/*fullWidth: true*/}
    {/*}}*/}
    {/*inputProps={{*/}
        {/*type: "password",*/}
        {/*endAdornment: (*/}
            {/*<InputAdornment position="end">*/}
                {/*<Icon className={classes.inputIconsColor}>*/}
                    {/*lock_outline*/}
                {/*</Icon>*/}
            {/*</InputAdornment>*/}
        {/*)*/}
    {/*}}*/}
{/*/>*/}