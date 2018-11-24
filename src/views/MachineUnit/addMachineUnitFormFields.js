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
// KUNG-FUSION: do we really need id, ha?
export default [
    {
        name: "producerBrand",
        id: "producerBrand",
        labelText: "Производитель",
        breakpoints: {
            xs: 12,
            sm: 12,
            md: 4
        }
    },
    {
        name: "model",
        id: "model",
        labelText: "Модель",
        errorText: "a model!",
        breakpoints: {
            xs: 12,
            sm: 12,
            md: 4
        }
    },
    {
        name: "serialNumber",
        id: "serialNumber",
        labelText: "Серийный номер",
        breakpoints: {
            xs: 12,
            sm: 12,
            md: 4
        }
    },
    {
        name: "documentation",
        id: "documentation",
        labelText: "Документация (ссылка на файл)",
        breakpoints: {
            xs: 12,
            sm: 12,
            md: 12
        }
    }
];
