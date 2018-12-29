/**
 * mandatory fields
 *
 * наличие нагревательных элементов
 * - тип (слект)
 * - мощность
 * - напряжение
 * - описание (пространственные характеристики, количество)
 *
 *
 *
 * arbitrary fields:
 *
 * производительность в смену
 * время рабочего цикла
 * количество персонала
 *
 *
 */
import CustomSelectInputRedux from "components/CustomInput/CustomSelectInputRedux.jsx";
import CustomInputForRedux from "components/CustomInput/CustomInputForRedux.jsx"

// KUNG-FUSION: do we really need id, ha?

const USAGE_MENU_VALUES = [
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

const VOLTAGE_MENU_VALUES = [
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

const THERMO_TYPE_VALUES = [
    {
        value: "Спираль",
        text: "Спираль"
    },
    {
        value: "Плоский ТЭН",
        text: "Плоский ТЭН"
    },
    {
        value: "Пальчиковый ТЭН",
        text: "Пальчиковый ТЭН"
    },
    {
        value: "Лампа",
        text: "Лампа"
    }
];
const THERMO_VOLTAGE_MENU_VALUES = [
    {
        value: 220,
        text: 220
    },
    {
        value: 380,
        text: 380
    }
];

export default {
    GENERAL:
        [
            {
                component: CustomSelectInputRedux,
                name: "usage",
                id: "usage",
                labelText: "Целевое назначение (группа работ)",
                helperText: "Выберите значение",
                tooltipText: "Подсказка: целевое назначение соответствует производственному участку, на котором размещено оборудование.",
                menuValues: USAGE_MENU_VALUES,
                breakpoints: {
                    xs: 12,
                    sm: 12,
                    md: 12
                }

            },

            {
                component: CustomInputForRedux,
                name: "producerBrand",
                id: "producerBrand",
                labelText: "Производитель",
                tooltipText: "Введите название завода-изготовителя или то слово, которое на корпусе станка написано САМЫМИ БОЛЬШИМИ БУКВАМИ",
                breakpoints: {
                    xs: 12,
                    sm: 12,
                    md: 4
                }
            },
            {
                component: CustomInputForRedux,
                name: "model",
                id: "model",
                labelText: "Модель",
                tooltipText: "Модель станка согласно паспорту или шилдику на корпусе. Может содержать буквы и цифры.",
                breakpoints:
                    {
                        xs: 12,
                        sm: 12,
                        md: 4
                    }
            }
            ,
            {
                component: CustomInputForRedux,
                name: "serialNumber",
                id: "serialNumber",
                labelText: "Серийный номер",
                tooltipText: "Серийный номер станка согласно паспорту или шилдику на корпусе. Может содержать буквы и цифры.",
                breakpoints:
                    {
                        xs: 12,
                        sm: 12,
                        md: 4
                    }
            },
            {
                component: CustomInputForRedux,
                name: "documentationLink",
                id: "documentationLink",
                labelText: "Документация (ссылка на файл)",
                tooltipText:"Скоро здесь будет drag'n'drop, а пока скопируйте ссылку на файл в окне Проводника. Или впишите \"нет\".",
                breakpoints:
                    {
                        xs: 12,
                        sm: 12,
                        md: 12
                    }
            },
            {
                component: CustomInputForRedux,
                name: "description",
                id: "description",
                labelText: "Описание (? технологические операции)",
                helperText: "Опишите назначение станка, указанное в паспорте.",
                tooltipText:"Ну, придумайте что-нибудь. Буквы и цифры. Можно. Может содержать перечень технологических операций из общего справочника технологических операций.",
                breakpoints:
                    {
                        xs: 12,
                        sm: 12,
                        md: 12
                    }

            },

        ],
    ELECTRICS: [
        {
            component: CustomSelectInputRedux,
            name: "voltage",
            id: "voltage",
            type: "number",
            labelText: "Напряжение",
            helperText: "Выберите значение",
            endAdornment: "V  ",
            menuValues: VOLTAGE_MENU_VALUES,
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 4
                }

        },
        {
            component: CustomInputForRedux,
            name: "power",
            id: "power",
            type: "number",
            labelText: "Мощность",
            errorText: "Недопустимое значение",
            tooltipText:"Может содержать только цифры. СУММАРНАЯ мощность ВСЕХ потребляющих устройств согласно документации на оборудование или маркировке на шильдиках.",
            endAdornment: "W  ",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 4
                }
        }
    ],
    HYDRAULICS: [
        {
            component: CustomInputForRedux,
            name: "hPressure",
            id: "hPressure",
            type: "number",
            labelText: "Рабочее давление системы",
            errorText: "Недопустимое значение",
            tooltipText:"Может содержать только цифры. Согласно документации на оборудование или маркировке на шильдиках.",
            endAdornment: "КПа",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 4
                }

        },
        {
            component: CustomInputForRedux,
            name: "hVolume",
            id: "hVolume",
            type: "number",
            labelText: "Емкость системы",
            tooltipText:"Может содержать только цифры. СУММАРНАЯ емкость ВСЕХ потребляющих устройств согласно документации на оборудование или маркировке на шильдиках.",
            errorText: "Недопустимое значение",
            endAdornment: "Кг",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 4
                }

        },
        {
            component: CustomInputForRedux,
            name: "oilType",
            id: "oilType",
            labelText: "Марка масла",
            errorText: "Недопустимое значение",
            tooltipText:"Согласно рекомендациям в документации на оборудование.",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 4
                }

        }
    ],
    PNEUMATICS: [
        {
            component: CustomInputForRedux,
            name: "airPressure",
            id: "airPressure",
            type: "number",
            labelText: "Рабочее давление системы",
            errorText: "Недопустимое значение",
            tooltipText:"Может содержать только цифры. Согласно документации на оборудование или маркировке на шильдиках.",
            endAdornment: "КПа",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
        },
        {
            component: CustomInputForRedux,
            name: "airConsumptionPerCycle",
            id: "airConsumptionPerCycle",
            type: "number",
            labelText: "Потребление за рабочий цикл",
            tooltipText:"Может содержать только цифры. СУММАРНАЯ емкость ВСЕХ потребляющих устройств согласно документации на оборудование или маркировке на шильдиках.",
            errorText: "Недопустимое значение",
            endAdornment: "М куб.",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
        }
    ],
    THERMO: [
        // type of thermo-element, geometric characteristics, voltage, power-consumption, number of elements
        {
            component: CustomSelectInputRedux,
            name: "thermo_type",
            id: "thermo_type",
            type: "text",
            labelText: "Тип термоэлемента",
            helperText: "Выберите значение",
            menuValues: THERMO_TYPE_VALUES,
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 6
                }

        },
        {
            component: CustomInputForRedux,
            name: "thermo_unit_param",
            id: "thermo_unit_param",
            type: "text",
            labelText: "Характеристики термоэлемента",
            errorText: "Недопустимое значение",
            tooltipText:"Может содержать текст и цифры. Укажите пространственные характеристики термоэлемента",
            endAdornment: "W  ",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
        },
        {
            component: CustomSelectInputRedux,
            name: "thermo_unit_voltage",
            id: "thermo_unit_voltage",
            type: "number",
            labelText: "Напряжение",
            helperText: "Выберите значение",
            endAdornment: "V  ",
            menuValues: THERMO_VOLTAGE_MENU_VALUES,
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 4
                }

        },
        {
            component: CustomInputForRedux,
            name: "thermo_unit_power",
            id: "thermo_unit_power",
            type: "number",
            labelText: "Мощность",
            errorText: "Недопустимое значение",
            tooltipText:"Может содержать только цифры. Укажите мощность термоэлемента",
            endAdornment: "W  ",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 4
                }
        },
        {
            component: CustomInputForRedux,
            name: "thermo_unit_number",
            id: "thermo_unit_number",
            type: "number",
            labelText: "Количество термоэлементов",
            errorText: "Недопустимое значение",
            tooltipText:"Укажите общее количество термоэлементов.",
            endAdornment: "шт.",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 4
                }
        }
    ]
};
