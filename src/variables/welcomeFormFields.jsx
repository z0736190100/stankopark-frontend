import CustomInputForRedux from "components/CustomInput/CustomInputForRedux.jsx"

export const REGISTRATION = [
            {
                component: CustomInputForRedux,
                name: "firstName",
                id: "firstName",
                labelText: "Имя",
                tooltipText: "Введите Ваше имя кириллицей.",
                constraints: {
                    required: true,
                    type: "text",
                    pattern: "/^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/",
                    minlength: 2,
                    maxlength: 22
                },
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
                constraints: {
                    required: true,
                    type: "text",
                    pattern: "/^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/",
                    minlength: 2,
                    maxlength: 22
                },
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
                constraints: {
                    required: true,
                    type: "email",
                    minlength: 5,
                    maxlength: 22
                },
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
                constraints: {
                    required: true,
                    type: "password",
                    minlength: 8,
                    maxlength: 22
                },
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
                labelText: "Подтвердите пароль",
                errorText: "Пароль и подтверждение не совпадают.",
                constraints: {
                    required: true,
                    type: "password",
                    minlength: 8,
                    maxlength: 22
                },
                breakpoints:
                    {
                        xs: 12,
                        sm: 12,
                        md: 12
                    }
            }
            ];

  export const LOGIN = [
        {
            component: CustomInputForRedux,
            name: "email",
            id: "email",
            labelText: "Email",
            tooltipText: "Ведите свой е-мейл.",
            constraints: {
                required: true,
                type: "email",
                minlength: 5,
                maxlength: 22
            },
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
            constraints: {
                required: true,
                type: "password",
                minlength: 8,
                maxlength: 22
            },
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 12
                }
        }
    ];
