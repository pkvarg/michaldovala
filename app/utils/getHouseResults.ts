import streetAndDistrict from './../json/streetAndDistrict.json';
import districtAndPrice from './../json/districtAndPrice.json';
import roomsAndPrice from './../json/roomsAndPrice.json';

// const streetAndDistrict = require('./../json/streetAndDistrict.json');
// const districtAndPrice = require('./../json/districtAndPrice.json');
// const roomsAndPrice = require('./../json/roomsAndPrice.json');

type CalcValues = {
  street: string;
  countRooms: number;
  countBathrooms: number;
  houseCondition: number;
  squareMeters: number;
  houseType: number;
  hasPool: boolean;
  hasSauna: boolean;
  hasGardenShed: boolean;
  hasGarage: boolean;
  hasBasement: boolean;
  hasTerrace: boolean;
  landType: number;
  landSquareMeters: number;
  builtYear: number;
  hasThermostat: boolean;
  hasAlarm: boolean;
  hasFireAlarm: boolean;
  hasSolarCollectors: boolean;
  hasCameraSystem: boolean;
  hasInternet: boolean;
  hasWell: boolean;
  hasCityWater: boolean;
  hasCitySewerage: boolean;
  hasSeptic: boolean;
  hasElectricity: boolean;
  hasGas: boolean;
  urbanQuality: string;
  hasElectricRadiators: boolean;
  hasHeatPump: boolean;
  hasOther: boolean;
  hasSolidFuel: boolean;
  hasGasBoiler: boolean;
  hasUnderfloorHeating: boolean;
};

export const houseResult = (calcValues: CalcValues) => {
  console.log('HouseRes', calcValues);
  const bratislava = 252524;
  const averageTotalSquareMeterPrice = 3860;
  const averageTotalBratislavaSquareMeterPrice = 4073;
  let districtValueHold: number = 0;
  let roomValueHold: number = 0;
  let bathroomPrice: number = 0;
  let conditionPrice: number = 0;
  let squareMetersPrice: number = 0;
  let averageOfDistrictPlusRoom: number = 0;
  let averageOfRoomPlusBathroom: number = 0;
  let averageOfRoomPlusBathroomConditionAndPriceSquareMetersPrice: number = 0;
  let houseTypePrice: number = 0;
  let landTypePrice: number = 0;
  let landSquareMetersPrice: number = 0;
  let builtYearPrice: number = 0;
  let urbanQualityPrice: number = 0;

  const result: any = [];
  result.push(bratislava);

  const getDistrictPrice = (street: string) => {
    const resdis = streetAndDistrict.find(
      (strt: any) => strt.street === street,
    );
    let district: string | undefined = resdis?.district;
    console.log('district', district);

    const resdisprice = districtAndPrice.find(
      (dsrct: any) => dsrct.district === district,
    );

    let disPrice: number | undefined = resdisprice?.districtPrice;

    console.log('districtPrice', disPrice);
    if (disPrice) districtValueHold = disPrice;
    result.push(disPrice);
    console.log('resArray', result);
  };

  getDistrictPrice(calcValues.street);

  const getRoomPrice = (countRooms: number) => {
    const resroomsprice = roomsAndPrice.find(
      (rooms: any) => parseInt(rooms.rooms) == countRooms,
    );
    const roomsPrice: number | undefined = resroomsprice?.roomsPrice;

    result.push(roomsPrice);
    if (roomsPrice) roomValueHold = roomsPrice;
    console.log(result);
  };

  getRoomPrice(calcValues.countRooms);

  const getBathRoomPrice = (countBathrooms: number) => {
    const getBathroomCoeficient = (countBathrooms: number) => {
      if (countBathrooms === 1) return 0.9;
      if (countBathrooms === 2) return 1;
      if (countBathrooms === 3) return 1.5;
      if (countBathrooms === 4) return 2;
    };

    averageOfDistrictPlusRoom = Math.floor(
      (districtValueHold + roomValueHold) / 2,
    );

    console.log('averageOfDistrictPlusRoom', averageOfDistrictPlusRoom);

    const bathcoef = getBathroomCoeficient(countBathrooms);

    if (bathcoef)
      bathroomPrice = Math.ceil(averageOfDistrictPlusRoom * bathcoef);

    console.log('bathroomPrice', bathroomPrice);
    result.push(bathroomPrice);
  };

  getBathRoomPrice(calcValues.countBathrooms);

  const getConditionPrice = (houseCondition: number) => {
    const getConditionCoeficient = (houseCondition: number) => {
      if (houseCondition === 1) return 1.7;
      if (houseCondition === 2) return 1.2;
      if (houseCondition === 3) return 0.65;
      if (houseCondition === 4) return 0.5;
    };

    averageOfDistrictPlusRoom = (bathroomPrice + roomValueHold) / 2;
    console.log('averageOfDistrictPlusRoom', averageOfDistrictPlusRoom);

    const houseConditionPrice = getConditionCoeficient(houseCondition);

    if (houseConditionPrice) {
      conditionPrice = Math.ceil(
        // hold is current roomsPrice
        averageOfDistrictPlusRoom * houseConditionPrice,
      );
      console.log('conditionPrice', conditionPrice);
      result.push(conditionPrice);
    }
  };

  getConditionPrice(calcValues.houseCondition);

  const getSquareMetersPrice = (squareMeters: number) => {
    squareMetersPrice =
      (squareMeters * averageTotalSquareMeterPrice) / 2 +
      (squareMeters * averageTotalBratislavaSquareMeterPrice) / 2;
    console.log('squareMeterPrice', squareMetersPrice);
    result.push(squareMetersPrice);
    console.log('resArray', result);
  };

  getSquareMetersPrice(calcValues.squareMeters);

  const getHouseTypePrice = (houseType: number) => {
    const getHouseTypePriceCoeficient = (houseType: number) => {
      if (houseType === 1) return 1;
      if (houseType === 2) return 1;
      if (houseType === 3) return 1.2;
      if (houseType === 4) return 2;
    };

    averageOfRoomPlusBathroom = (roomValueHold + bathroomPrice) / 2;

    averageOfRoomPlusBathroomConditionAndPriceSquareMetersPrice =
      (averageOfRoomPlusBathroom + conditionPrice + squareMetersPrice) / 3;

    const housetypecoef = getHouseTypePriceCoeficient(houseType);

    console.log(
      'avvvvv',
      averageOfRoomPlusBathroomConditionAndPriceSquareMetersPrice,
      '3factrs',
      averageOfRoomPlusBathroom,
      conditionPrice,
      squareMetersPrice,
    );

    if (housetypecoef)
      houseTypePrice = Math.floor(
        averageOfRoomPlusBathroomConditionAndPriceSquareMetersPrice *
          housetypecoef,
      );

    console.log('houseTypePrice', houseTypePrice);

    result.push(houseTypePrice);
    console.log('resArray', result);
  };

  getHouseTypePrice(calcValues.houseType);

  const getExtrasPrice = (
    hasPool: boolean,
    hasSauna: boolean,
    hasGardenShed: boolean,
    hasGarage: boolean,
    hasBasement: boolean,
    hasTerrace: boolean,
  ): void => {
    const pool: number = !hasPool
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const sauna: number = !hasSauna
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const gardenShed: number = !hasGardenShed
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const garage: number = !hasGarage
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const basement: number = !hasBasement
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const terrace: number = !hasTerrace
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    console.log('extras', pool, sauna, gardenShed, garage, basement, terrace);
    result.push(pool);
    result.push(sauna);
    result.push(gardenShed);
    result.push(garage);
    result.push(basement);
    result.push(terrace);
    console.log('resArray', result);
  };

  getExtrasPrice(
    calcValues.hasPool,
    calcValues.hasSauna,
    calcValues.hasGardenShed,
    calcValues.hasGarage,
    calcValues.hasBasement,
    calcValues.hasTerrace,
  );

  const getLandTypePrice = (landType: number) => {
    const getLandTypePriceCoeficient = (landType: number) => {
      if (landType === 1) return 1;
      if (landType === 2) return 0.8;
      if (landType === 3) return 0.6;
      if (landType === 4) return 0.6;
    };

    const landtypecoef = getLandTypePriceCoeficient(landType);

    if (landtypecoef) landTypePrice = Math.floor(houseTypePrice * landtypecoef);

    console.log('landTypePrice', landTypePrice);

    result.push(landTypePrice);
    console.log('resArray', result);
  };

  getLandTypePrice(calcValues.landType);

  const getLandSquareMetersPrice = (landSquareMeters: number) => {
    landSquareMetersPrice = Math.floor(
      (landSquareMeters * averageTotalSquareMeterPrice) / 2 / 10 +
        (landSquareMeters * averageTotalBratislavaSquareMeterPrice) / 2 / 10,
    );
    console.log('landSquareMeterPrice', landSquareMetersPrice);
    result.push(landSquareMetersPrice);
    console.log('resArray', result);
  };

  getLandSquareMetersPrice(calcValues.landSquareMeters);

  const getBuiltYearPrice = (builtYear: number) => {
    const assignYearValue = (builtYear: number) => {
      const currentYear = new Date().getFullYear();
      console.log('currentYear is', currentYear);
      if (builtYear >= 2018 && builtYear <= currentYear) return 1;
      if (builtYear >= 2010 && builtYear <= 2017) return 0.9;
      if (builtYear >= 2000 && builtYear <= 2009) return 0.85;
      if (builtYear >= 1989 && builtYear <= 1999) return 0.75;
      if (builtYear >= 1950 && builtYear <= 1988) return 0.5;
      if (builtYear < 1950) return 1;
    };

    const yearvalue = assignYearValue(builtYear);

    if (yearvalue) builtYearPrice = Math.ceil(yearvalue * houseTypePrice);
    console.log('builtYearPrice', builtYearPrice);
    result.push(builtYearPrice);
    console.log('resArray', result);
  };

  getBuiltYearPrice(calcValues.builtYear);

  const getSmartsPrice = (
    hasThermostat: boolean,
    hasAlarm: boolean,
    hasFireAlarm: boolean,
    hasSolarCollectors: boolean,
    hasCameraSystem: boolean,
    hasInternet: boolean,
  ): void => {
    const thermostat: number = !hasThermostat
      ? Math.floor(0.8 * builtYearPrice)
      : Math.floor(1.1 * builtYearPrice);

    const alarm: number = !hasAlarm
      ? Math.floor(0.8 * builtYearPrice)
      : Math.floor(1.1 * builtYearPrice);

    const firealarm: number = !hasFireAlarm
      ? Math.floor(0.8 * builtYearPrice)
      : Math.floor(1.1 * builtYearPrice);

    const solarcollectors: number = !hasSolarCollectors
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1.1 * houseTypePrice);

    const camerasystem: number = !hasCameraSystem
      ? Math.floor(0.8 * builtYearPrice)
      : Math.floor(1.1 * builtYearPrice);

    const internet: number = !hasInternet
      ? Math.floor(0.8 * builtYearPrice)
      : Math.floor(1.1 * builtYearPrice);

    console.log(
      'smarts',
      thermostat,
      alarm,
      firealarm,
      solarcollectors,
      camerasystem,
      internet,
    );
    result.push(thermostat);
    result.push(alarm);
    result.push(firealarm);
    result.push(solarcollectors);
    result.push(camerasystem);
    result.push(internet);
    console.log('resArray', result);
  };

  getSmartsPrice(
    calcValues.hasThermostat,
    calcValues.hasAlarm,
    calcValues.hasFireAlarm,
    calcValues.hasSolarCollectors,
    calcValues.hasCameraSystem,
    calcValues.hasInternet,
  );

  // const getEngineeringPrice = (
  //   hasWell,
  //   hasCityWater,
  //   hasCitySewerage,
  //   hasSeptic,
  //   hasElectricity,
  //   hasGas,
  // ) => {
  //   // ternary
  //   const well = !hasWell
  //     ? Math.floor(0.7 * houseTypePrice)
  //     : Math.floor(1 * houseTypePrice);

  //   const citywater = !hasCityWater
  //     ? Math.floor(0.7 * houseTypePrice)
  //     : Math.floor(1 * houseTypePrice);

  //   const citysewerage = !hasCitySewerage
  //     ? Math.floor(0.7 * houseTypePrice)
  //     : Math.floor(1 * houseTypePrice);

  //   const septic = !hasSeptic
  //     ? Math.floor(0.7 * houseTypePrice)
  //     : Math.floor(1 * houseTypePrice);

  //   const electricity = !hasElectricity
  //     ? Math.floor(0.7 * houseTypePrice)
  //     : Math.floor(1 * houseTypePrice);

  //   const gas = !hasGas
  //     ? Math.floor(0.7 * houseTypePrice)
  //     : Math.floor(1 * houseTypePrice);

  //   console.log(
  //     'engineering',
  //     well,
  //     citywater,
  //     citysewerage,
  //     septic,
  //     electricity,
  //     gas,
  //   );
  //   result.push(well);
  //   result.push(citywater);
  //   result.push(citysewerage);
  //   result.push(septic);
  //   result.push(electricity);
  //   result.push(gas);
  //   console.log('resArray', result);
  // };

  // getEngineeringPrice(
  //   calcValues.hasWell,
  //   calcValues.hasCityWater,
  //   calcValues.hasCitySewerage,
  //   calcValues.hasSeptic,
  //   calcValues.hasElectricity,
  //   calcValues.hasGas,
  // );

  const getEngineeringPrice = (
    hasWell: boolean,
    hasCityWater: boolean,
    hasCitySewerage: boolean,
    hasSeptic: boolean,
    hasElectricity: boolean,
    hasGas: boolean,
  ): void => {
    const well: number = !hasWell
      ? Math.floor(0.7 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const citywater: number = !hasCityWater
      ? Math.floor(0.7 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const citysewerage: number = !hasCitySewerage
      ? Math.floor(0.7 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const septic: number = !hasSeptic
      ? Math.floor(0.7 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const electricity: number = !hasElectricity
      ? Math.floor(0.7 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    const gas: number = !hasGas
      ? Math.floor(0.7 * houseTypePrice)
      : Math.floor(1 * houseTypePrice);

    console.log(
      'engineering',
      well,
      citywater,
      citysewerage,
      septic,
      electricity,
      gas,
    );
    result.push(well);
    result.push(citywater);
    result.push(citysewerage);
    result.push(septic);
    result.push(electricity);
    result.push(gas);
    console.log('resArray', result);
  };

  getEngineeringPrice(
    calcValues.hasWell,
    calcValues.hasCityWater,
    calcValues.hasCitySewerage,
    calcValues.hasSeptic,
    calcValues.hasElectricity,
    calcValues.hasGas,
  );

  const getUrbanQualityPrice = (urbanQuality: string) => {
    console.log('uV', urbanQuality);
    const getUrbanQualityCoeficient = (urbanQuality: string) => {
      if (urbanQuality === 'excellent') return 1;
      if (urbanQuality === 'average') return 0.9;
      if (urbanQuality === 'poor') return 0.75;
    };

    const urbanQualityCoeficient = getUrbanQualityCoeficient(urbanQuality);

    if (urbanQualityCoeficient) {
      urbanQualityPrice = Math.floor(urbanQualityCoeficient * houseTypePrice);
      console.log('urbanQualityPrice', urbanQualityPrice);
      result.push(urbanQualityPrice);
      console.log('resArray', result);
    }
  };

  getUrbanQualityPrice(calcValues.urbanQuality);

  // const getHeatingTypePrice = (
  //   hasElectricRadiators,
  //   hasHeatPump,
  //   hasOther,
  //   hasSolidFuel,
  //   hasGasBoiler,
  //   hasUnderfloorHeating,
  // ) => {
  //   // ternary

  //   const electricradiators = !hasElectricRadiators
  //     ? Math.floor(0.8 * houseTypePrice)
  //     : Math.floor(1.2 * houseTypePrice);

  //   const heatpump = !hasHeatPump
  //     ? Math.floor(0.8 * houseTypePrice)
  //     : Math.floor(1.2 * houseTypePrice);

  //   const other = !hasOther
  //     ? Math.floor(0.8 * houseTypePrice)
  //     : Math.floor(1.2 * houseTypePrice);

  //   const solidfuel = !hasSolidFuel
  //     ? Math.floor(0.8 * houseTypePrice)
  //     : Math.floor(1.2 * houseTypePrice);

  //   const gasboiler = !hasGasBoiler
  //     ? Math.floor(0.8 * houseTypePrice)
  //     : Math.floor(1.2 * houseTypePrice);

  //   const underfloorheating = !hasUnderfloorHeating
  //     ? Math.floor(0.8 * houseTypePrice)
  //     : Math.floor(1.2 * houseTypePrice);

  //   console.log(
  //     'heatingTypes',
  //     electricradiators,
  //     heatpump,
  //     other,
  //     solidfuel,
  //     gasboiler,
  //     underfloorheating,
  //   );
  //   result.push(electricradiators);
  //   result.push(heatpump);
  //   result.push(other);
  //   result.push(solidfuel);
  //   result.push(gasboiler);
  //   result.push(underfloorheating);
  //   console.log('resArray', result);
  // };

  // getHeatingTypePrice(
  //   calcValues.hasElectricRadiators,
  //   calcValues.hasHeatPump,
  //   calcValues.hasOther,
  //   calcValues.hasSolidFuel,
  //   calcValues.hasGasBoiler,
  //   calcValues.hasUnderfloorHeating,
  // );

  const getHeatingTypePrice = (
    hasElectricRadiators: boolean,
    hasHeatPump: boolean,
    hasOther: boolean,
    hasSolidFuel: boolean,
    hasGasBoiler: boolean,
    hasUnderfloorHeating: boolean,
  ): void => {
    const electricradiators: number = !hasElectricRadiators
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1.2 * houseTypePrice);

    const heatpump: number = !hasHeatPump
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1.2 * houseTypePrice);

    const other: number = !hasOther
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1.2 * houseTypePrice);

    const solidfuel: number = !hasSolidFuel
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1.2 * houseTypePrice);

    const gasboiler: number = !hasGasBoiler
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1.2 * houseTypePrice);

    const underfloorheating: number = !hasUnderfloorHeating
      ? Math.floor(0.8 * houseTypePrice)
      : Math.floor(1.2 * houseTypePrice);

    console.log(
      'heatingTypes',
      electricradiators,
      heatpump,
      other,
      solidfuel,
      gasboiler,
      underfloorheating,
    );
    result.push(electricradiators);
    result.push(heatpump);
    result.push(other);
    result.push(solidfuel);
    result.push(gasboiler);
    result.push(underfloorheating);
    console.log('resArray', result);
  };

  getHeatingTypePrice(
    calcValues.hasElectricRadiators,
    calcValues.hasHeatPump,
    calcValues.hasOther,
    calcValues.hasSolidFuel,
    calcValues.hasGasBoiler,
    calcValues.hasUnderfloorHeating,
  );

  const calculateAverage = (array: any) => {
    if (array.length === 0) {
      return 0;
    }
    const sum = array.reduce((acc: any, value: any) => acc + value, 0);
    const average = sum / array.length;
    return average;
  };
  const averageOfAll = calculateAverage(result);
  let withProvision = Math.floor(averageOfAll);
  let price = Math.round(withProvision / 1000) * 1000;

  return {
    price,
  };
};

const testValues = {
  street: 'Galvaniho ulica',
  countRooms: 5,
  countBathrooms: 1,
  houseCondition: 1,
  squareMeters: 123,
  houseType: 2,
  hasPool: false,
  hasSauna: false,
  hasGardenShed: false,
  hasGarage: true,
  hasBasement: true,
  hasTerrace: true,
  landType: 1,
  landSquareMeters: 500,
  builtYear: 2018,
  hasThermostat: false,
  hasAlarm: false,
  hasFireAlarm: false,
  hasSolarCollectors: false,
  hasCameraSystem: false,
  hasInternet: true,
  hasWell: false,
  hasCityWater: true,
  hasCitySewerage: true,
  hasSeptic: true,
  hasElectricity: true,
  hasGas: true,
  urbanQuality: 'poor',
  hasElectricRadiators: false,
  hasHeatPump: false,
  hasOther: false,
  hasSolidFuel: true,
  hasGasBoiler: true,
  hasUnderfloorHeating: true,
};

//houseResult(testValues);
