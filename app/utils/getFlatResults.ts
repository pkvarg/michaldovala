import streetAndDistrict from './../json/streetAndDistrict.json';
import districtAndPrice from './../json/districtAndPrice.json';
import roomsAndPrice from './../json/roomsAndPrice.json';
import floorCountAndValue from './../json/floorCountAndValue.json';
import floorNumberAndValue from './../json/floorNumberAndValue.json';
import buildingCondition from './../json/buildingCondition.json';
import smartHome from './../json/smartHome.json';

// const streetAndDistrict = require('./../json/streetAndDistrict.json');
// const districtAndPrice = require('./../json/districtAndPrice.json');
// const roomsAndPrice = require('./../json/roomsAndPrice.json');
// const floorCountAndValue = require('./../json/floorCountAndValue.json');
// const floorNumberAndValue = require('./../json/floorNumberAndValue.json');
// const buildingCondition = require('./../json/buildingCondition.json');
// const smartHome = require('./../json/smartHome.json');

type CalcValues = {
  city: string;
  street: string;
  houseNumber: string;
  countRooms: number;
  houseCondition: number;
  squareMeters: number;
  allFloorsCount: number;
  currentFloorNumber: number;
  hasElevator: string;
  hasBalcony: boolean;
  hasLoggia: boolean;
  hasTerrace: boolean;
  hasBasement: boolean;
  hasGarage: boolean;
  hasParking: boolean;
  builtYear: number;
  hasIsolation: boolean;
  hasNewElevator: boolean;
  hasNewWindows: boolean;
  hasNewInstallations: boolean;
  hasThermostat: boolean;
  hasInternet: boolean;
  hasAlarm: boolean;
  hasAirCon: boolean;
  urbanQuality: string;
};

export const result = (calcValues: CalcValues) => {
  const bratislava = 235643;
  const averageTotalSquareMeterPrice = 3676;
  const averageTotalBratislavaSquareMeterPrice = 3520;
  let holdValue: number = 0;
  let districtValueHold: number = 0;
  let roomsPrice: number = 0;
  let averageOfDistrictPlusRoom: number = 0;
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
    if (resroomsprice) roomsPrice = resroomsprice.roomsPrice;

    result.push(roomsPrice);

    console.log(result);
  };

  getRoomPrice(calcValues.countRooms);

  const getConditionPrice = (houseCondition: number) => {
    const getConditionCoeficient = (houseCondition: number) => {
      if (houseCondition === 1) return 1.7;
      if (houseCondition === 2) return 1.2;
      if (houseCondition === 3) return 0.65;
      if (houseCondition === 4) return 0.5;
    };

    averageOfDistrictPlusRoom = (districtValueHold + roomsPrice) / 2;
    console.log('averageOfDistrictPlusRoom', averageOfDistrictPlusRoom);

    const houseConditionPrice = getConditionCoeficient(houseCondition);

    if (houseConditionPrice) {
      const conditionPrice = Math.ceil(
        // hold is current roomsPrice
        averageOfDistrictPlusRoom * houseConditionPrice,
      );
      console.log('conditionPrice', conditionPrice);
      result.push(conditionPrice);
    }
  };

  getConditionPrice(calcValues.houseCondition);

  const getSquareMetersPrice = (squareMeters: number) => {
    const squareMetersPrice =
      (squareMeters * averageTotalSquareMeterPrice) / 2 +
      (squareMeters * averageTotalBratislavaSquareMeterPrice) / 2;
    console.log('squareMeterPrice', squareMetersPrice);
    result.push(squareMetersPrice);
    console.log('resArray', result);
  };

  getSquareMetersPrice(calcValues.squareMeters);

  const getFloorCountPrice = (allFloorsCount: number) => {
    const assignFloors = (allFloorsCount: number) => {
      if (allFloorsCount > 0 && allFloorsCount <= 4) return 4;
      if (allFloorsCount > 4 && allFloorsCount <= 12) return 12;
      if (allFloorsCount > 12 && allFloorsCount <= 19) return 19;
      if (allFloorsCount > 19 && allFloorsCount <= 100) return 20;
    };
    const floorsCounted = assignFloors(allFloorsCount);
    const resfloorcountvalue = floorCountAndValue.find(
      (flrCnt: any) => flrCnt.floorCount == floorsCounted,
    );
    const floorCountValue = resfloorcountvalue?.floorCountValue;
    let newAverage = (averageOfDistrictPlusRoom + result[3] + result[4]) / 3;
    holdValue = newAverage;
    if (floorCountValue) {
      const floorCountPrice = Math.ceil(holdValue * floorCountValue);
      console.log('floorCountPrice', floorCountPrice);
      result.push(floorCountPrice);
      console.log('resArray', result);
    }
  };

  getFloorCountPrice(calcValues.allFloorsCount);

  const getCurrentFloorPrice = (currentFloorNumber: number) => {
    const assignCurrentFloor = (currentFloorNumber: number) => {
      if (currentFloorNumber == 0 || currentFloorNumber == 1) return 0;
      if (currentFloorNumber > 1 && currentFloorNumber <= 12) return 2;
      if (currentFloorNumber > 12 && currentFloorNumber <= 19) return 13;
      if (currentFloorNumber > 19 && currentFloorNumber <= 100) return 20;
    };
    const currentFloorAssigned = assignCurrentFloor(currentFloorNumber);
    const flV = floorNumberAndValue.find(
      (flr: any) => flr.floorNumber == currentFloorAssigned,
    );

    console.log('flvl', flV);
    const resfloornumbervalue = floorNumberAndValue.find(
      (flr: any) => flr.floorNumber == currentFloorAssigned,
    );
    const floorNumberValue = resfloornumbervalue?.floorNumberValue;

    if (floorNumberValue) {
      const currentFloorPrice = Math.ceil(holdValue * floorNumberValue);
      console.log('currentfloorPrice', currentFloorPrice);
      result.push(currentFloorPrice);
      console.log('resArray', result);
    }
  };

  getCurrentFloorPrice(calcValues.currentFloorNumber);

  const getElevatorPrice = (hasElevator: string) => {
    let hasElevatorPrice;
    if (hasElevator === 'hasElevator') {
      hasElevatorPrice = holdValue;
    }
    if (hasElevator === 'noElevator') {
      hasElevatorPrice = holdValue - 10000;
    }
    console.log('hasElevatorPrice', hasElevatorPrice);
    result.push(hasElevatorPrice);
    console.log('resArray', result);
  };

  getElevatorPrice(calcValues.hasElevator);

  const getBalconyPrice = (
    hasBalcony: boolean,
    hasLoggia: boolean,
    hasTerrace: boolean,
    hasBasement: boolean,
  ) => {
    let balcony = Math.ceil(0.8 * holdValue);
    let loggia = Math.ceil(0.8 * holdValue);
    let terrace = Math.ceil(0.8 * holdValue);
    let basement = Math.ceil(0.8 * holdValue);
    if (hasBalcony) balcony = holdValue;
    if (hasLoggia) loggia = holdValue;
    if (hasTerrace) terrace = holdValue;
    if (hasBasement) basement = holdValue;
    console.log('balcony', balcony, loggia, terrace, basement);
    result.push(balcony);
    result.push(loggia);
    result.push(terrace);
    result.push(basement);
    console.log('resArray', result);
  };

  getBalconyPrice(
    calcValues.hasBalcony,
    calcValues.hasLoggia,
    calcValues.hasTerrace,
    calcValues.hasBasement,
  );

  const getParkingPrice = (hasGarage: boolean, hasParking: boolean) => {
    let garage = Math.ceil(0.8 * holdValue);
    let parking = Math.ceil(0.8 * holdValue);
    if (hasGarage) garage = holdValue;
    if (hasParking) parking = holdValue;
    console.log('parking', garage, parking);
    result.push(garage);
    result.push(parking);
    console.log('resArray', result);
  };

  getParkingPrice(calcValues.hasGarage, calcValues.hasParking);

  const getBuiltYearPrice = (builtYear: number) => {
    const assignYearValue = (builtYear: number) => {
      const currentYear = new Date().getFullYear();
      console.log('currentYear is', currentYear);
      // miesto 2023 dnesny rok
      if (builtYear >= 2018 && builtYear <= currentYear) return 1;
      if (builtYear >= 2010 && builtYear <= 2017) return 0.9;
      if (builtYear >= 2000 && builtYear <= 2009) return 0.85;
      if (builtYear >= 1991 && builtYear <= 1999) return 0.75;
      if (builtYear >= 1950 && builtYear <= 1990) return 0.5;
      if (builtYear < 1950) return 1;
    };

    const yearValuePrice = assignYearValue(builtYear);

    if (yearValuePrice) {
      const builtYearPrice = Math.ceil(yearValuePrice * holdValue);
      console.log('builtYearPrice', builtYearPrice);
      result.push(builtYearPrice);
      console.log('resArray', result);
    }
  };

  getBuiltYearPrice(calcValues.builtYear);

  const getBuildingConditionPrice = (
    hasIsolation: boolean,
    hasNewElevator: boolean,
    hasNewWindows: boolean,
    hasNewInstallations: boolean,
  ) => {
    const isolation = hasIsolation ? 'hasIsolation' : 'noIsolation';
    const elevator = hasNewElevator ? 'hasNewElevator' : 'noNewElevator';
    const windows = hasNewWindows ? 'hasNewWindows' : 'noNewWindows';
    const installations = hasNewInstallations
      ? 'hasNewInstallations'
      : 'noNewInstallations';

    const getCondition = (aspect: string) =>
      buildingCondition.find((cnd: any) => cnd.condition === aspect);

    const isocondition = getCondition(isolation)?.condValue;

    if (isocondition) {
      const isolationResult = Math.ceil(isocondition * holdValue);
      result.push(isolationResult);
    }

    const elecondition = getCondition(elevator)?.condValue;

    if (elecondition) {
      const elevatorResult = Math.ceil(elecondition * holdValue);
      result.push(elevatorResult);
    }

    const wincondition = getCondition(windows)?.condValue;

    if (wincondition) {
      const windowsResult = Math.ceil(wincondition * holdValue);
      result.push(windowsResult);
    }

    const instcondition = getCondition(installations)?.condValue;

    if (instcondition) {
      const installationsResult = Math.ceil(instcondition * holdValue);

      result.push(installationsResult);
    }

    console.log('buildingCondResults', ...result);
    console.log('resArray', result);
  };

  const conditionPriceResults = getBuildingConditionPrice(
    calcValues.hasIsolation,
    calcValues.hasNewElevator,
    calcValues.hasNewWindows,
    calcValues.hasNewInstallations,
  );

  const getSmartHomePrice = (
    hasThermostat: boolean,
    hasInternet: boolean,
    hasAlarm: boolean,
    hasAirCon: boolean,
  ) => {
    const thermostat = hasThermostat ? 'hasThermostat' : 'noThermostat';
    const internet = hasInternet ? 'hasInternet' : 'noInternet';
    const alarm = hasAlarm ? 'hasAlarm' : 'noAlarm';
    const aircon = hasAirCon ? 'hasAirCon' : 'noAirCon';

    const getCondition = (aspect: string) =>
      smartHome.find((cnd: any) => cnd.smartHome === aspect);

    const thermresult = getCondition(thermostat)?.smartValue;

    if (thermresult) {
      const thermostatResult = Math.ceil(thermresult * holdValue);
      result.push(thermostatResult);
    }

    const intresult = getCondition(internet)?.smartValue;
    if (intresult) {
      const internetResult = Math.ceil(intresult * holdValue);
      result.push(internetResult);
    }

    const alresult = getCondition(alarm)?.smartValue;
    if (alresult) {
      const alarmResult = Math.ceil(alresult * holdValue);
      result.push(alarmResult);
    }
    const airresult = getCondition(aircon)?.smartValue;
    if (airresult) {
      const airconResult = Math.ceil(airresult * holdValue);
      result.push(airconResult);
    }

    console.log('smartResults', ...result);
    console.log('resArray', result);
  };

  const smartHomePriceResults = getSmartHomePrice(
    calcValues.hasThermostat,
    calcValues.hasInternet,
    calcValues.hasAlarm,
    calcValues.hasAirCon,
  );

  const getUrbanQualityPrice = (urbanQuality: string) => {
    console.log('uV', urbanQuality, holdValue);
    const getUrbanQualityCoeficient = (urbanQuality: string) => {
      if (urbanQuality === 'excellent') return 1;
      if (urbanQuality === 'average') return 0.9;
      if (urbanQuality === 'poor') return 0.75;
    };

    const urbanQualityCoeficient = getUrbanQualityCoeficient(urbanQuality);

    if (urbanQualityCoeficient) {
      const urbanQualityPrice = urbanQualityCoeficient * holdValue;
      console.log('urbanQualityPrice', urbanQualityPrice);
      result.push(urbanQualityPrice);
      console.log('resArray', result);
    }
  };

  getUrbanQualityPrice(calcValues.urbanQuality);

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

// TEST VALUES
const testValues = {
  city: 'Bratislava',
  street: 'Muškátová ulica',
  countRooms: 1,
  houseCondition: 4,
  squareMeters: 36,
  allFloorsCount: 5,
  currentFloorNumber: 2,
  hasElevator: 'hasElevator',
  hasBalcony: false,
  hasLoggia: false,
  hasTerrace: false,
  hasBasement: false,
  hasGarage: false,
  hasParking: false,
  builtYear: 1988,
  hasIsolation: true,
  hasNewElevator: true,
  hasNewWindows: true,
  hasNewInstallations: true,
  hasThermostat: false,
  hasInternet: true,
  hasAlarm: false,
  hasAirCon: false,
  urbanQuality: 'excellent',

  houseNumber: '1',
  monthlyCosts: '200',
  price: 88000,
};

//result(testValues);
