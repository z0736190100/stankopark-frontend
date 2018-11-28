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

export default {
    GENERAL:
        [
            {
                component: CustomSelectInputRedux,
                name: "usage",
                id: "usage",
                labelText: "Целевое назначение (группа работ)",
                helperText: "Выберите значение",
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
                errorText: "a model!",
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
                labelText: "Описание",
                helperText: "Опишите назначение станка, указанное в паспорте",
                errorText: "Опишите назначение станка, указанное в паспорте",
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
            labelText: "Напряжение",
            helperText: "Выберите значение",
            startAdornment: "V",
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
            labelText: "Мощность",
            errorText: "Недопустимое значение",
            startAdornment: "W",
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
            labelText: "Рабочее давление системы",
            errorText: "Недопустимое значение",
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
            name: "hVolume",
            id: "hVolume",
            labelText: "Емкость системы",
            errorText: "Недопустимое значение",
            endAdornment: "Кг",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 6
                }

        }
    ],
    PNEUMATICS: [
        {
            component: CustomInputForRedux,
            name: "airPressure",
            id: "airPressure",
            labelText: "Рабочее давление системы",
            errorText: "Недопустимое значение",
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
            labelText: "Потребление за рабочий цикл",
            errorText: "Недопустимое значение",
            endAdornment: "М куб.",
            breakpoints:
                {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
        }
    ]
};
