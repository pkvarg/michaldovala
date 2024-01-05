import streetAndDistrict from './../json/streetAndDistrict.json';
import districtAndPrice from './../json/districtAndPrice.json';
import roomsAndPrice from './../json/roomsAndPrice.json';
import floorCountAndValue from './../json/floorCountAndValue.json';
import floorNumberAndValue from './../json/floorNumberAndValue.json';
import buildingCondition from './../json/buildingCondition.json';
import smartHome from './../json/smartHome.json';

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
  const bratislava = 252524;
  const averageTotalSquareMeterPrice = 3860;
  const averageTotalBratislavaSquareMeterPrice = 4073;
  let holdValue: number;
  let districtValueHold: number | undefined;
  let roomValueHold: number | undefined;
  let averageOfDistrictPlusRoom: number;
  const result: any = [];
  result.push(bratislava);

  const getDistrictPrice = (street: string) => {
    // kedy district = spolu?
    const resdis = streetAndDistrict.find((strt) => strt.street === street);
    let district: string | undefined = resdis?.district;
    console.log('district', district);

    const resdisprice = districtAndPrice.find(
      (dsrct) => dsrct.district === district,
    );

    let disPrice: number | undefined = resdisprice?.districtPrice;

    console.log('districtPrice', disPrice);
    districtValueHold = disPrice;
    result.push(disPrice);
    console.log('resArray', result);
  };

  getDistrictPrice(calcValues.street);

  const getRoomPrice = (countRooms: number) => {
    const resroomsprice = roomsAndPrice.find(
      (rooms) => parseInt(rooms.rooms) == countRooms,
    );
    const roomsPrice: number | undefined = resroomsprice?.roomsPrice;

    result.push(roomsPrice);
    roomValueHold = roomsPrice;
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

    if (districtValueHold && roomValueHold)
      averageOfDistrictPlusRoom = (districtValueHold + roomValueHold) / 2;
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
      (flrCnt) => flrCnt.floorCount == floorsCounted,
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
      (flr) => flr.floorNumber == currentFloorAssigned,
    );

    console.log('flvl', flV);
    const resfloornumbervalue = floorNumberAndValue.find(
      (flr) => flr.floorNumber == currentFloorAssigned,
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
      if (builtYear >= 1989 && builtYear <= 1999) return 0.75;
      if (builtYear >= 1950 && builtYear <= 1988) return 0.5;
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

  // const getBuildingConditionPrice = (
  //   hasIsolation: boolean,
  //   hasNewElevator: boolean,
  //   hasNewWindows: boolean,
  //   hasNewInstallations: boolean,
  // ) => {
  //   let isolation: string;
  //   let elevator: string;
  //   let windows: string;
  //   let installations: string;
  //   if (hasIsolation) isolation = 'hasIsolation';
  //   if (!hasIsolation) isolation = 'noIsolation';
  //   if (hasNewElevator) elevator = 'hasNewElevator';
  //   if (!hasNewElevator) elevator = 'noNewElevator';
  //   if (hasNewWindows) windows = 'hasNewWindows';
  //   if (!hasNewWindows) windows = 'noNewWindows';
  //   if (hasNewInstallations) installations = 'hasNewInstallations';
  //   if (!hasNewInstallations) installations = 'noNewInstallations';

  //   const getCondition = (aspect: string) =>
  //     buildingCondition.find((cnd) => cnd.condition == aspect);

  //   const isolationResult = Math.ceil(
  //     getCondition(isolation).condValue * holdValue,
  //   );
  //   const elevatorResult = Math.ceil(
  //     getCondition(elevator).condValue * holdValue,
  //   );
  //   const windowsResult = Math.ceil(
  //     getCondition(windows).condValue * holdValue,
  //   );
  //   const installationsResult = Math.ceil(
  //     getCondition(installations).condValue * holdValue,
  //   );
  //   console.log(
  //     'buildingCondResults',
  //     isolationResult,
  //     elevatorResult,
  //     windowsResult,
  //     installationsResult,
  //   );
  //   result.push(isolationResult);
  //   result.push(elevatorResult);
  //   result.push(windowsResult);
  //   result.push(installationsResult);
  //   console.log('resArray', result);
  // };

  // getBuildingConditionPrice(
  //   calcValues.hasIsolation,
  //   calcValues.hasNewElevator,
  //   calcValues.hasNewWindows,
  //   calcValues.hasNewInstallations,
  // );

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
      buildingCondition.find((cnd) => cnd.condition === aspect);

    const isolationResult = Math.ceil(
      getCondition(isolation)?.condValue ?? 0 * holdValue,
    );
    const elevatorResult = Math.ceil(
      getCondition(elevator)?.condValue ?? 0 * holdValue,
    );
    const windowsResult = Math.ceil(
      getCondition(windows)?.condValue ?? 0 * holdValue,
    );
    const installationsResult = Math.ceil(
      getCondition(installations)?.condValue ?? 0 * holdValue,
    );

    // const result: number[] = [
    //   isolationResult,
    //   elevatorResult,
    //   windowsResult,
    //   installationsResult,
    // ];

    result.push(isolationResult);
    result.push(elevatorResult);
    result.push(windowsResult);
    result.push(installationsResult);

    console.log('buildingCondResults', ...result);
    console.log('resArray', result);

    //return result;
  };

  const conditionPriceResults = getBuildingConditionPrice(
    calcValues.hasIsolation,
    calcValues.hasNewElevator,
    calcValues.hasNewWindows,
    calcValues.hasNewInstallations,
  );

  // const getSmartHomePrice = (
  //   hasThermostat: boolean,
  //   hasInternet: boolean,
  //   hasAlarm: boolean,
  //   hasAirCon: boolean,
  // ) => {
  //   let thermostat;
  //   let internet;
  //   let alarm;
  //   let aircon;
  //   if (hasThermostat) thermostat = 'hasThermostat';
  //   if (!hasThermostat) thermostat = 'noThermostat';
  //   if (hasInternet) internet = 'hasInternet';
  //   if (!hasInternet) internet = 'noInternet';
  //   if (hasAlarm) alarm = 'hasAlarm';
  //   if (!hasAlarm) alarm = 'noAlarm';
  //   if (hasAirCon) aircon = 'hasAirCon';
  //   if (!hasAirCon) aircon = 'noAirCon';

  //   const getCondition = (aspect) =>
  //     smartHome.find((cnd) => cnd.smartHome == aspect);

  //   const thermostatResult = Math.ceil(
  //     getCondition(thermostat).smartValue * holdValue,
  //   );
  //   const internetResult = Math.ceil(
  //     getCondition(internet).smartValue * holdValue,
  //   );
  //   const alarmResult = Math.ceil(getCondition(alarm).smartValue * holdValue);
  //   const airconResult = Math.ceil(getCondition(aircon).smartValue * holdValue);

  //   console.log(
  //     'smartResults',
  //     thermostatResult,
  //     internetResult,
  //     alarmResult,
  //     airconResult,
  //   );
  //   result.push(thermostatResult);
  //   result.push(internetResult);
  //   result.push(alarmResult);
  //   result.push(airconResult);
  //   console.log('resArray', result);
  // };

  // getSmartHomePrice(
  //   calcValues.hasThermostat,
  //   calcValues.hasInternet,
  //   calcValues.hasAlarm,
  //   calcValues.hasAirCon,
  // );

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
      smartHome.find((cnd) => cnd.smartHome === aspect);

    const thermostatResult = Math.ceil(
      getCondition(thermostat)?.smartValue ?? 0 * holdValue,
    );
    const internetResult = Math.ceil(
      getCondition(internet)?.smartValue ?? 0 * holdValue,
    );
    const alarmResult = Math.ceil(
      getCondition(alarm)?.smartValue ?? 0 * holdValue,
    );
    const airconResult = Math.ceil(
      getCondition(aircon)?.smartValue ?? 0 * holdValue,
    );

    // const result: number[] = [
    //   thermostatResult,
    //   internetResult,
    //   alarmResult,
    //   airconResult,
    // ];

    result.push(thermostatResult);
    result.push(internetResult);
    result.push(alarmResult);
    result.push(airconResult);

    console.log('smartResults', ...result);
    console.log('resArray', result);

    //return result;
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
