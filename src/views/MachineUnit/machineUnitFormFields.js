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

export default [
  {
    inputProps: {
      name: "producerBrand",
      id: "producerBrand",
      labelText: "Производитель",
      value: ""
    },
    itemBreakpoints: {
      xs: 12,
      sm: 12,
      md: 4
    }
  },
  {
    inputProps: {
      name: "model",
      id: "model",
      labelText: "Модель",
      value: ""
    },
    itemBreakpoints: {
      xs: 12,
      sm: 12,
      md: 4
    }
  },
  {
    inputProps: {
      name: "serialNumber",
      id: "serialNumber",
      labelText: "Серийный номер",
      value: ""
    },
    itemBreakpoints: {
      xs: 12,
      sm: 12,
      md: 4
    }
  },
  {
    inputProps: {
      name: "documentation",
      id: "documentation",
      labelText: "Документация (ссылка на файл)",
      value: ""
    },
    itemBreakpoints: {
      xs: 12,
      sm: 12,
      md: 12
    }
  }
];
