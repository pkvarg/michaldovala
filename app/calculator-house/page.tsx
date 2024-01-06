'use client';
import React, { useEffect, useRef, useState } from 'react';
import { houseResult } from './../utils/getHouseResults';
// import { SpinnerFullPage } from '../components';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Component01 from '../components/house/Component01';
import Component02 from '../components/house/Component02';
import Component03 from '../components/house/Component03';
import Component04 from '../components/house/Component04';
import Component05 from '../components/house/Component05';
import Component06 from '../components/house/Component06';
import Component07 from '../components/house/Component07';
import Component08 from '../components/house/Component08';
import Component09 from '../components/house/Component09';
import Component10 from '../components/house/Component10';
import Component11 from '../components/house/Component11';
import Component12 from '../components/house/Component12';
import Component13 from '../components/house/Component13';
import Component14 from '../components/house/Component14';
import Component15 from '../components/house/Component15';
import Component16 from '../components/house/Component16';

const CalculatorHouse = () => {
  const formRef = useRef(null);
  const [flatOrHouse, setFlatOrHouse] = useState('house');
  const [city, setCity] = useState('Bratislava');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [countRooms, setCountRooms] = useState(0);
  const [countBathrooms, setCountBathrooms] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentlyClickedRoomCount, setCurrentlyClickedRoomCount] =
    useState('');
  const [currentlyClickedBathroomCount, setCurrentlyClickedBathroomCount] =
    useState('');
  const [houseCondition, setHouseCondition] = useState(0);
  const [currentConditionClicked, setCurrentConditionClicked] = useState('');
  const [squareMeters, setSquareMeters] = useState(0);
  const [houseType, setHouseType] = useState(0);
  const [currentHouseTypeClicked, setCurrentHouseTypeClicked] = useState('');
  const [hasGarage, setHasGarage] = useState(false);
  const [hasBasement, setHasBasement] = useState(false);
  const [hasTerrace, setHasTerrace] = useState(false);
  const [hasPool, setHasPool] = useState(false);
  const [hasSauna, setHasSauna] = useState(false);
  const [hasGardenShed, setHasGardenShed] = useState(false);

  useEffect(() => {
    const garage = document.getElementById('garage');
    const basement = document.getElementById('basement');
    const terrace = document.getElementById('terrace');
    const pool = document.getElementById('pool');
    const sauna = document.getElementById('sauna');
    const gardenshed = document.getElementById('gardenshed');
    if (garage && hasGarage) garage.classList.add('clicked');
    if (garage && !hasGarage) garage.classList.remove('clicked');
    if (basement && hasBasement) basement.classList.add('clicked');
    if (basement && !hasBasement) basement.classList.remove('clicked');
    if (terrace && hasTerrace) terrace.classList.add('clicked');
    if (terrace && !hasTerrace) terrace.classList.remove('clicked');
    if (pool && hasPool) pool.classList.add('clicked');
    if (pool && !hasPool) pool.classList.remove('clicked');

    if (sauna && hasSauna) sauna.classList.add('clicked');
    if (sauna && !hasSauna) sauna.classList.remove('clicked');

    if (gardenshed && hasGardenShed) gardenshed.classList.add('clicked');
    if (gardenshed && !hasGardenShed) gardenshed.classList.remove('clicked');
  }, [hasGarage, hasBasement, hasTerrace, hasPool, hasSauna, hasGardenShed]);

  const [landType, setLandType] = useState(0);
  const [currentLandTypeClicked, setCurrentLandTypeClicked] = useState('');
  const [landSquareMeters, setLandSquareMeters] = useState(0);
  const [builtYear, setBuiltYear] = useState(0);
  const [hasThermostat, setHasThermostat] = useState(false);
  const [hasAlarm, setHasAlarm] = useState(false);
  const [hasFireAlarm, setHasFireAlarm] = useState(false);
  const [hasSolarCollectors, setHasSolarCollectors] = useState(false);
  const [hasCameraSystem, setHasCameraSystem] = useState(false);
  const [hasInternet, setHasInternet] = useState(false);

  useEffect(() => {
    const thermostat = document.getElementById('thermostat');
    const alarm = document.getElementById('alarm');
    const firealarm = document.getElementById('firealarm');
    const solarcollectors = document.getElementById('solarcollectors');
    const camerasystem = document.getElementById('camerasystem');
    const internet = document.getElementById('internet');

    if (thermostat && hasThermostat) thermostat.classList.add('clicked');
    if (thermostat && !hasThermostat) thermostat.classList.remove('clicked');
    if (alarm && hasAlarm) alarm.classList.add('clicked');
    if (alarm && !hasAlarm) alarm.classList.remove('clicked');
    if (firealarm && hasFireAlarm) firealarm.classList.add('clicked');
    if (firealarm && !hasFireAlarm) firealarm.classList.remove('clicked');
    if (solarcollectors && hasSolarCollectors)
      solarcollectors.classList.add('clicked');
    if (solarcollectors && !hasSolarCollectors)
      solarcollectors.classList.remove('clicked');
    if (camerasystem && hasCameraSystem) camerasystem.classList.add('clicked');
    if (camerasystem && !hasCameraSystem)
      camerasystem.classList.remove('clicked');
    if (internet && hasInternet) internet.classList.add('clicked');
    if (internet && !hasInternet) internet.classList.remove('clicked');
  }, [
    hasThermostat,
    hasAlarm,
    hasFireAlarm,
    hasSolarCollectors,
    hasCameraSystem,
    hasInternet,
  ]);

  const [hasWell, setHasWell] = useState(false);
  const [hasCityWater, setHasCityWater] = useState(false);

  const [hasCitySewerage, setHasCitySewerage] = useState(false);

  const [hasSeptic, setHasSeptic] = useState(false);
  const [hasElectricity, setHasElectricity] = useState(false);
  const [hasGas, setHasGas] = useState(false);

  useEffect(() => {
    const well = document.getElementById('well');
    const citywater = document.getElementById('citywater');
    const citysewerage = document.getElementById('citysewerage');
    const septic = document.getElementById('septic');
    const electricity = document.getElementById('electricity');
    const gas = document.getElementById('gas');
    if (well && hasWell) well.classList.add('clicked');
    if (well && !hasWell) well.classList.remove('clicked');
    if (citywater && hasCityWater) citywater.classList.add('clicked');
    if (citywater && !hasCityWater) citywater.classList.remove('clicked');
    if (citysewerage && hasCitySewerage) citysewerage.classList.add('clicked');
    if (citysewerage && !hasCitySewerage)
      citysewerage.classList.remove('clicked');
    if (septic && hasSeptic) septic.classList.add('clicked');
    if (septic && !hasSeptic) septic.classList.remove('clicked');
    if (electricity && hasElectricity) electricity.classList.add('clicked');
    if (electricity && !hasElectricity) electricity.classList.remove('clicked');
    if (gas && hasGas) gas.classList.add('clicked');
    if (gas && !hasGas) gas.classList.remove('clicked');
  }, [
    hasWell,
    hasCityWater,
    hasCitySewerage,
    hasSeptic,
    hasElectricity,
    hasGas,
  ]);

  const [urbanQuality, setUrbanQuality] = useState('');
  const [currentUrbanQualityClicked, setCurrentUrbanQualityClicked] =
    useState('');

  const handleUrbanQuality = (quality: string) => {
    if (currentUrbanQualityClicked !== '') {
      const toRemoveFrom: any = document.getElementById(
        currentUrbanQualityClicked,
      );
      toRemoveFrom.classList.remove('clicked');
    }
    setUrbanQuality(quality);
    setCurrentUrbanQualityClicked(quality.toString());
    const element: HTMLElement | null = document.getElementById(
      quality.toString(),
    );
    element?.classList.add('clicked');
  };

  const [hasElectricRadiators, setHasElectricRadiators] = useState(false);
  const [hasHeatPump, setHasHeatPump] = useState(false);
  const [hasSolidFuel, setHasSolidFuel] = useState(false);
  const [hasGasBoiler, setHasGasBoiler] = useState(false);
  const [hasUnderfloorHeating, setHasUnderfloorHeating] = useState(false);
  const [hasOther, setHasOther] = useState(false);

  useEffect(() => {
    const electricradiators = document.getElementById('electricradiators');
    const heatpump = document.getElementById('heatpump');
    const solidfuel = document.getElementById('solidfuel');
    const gasboiler = document.getElementById('gasboiler');
    const underfloorheating = document.getElementById('underfloorheating');
    const other = document.getElementById('other');
    if (electricradiators && hasElectricRadiators)
      electricradiators.classList.add('clicked');
    if (electricradiators && !hasElectricRadiators)
      electricradiators.classList.remove('clicked');
    if (heatpump && hasHeatPump) heatpump.classList.add('clicked');
    if (heatpump && !hasHeatPump) heatpump.classList.remove('clicked');
    if (solidfuel && hasSolidFuel) solidfuel.classList.add('clicked');
    if (solidfuel && !hasSolidFuel) solidfuel.classList.remove('clicked');
    if (gasboiler && hasGasBoiler) gasboiler.classList.add('clicked');
    if (gasboiler && !hasGasBoiler) gasboiler.classList.remove('clicked');
    if (underfloorheating && hasUnderfloorHeating)
      underfloorheating.classList.add('clicked');
    if (underfloorheating && !hasUnderfloorHeating)
      underfloorheating.classList.remove('clicked');
    if (other && hasOther) other.classList.add('clicked');
    if (other && !hasOther) other.classList.remove('clicked');
  }, [
    hasElectricRadiators,
    hasHeatPump,
    hasSolidFuel,
    hasGasBoiler,
    hasUnderfloorHeating,
    hasOther,
  ]);

  const startCalculation = async () => {
    const calcValues = {
      street: street,
      countRooms: countRooms,
      countBathrooms: countBathrooms,
      houseCondition: houseCondition,
      squareMeters: squareMeters,
      houseType: houseType,
      hasPool: hasPool,
      hasSauna: hasSauna,
      hasGardenShed: hasGardenShed,
      hasGarage: hasGarage,
      hasBasement: hasBasement,
      hasTerrace: hasTerrace,
      landType: landType,
      landSquareMeters: landSquareMeters,
      builtYear: builtYear,
      hasThermostat: hasThermostat,
      hasAlarm: hasAlarm,
      hasFireAlarm: hasFireAlarm,
      hasSolarCollectors: hasSolarCollectors,
      hasCameraSystem: hasCameraSystem,
      hasInternet: hasInternet,
      hasWell: hasWell,
      hasCityWater: hasCityWater,
      hasCitySewerage: hasCitySewerage,
      hasSeptic: hasSeptic,
      hasElectricity: hasElectricity,
      hasGas: hasGas,
      urbanQuality: urbanQuality,
      hasElectricRadiators: hasElectricRadiators,
      hasHeatPump: hasHeatPump,
      hasOther: hasOther,
      hasSolidFuel: hasSolidFuel,
      hasGasBoiler: hasGasBoiler,
      hasUnderfloorHeating: hasUnderfloorHeating,
    };
    console.log('housestartcalc', calcValues);
    const calculated = houseResult(calcValues);
    if (calculated) {
      setPrice(calculated.price);
      console.log('...HOUSE-RESULTS', calculated);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(calculated);
        }, 2000); // Simulating a 2-second calculation
      });
    }
  };

  const [email, setEmail] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const validateEmail = (email: string) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [isValid, setIsValid] = useState(false);

  const [price, setPrice] = useState(0);

  console.log(
    'HOUSE',
    flatOrHouse,
    city,
    street,
    houseNumber,
    countRooms,
    countBathrooms,
    houseCondition,
    squareMeters,
    houseType,
    hasGarage,
    hasBasement,
    hasTerrace,
    hasPool,
    hasSauna,
    hasGardenShed,
    landType,
    landSquareMeters,
    builtYear,
    hasThermostat,
    hasAlarm,
    hasFireAlarm,
    hasSolarCollectors,
    hasCameraSystem,
    hasInternet,
    hasWell,
    hasCityWater,
    hasCitySewerage,
    hasSeptic,
    hasElectricity,
    hasGas,
    urbanQuality,
    hasElectricRadiators,
    hasHeatPump,
    hasSolidFuel,
    hasGasBoiler,
    hasUnderfloorHeating,
    hasOther,
    email,
    isValid,
  );

  const handleNext = () => {
    if (currentComponent < 16) {
      setCurrentComponent(currentComponent + 1);
      setIsLoading(false);
    }
  };

  const handleBack = (e: any) => {
    e.preventDefault();
    if (currentComponent > 0) {
      setCurrentComponent(currentComponent - 1);
    }
  };

  const handleCountRoomClick = (count: number) => {
    if (currentlyClickedRoomCount !== undefined) {
      const toRemoveFrom: HTMLElement | null = document.getElementById(
        currentlyClickedRoomCount,
      );
      toRemoveFrom?.classList.remove('clicked');
    }
    setCountRooms(count);
    setCurrentlyClickedRoomCount(count.toString());
    const element: HTMLElement | null = document.getElementById(
      count.toString(),
    );
    element?.classList.add('clicked');
  };

  const handleCountBathroomClick = (count: number) => {
    if (currentlyClickedBathroomCount !== '') {
      const toRemoveFrom: HTMLElement | null = document.getElementById(
        currentlyClickedBathroomCount,
      );
      toRemoveFrom?.classList.remove('clicked');
    }
    setCountBathrooms(count);
    setCurrentlyClickedBathroomCount(count.toString());
    const element: HTMLElement | null = document.getElementById(
      count.toString(),
    );
    element?.classList.add('clicked');
  };

  const handleHouseCondition = (num: number) => {
    if (currentConditionClicked !== '') {
      const toRemoveFrom: any = document.getElementById(
        currentConditionClicked,
      );
      toRemoveFrom.classList.remove('clicked');
    }
    setHouseCondition(num);
    setCurrentConditionClicked(num.toString());
    const element: HTMLElement | null = document.getElementById(num.toString());
    element?.classList.add('clicked');
  };

  const handleHouseType = (num: number) => {
    if (currentHouseTypeClicked !== '') {
      const toRemoveFrom: any = document.getElementById(
        currentHouseTypeClicked,
      );
      toRemoveFrom.classList.remove('clicked');
    }
    setHouseType(num);
    setCurrentHouseTypeClicked(num.toString());
    const element = document.getElementById(num.toString());
    element?.classList.add('clicked');
  };

  const handleLandType = (num: number) => {
    if (currentLandTypeClicked !== '') {
      const toRemoveFrom: any = document.getElementById(currentLandTypeClicked);
      toRemoveFrom.classList.remove('clicked');
    }
    setLandType(num);
    setCurrentLandTypeClicked(num.toString());
    const element = document.getElementById(num.toString());
    element?.classList.add('clicked');
  };

  const [currentComponent, setCurrentComponent] = useState(1);

  const renderComponent = (componentNumber: number) => {
    switch (componentNumber) {
      case 1:
        return (
          <Component01
            onNext={handleNext}
            onBack={handleBack}
            city={city}
            setCity={setCity}
            street={street}
            setStreet={setStreet}
            houseNumber={houseNumber}
            setHouseNumber={setHouseNumber}
          />
        );
      case 2:
        return (
          <Component02
            onBack={handleBack}
            onNext={handleNext}
            currentlyClickedRoomCount={currentlyClickedRoomCount}
            handleCountRoomClick={handleCountRoomClick}
          />
        );
      case 3:
        return (
          <Component03
            onBack={handleBack}
            onNext={handleNext}
            currentlyClickedBathroomCount={currentlyClickedBathroomCount}
            handleCountBathroomClick={handleCountBathroomClick}
          />
        );
      case 4:
        return (
          <Component04
            onBack={handleBack}
            onNext={handleNext}
            handleHouseCondition={handleHouseCondition}
            currentConditionClicked={currentConditionClicked}
          />
        );
      case 5:
        return (
          <Component05
            onBack={handleBack}
            onNext={handleNext}
            squareMeters={squareMeters}
            setSquareMeters={setSquareMeters}
          />
        );
      case 6:
        return (
          <Component06
            onBack={handleBack}
            onNext={handleNext}
            handleHouseType={handleHouseType}
            currentHouseTypeClicked={currentHouseTypeClicked}
          />
        );
      case 7:
        return (
          <Component07
            onBack={handleBack}
            onNext={handleNext}
            hasGarage={hasGarage}
            hasBasement={hasBasement}
            hasTerrace={hasTerrace}
            hasPool={hasPool}
            hasSauna={hasSauna}
            hasGardenShed={hasGardenShed}
            setHasGarage={setHasGarage}
            setHasBasement={setHasBasement}
            setHasTerrace={setHasTerrace}
            setHasPool={setHasPool}
            setHasSauna={setHasSauna}
            setHasGardenShed={setHasGardenShed}
          />
        );
      case 8:
        return (
          <Component08
            onBack={handleBack}
            onNext={handleNext}
            handleLandType={handleLandType}
            currentLandTypeClicked={currentLandTypeClicked}
          />
        );
      case 9:
        return (
          <Component09
            onBack={handleBack}
            onNext={handleNext}
            landSquareMeters={landSquareMeters}
            setLandSquareMeters={setLandSquareMeters}
          />
        );
      case 10:
        return (
          <Component10
            onBack={handleBack}
            onNext={handleNext}
            builtYear={builtYear}
            setBuiltYear={setBuiltYear}
          />
        );
      case 11:
        return (
          <Component11
            onBack={handleBack}
            onNext={handleNext}
            hasThermostat={hasThermostat}
            hasAlarm={hasAlarm}
            hasFireAlarm={hasFireAlarm}
            hasSolarCollectors={hasSolarCollectors}
            hasCameraSystem={hasCameraSystem}
            hasInternet={hasInternet}
            setHasThermostat={setHasThermostat}
            setHasAlarm={setHasAlarm}
            setHasFireAlarm={setHasFireAlarm}
            setHasSolarCollectors={setHasSolarCollectors}
            setHasCameraSystem={setHasCameraSystem}
            setHasInternet={setHasInternet}
          />
        );
      case 12:
        return (
          <Component12
            onBack={handleBack}
            onNext={handleNext}
            hasWell={hasWell}
            hasCityWater={hasCityWater}
            hasCitySewerage={hasCitySewerage}
            hasSeptic={hasSeptic}
            hasElectricity={hasElectricity}
            hasGas={hasGas}
            setHasWell={setHasWell}
            setHasCityWater={setHasCityWater}
            setHasCitySewerage={setHasCitySewerage}
            setHasSeptic={setHasSeptic}
            setHasElectricity={setHasElectricity}
            setHasGas={setHasGas}
          />
        );
      case 13:
        return (
          <Component13
            onBack={handleBack}
            onNext={handleNext}
            urbanQuality={urbanQuality}
            handleUrbanQuality={handleUrbanQuality}
          />
        );
      case 14:
        return (
          <Component14
            onBack={handleBack}
            onNext={handleNext}
            hasElectricRadiators={hasElectricRadiators}
            hasHeatPump={hasHeatPump}
            hasSolidFuel={hasSolidFuel}
            hasGasBoiler={hasGasBoiler}
            hasUnderfloorHeating={hasUnderfloorHeating}
            hasOther={hasOther}
            setHasElectricRadiators={setHasElectricRadiators}
            setHasHeatPump={setHasHeatPump}
            setHasSolidFuel={setHasSolidFuel}
            setHasGasBoiler={setHasGasBoiler}
            setHasUnderfloorHeating={setHasUnderfloorHeating}
            setHasOther={setHasOther}
          />
        );
      case 15:
        return (
          <Component15
            onBack={handleBack}
            onNext={handleNext}
            isValid={isValid}
            email={email}
            setEmail={setEmail}
            checkBox={checkBox}
            setCheckBox={setCheckBox}
            isLoading={isLoading}
            handleSubmitForm={handleSubmitForm}
          />
        );
      case 16:
        return <Component16 onBack={handleBack} price={price} />;

      default:
        return null;
    }
  };

  useEffect(() => {
    if (email !== '') {
      setIsValid(validateEmail(email));
    }
  }, [email]);

  const sendEmail = async (resprice: number) => {
    const calcValues = {
      city: city,
      houseNumber: houseNumber,
      street: street,
      countRooms: countRooms,
      countBathrooms: countBathrooms,
      houseCondition: houseCondition,
      squareMeters: squareMeters,
      houseType: houseType,
      hasPool: hasPool,
      hasSauna: hasSauna,
      hasGardenShed: hasGardenShed,
      hasGarage: hasGarage,
      hasBasement: hasBasement,
      hasTerrace: hasTerrace,
      landType: landType,
      landSquareMeters: landSquareMeters,
      builtYear: builtYear,
      hasThermostat: hasThermostat,
      hasAlarm: hasAlarm,
      hasFireAlarm: hasFireAlarm,
      hasSolarCollectors: hasSolarCollectors,
      hasCameraSystem: hasCameraSystem,
      hasInternet: hasInternet,
      hasWell: hasWell,
      hasCityWater: hasCityWater,
      hasCitySewerage: hasCitySewerage,
      hasSeptic: hasSeptic,
      hasElectricity: hasElectricity,
      hasGas: hasGas,
      urbanQuality: urbanQuality,
      hasElectricRadiators: hasElectricRadiators,
      hasHeatPump: hasHeatPump,
      hasOther: hasOther,
      hasSolidFuel: hasSolidFuel,
      hasGasBoiler: hasGasBoiler,
      hasUnderfloorHeating: hasUnderfloorHeating,
      email: email,
      price: resprice,
    };
    console.log('..sendingHouseEmail..', calcValues);
    const { data } = await axios.put(
      //`https://api.pictusweb.com/api/md/email-house`,
      `http://localhost:2000/api/md/email-house`,
      {
        calcValues,
      },
    );

    console.log('ctc:', data);
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();

    console.log('submitting house');
    if (email !== '') {
      if (!isValid) return toast.error('Zadajte správny email');
      setIsLoading(true);

      const res = await startCalculation();
      if (res) {
        console.log('resawait house', res);
        sendEmail((res as { price: number }).price);
      }

      setTimeout(handleNext, 4000);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    };

    // Add event listener to the form
    const formElement: any = formRef.current;

    if (formElement !== null)
      formElement.addEventListener('keydown', handleKeyPress);

    // Cleanup: Remove event listener when the component unmounts
    // return () => {
    //   formElement.removeEventListener('keydown', handleKeyPress);
    // };
  }, []); // Run the effect only once on mount

  return (
    <>
      <div className="relative grid h-[97.5vh] grid-rows-3 bg-white text-[30px] lg:h-screen">
        <div className="h-[min-content]">
          <Navbar />
        </div>
        <div className="z-10 flex h-auto  flex-col items-center justify-center  lg:h-[100%]">
          <form ref={formRef}>{renderComponent(currentComponent)}</form>
        </div>
        <div className="z-0 h-[min-content]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CalculatorHouse;
