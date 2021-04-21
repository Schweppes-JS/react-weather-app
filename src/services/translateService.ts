export const translateService = (type: string, code: string): string => {

  const languages: {[key: string]: {[key: string]: string}} = {
    "headline" : {
      "en": "Current Weather",
      "ru": "Текущая погода",
      "ua": "Поточна погода"
    },
    "placeholder" : {
      "en": "Enter the city",
      "ru": "Введите город",
      "ua": "Введіть місто"
    },
    "searchError" : {
      "en": "Incorrect city",
      "ru": "Неверно введен город",
      "ua": "Невірно введене місто"
    },
    "geolocationError" : {
      "en": "User denied geolocation prompt",
      "ru": "Пользователь запретил доступ к геолокации",
      "ua": "Користувач заборонив доступ до геолокації"
    },
    
  }

  return languages[type][code];
}