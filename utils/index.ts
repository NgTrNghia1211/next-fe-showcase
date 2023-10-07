import { CarCardProps, FilterProps } from "@/types";

const axios = require('axios');

export async function fetchCar(filter: FilterProps) {
    const { manufacturer, year, model, fuel } = filter;

    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: {
          model: model,
          manufacturer: manufacturer,
          year: year,
          fuel: fuel,
        },
        headers: {
          'X-RapidAPI-Key': '0ea7fd0354msheb6b4d6844fdb48p16d6f9jsn92d58739dcd4',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
      };

    const response = await axios.request(options);
    const result = response.data;
    return result;
}

export const calculatingCarRent = (city_mpg: number, year: number) => {
    // Calculate the total number of years since the car was made.
  const age = 2023 - year;

  // Calculate the depreciation rate of the car, which is 10% per year.
  const depreciationRate = age * 0.1;

  // Calculate the base rental price of the car, which is determined by its city MPG.
  let basePrice = 0;
  if (city_mpg < 20) {
    basePrice = 50;
  } else if (city_mpg < 30) {
    basePrice = 75;
  } else if (city_mpg < 40) {
    basePrice = 100;
  } else {
    basePrice = 125;
  }

  // Calculate the total rental price of the car, taking into account depreciation.
  const totalPrice = basePrice * (1 - depreciationRate);

  // Return the total rental price of the car.
  return totalPrice;
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
}

// export const generateCarImage = (car: CarCardProps, angle: string) => {
//   const url = new URL('https://cdn.imgagin.studio/getimage')
// }