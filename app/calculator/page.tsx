'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { result } from './../utils/getFlatResults';
//import { SpinnerFullPage } from '../components';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Component00 from '../components/flat/Component00';
import Component01 from '../components/flat/Component01';
import Component02 from '../components/flat/Component02';
import Component03 from '../components/flat/Component03';
import Component04 from '../components/flat/Component04';
import Component05 from '../components/flat/Component05';
import Component06 from '../components/flat/Component06';
import Component07 from '../components/flat/Component07';
import Component08 from '../components/flat/Component08';
import Component09 from '../components/flat/Component09';
import Component10 from '../components/flat/Component10';
import Component11 from '../components/flat/Component11';
import Component12 from '../components/flat/Component12';
import Component13 from '../components/flat/Component13';
import Component14 from '../components/flat/Component14';
import Component15 from '../components/flat/Component15';
import Component16 from '../components/flat/Component16';

const Calculator = () => {
  const router = useRouter();
  const formRef = useRef(null);
  const [flatOrHouse, setFlatOrHouse] = useState('');
  const [city, setCity] = useState('Bratislava');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [countRooms, setCountRooms] = useState(0);
  const [houseCondition, setHouseCondition] = useState(0);
  const [squareMeters, setSquareMeters] = useState(0);
  const [allFloorsCount, setAllFloorsCount] = useState(0);
  const [currentFloorNumber, setCurrentFloorNumber] = useState(0);
  const [hasElevator, setHasElevator] = useState('');
  const [hasBalcony, setHasBalcony] = useState(false);
  const [hasLoggia, setHasLoggia] = useState(false);
  const [hasTerrace, setHasTerrace] = useState(false);
  const [hasBasement, setHasBasement] = useState(false);
  const [hasGarage, setHasGarage] = useState(false);
  const [hasParking, setHasParking] = useState(false);
  const [hasNoParking, setHasNoParking] = useState(false);
  const [builtYear, setBuiltYear] = useState(0);
  const [hasIsolation, setHasIsolation] = useState(false);
  const [hasNewElevator, setHasNewElevator] = useState(false);
  const [hasNewWindows, setHasNewWindows] = useState(false);
  const [hasNewInstallations, setHasNewInstallations] = useState(false);
  const [hasThermostat, setHasThermostat] = useState(false);
  const [hasInternet, setHasInternet] = useState(false);
  const [hasAlarm, setHasAlarm] = useState(false);
  const [hasAirCon, setHasAircon] = useState(false);
  const [monthlyCosts, setMonthlyCosts] = useState(0);
  const [urbanQuality, setUrbanQuality] = useState('');
  const [email, setEmail] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const [price, setPrice] = useState(0);

  console.log(
    flatOrHouse,
    city,
    street,
    houseNumber,
    countRooms,
    houseCondition,
    squareMeters,
    allFloorsCount,
    currentFloorNumber,
    hasElevator,
    hasBalcony,
    hasLoggia,
    hasTerrace,
    hasBasement,
    hasGarage,
    hasParking,
    hasNoParking,
    builtYear,
    hasIsolation,
    hasNewElevator,
    hasNewWindows,
    hasNewInstallations,
    hasThermostat,
    hasInternet,
    hasAlarm,
    hasAirCon,
    monthlyCosts,
    urbanQuality,
    email,
    checkBox,
  );

  const [currentlyClickedRoomCount, setCurrentlyClickedRoomCount] =
    useState('');
  const [currentConditionClicked, setCurrentConditionClicked] = useState('');
  const [currentElevatorStatusClicked, setCurrentElevatorStatusClicked] =
    useState('');

  const [currentSmartHomeItemsClicked, setCurrentSmartHomeItemsClicked] =
    useState(null);

  const [currentUrbanQualityClicked, setCurrentUrbanQualityClicked] =
    useState('');

  const [currentFlatOrHouseClicked, setCurrentFlatOrHouseClicked] =
    useState('');
  // XXXXXxXxxxxxxxxxXXXXXXXXXXXXXXXXXXXXXXXXXX
  const [currentComponent, setCurrentComponent] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (currentComponent < 16) {
      setCurrentComponent(currentComponent + 1);
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentComponent > 0) {
      setCurrentComponent(currentComponent - 1);
    }
  };

  const renderComponent = (componentNumber: Number) => {
    switch (componentNumber) {
      case 0:
        return <Component00 handleFlatOrHouse={handleFlatOrHouse} />;
      case 1:
        return (
          <Component01
            onBack={handleBack}
            onNext={handleNext}
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
            handleHouseCondition={handleHouseCondition}
            currentConditionClicked={currentConditionClicked}
          />
        );
      case 4:
        return (
          <Component04
            onBack={handleBack}
            onNext={handleNext}
            squareMeters={squareMeters}
            setSquareMeters={setSquareMeters}
          />
        );
      case 5:
        return (
          <Component05
            onBack={handleBack}
            onNext={handleNext}
            allFloorsCount={allFloorsCount}
            setAllFloorsCount={setAllFloorsCount}
          />
        );
      case 6:
        return (
          <Component06
            onBack={handleBack}
            onNext={handleNext}
            currentFloorNumber={currentFloorNumber}
            setCurrentFloorNumber={setCurrentFloorNumber}
          />
        );
      case 7:
        return (
          <Component07
            onBack={handleBack}
            onNext={handleNext}
            hasElevator={hasElevator}
            handleHasElevator={handleHasElevator}
          />
        );
      case 8:
        return (
          <Component08
            onBack={handleBack}
            onNext={handleNext}
            hasBalcony={hasBalcony}
            hasLoggia={hasLoggia}
            hasTerrace={hasTerrace}
            hasBasement={hasBasement}
            setHasBalcony={setHasBalcony}
            setHasLoggia={setHasLoggia}
            setHasTerrace={setHasTerrace}
            setHasBasement={setHasBasement}
          />
        );
      case 9:
        return (
          <Component09
            onBack={handleBack}
            onNext={handleNext}
            hasGarage={hasGarage}
            hasParking={hasParking}
            hasNoParking={hasNoParking}
            setHasGarage={setHasGarage}
            setHasParking={setHasParking}
            setHasNoParking={setHasNoParking}
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
            hasIsolation={hasIsolation}
            hasNewElevator={hasNewElevator}
            hasNewWindows={hasNewWindows}
            hasNewInstallations={hasNewInstallations}
            setHasIsolation={setHasIsolation}
            setHasNewElevator={setHasNewElevator}
            setHasNewWindows={setHasNewWindows}
            setHasNewInstallations={setHasNewInstallations}
          />
        );
      case 12:
        return (
          <Component12
            onBack={handleBack}
            onNext={handleNext}
            hasThermostat={hasThermostat}
            hasInternet={hasInternet}
            hasAlarm={hasAlarm}
            hasAirCon={hasAirCon}
            setHasThermostat={setHasThermostat}
            setHasInternet={setHasInternet}
            setHasAlarm={setHasAlarm}
            setHasAircon={setHasAircon}
          />
        );
      case 13:
        return (
          <Component13
            onBack={handleBack}
            onNext={handleNext}
            monthlyCosts={monthlyCosts}
            setMonthlyCosts={setMonthlyCosts}
          />
        );
      case 14:
        return (
          <Component14
            onBack={handleBack}
            onNext={handleNext}
            urbanQuality={urbanQuality}
            handleUrbanQuality={handleUrbanQuality}
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
          />
        );
      case 16:
        return <Component16 onBack={handleBack} price={price} />;

      default:
        return null;
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

  const handleHasElevator = (elevator: string) => {
    if (currentElevatorStatusClicked !== '') {
      const toRemoveFrom: any = document.getElementById(
        currentElevatorStatusClicked,
      );
      toRemoveFrom.classList.remove('clicked');
    }
    setHasElevator(elevator);
    setCurrentElevatorStatusClicked(elevator.toString());
    const element: HTMLElement | null = document.getElementById(
      elevator.toString(),
    );
    element?.classList.add('clicked');
  };

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

  const handleFlatOrHouse = (building: string) => {
    if (currentFlatOrHouseClicked !== null) {
      const toRemoveFrom: HTMLElement | null = document.getElementById(
        currentFlatOrHouseClicked,
      );
      toRemoveFrom?.classList.remove('clicked');
    }
    setFlatOrHouse(building);
    setCurrentFlatOrHouseClicked(building);
    const element: HTMLElement | null = document.getElementById(building);
    element?.classList.add('clicked');
    if (building === 'flat') {
      setTimeout(handleNext, 1000);
    } else {
      router.push('/calculator-house');
    }
  };

  const validateEmail = (email: string) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (email !== '') {
      setIsValid(validateEmail(email));
    }
  }, [email]);

  useEffect(() => {
    const balcony = document.getElementById('balcony');
    const loggia = document.getElementById('loggia');
    const terrace = document.getElementById('terrace');
    const basement = document.getElementById('basement');
    if (balcony && hasBalcony) balcony.classList.add('clicked');
    if (balcony && !hasBalcony) balcony.classList.remove('clicked');
    if (loggia && hasLoggia) loggia.classList.add('clicked');
    if (loggia && !hasLoggia) loggia.classList.remove('clicked');
    if (terrace && hasTerrace) terrace.classList.add('clicked');
    if (terrace && !hasTerrace) terrace.classList.remove('clicked');
    if (basement && hasBasement) basement.classList.add('clicked');
    if (basement && !hasBasement) basement.classList.remove('clicked');
  }, [hasBalcony, hasLoggia, hasTerrace, hasBasement]);

  useEffect(() => {
    const garage = document.getElementById('garage');
    const parking = document.getElementById('parking');
    const noParking = document.getElementById('noParking');
    if (garage && hasGarage) garage.classList.add('clicked');
    if (garage && !hasGarage) garage.classList.remove('clicked');
    if (parking && hasParking) parking.classList.add('clicked');
    if (parking && !hasParking) parking.classList.remove('clicked');
    if (noParking && hasNoParking) {
      setHasParking(false);
      setHasGarage(false);
      garage?.classList.remove('clicked');
      parking?.classList.remove('clicked');
      noParking.classList.add('clicked');
    }
    if (noParking && !hasNoParking) noParking.classList.remove('clicked');
  }, [hasGarage, hasParking, hasNoParking]);

  useEffect(() => {
    const isolation = document.getElementById('isolation');
    const newElevator = document.getElementById('newElevator');
    const newWindows = document.getElementById('newWindows');
    const newInstallations = document.getElementById('newInstallations');
    if (isolation && hasIsolation) isolation.classList.add('clicked');
    if (isolation && !hasIsolation) isolation.classList.remove('clicked');
    if (newElevator && hasNewElevator) newElevator.classList.add('clicked');
    if (newElevator && !hasNewElevator) newElevator.classList.remove('clicked');
    if (newWindows && hasNewWindows) newWindows.classList.add('clicked');
    if (newWindows && !hasNewWindows) newWindows.classList.remove('clicked');
    if (newInstallations && hasNewInstallations)
      newInstallations.classList.add('clicked');
    if (newInstallations && !hasNewInstallations)
      newInstallations.classList.remove('clicked');
  }, [hasIsolation, hasNewElevator, hasNewWindows, hasNewInstallations]);

  useEffect(() => {
    const thermostat = document.getElementById('thermostat');
    const internet = document.getElementById('internet');
    const alarm = document.getElementById('alarm');
    const aircon = document.getElementById('aircon');
    if (thermostat && hasThermostat) thermostat.classList.add('clicked');
    if (thermostat && !hasThermostat) thermostat.classList.remove('clicked');
    if (internet && hasInternet) internet.classList.add('clicked');
    if (internet && !hasInternet) internet.classList.remove('clicked');
    if (alarm && hasAlarm) alarm.classList.add('clicked');
    if (alarm && !hasAlarm) alarm.classList.remove('clicked');
    if (aircon && hasAirCon) aircon.classList.add('clicked');
    if (aircon && !hasAirCon) aircon.classList.remove('clicked');
  }, [hasThermostat, hasInternet, hasAlarm, hasAirCon]);

  const startCalculation = async () => {
    const calcValues = {
      city,
      street,
      houseNumber,
      countRooms,
      houseCondition,
      squareMeters,
      allFloorsCount,
      currentFloorNumber,
      hasElevator,
      hasBalcony,
      hasLoggia,
      hasTerrace,
      hasBasement,
      hasGarage,
      hasParking,
      builtYear,
      hasIsolation,
      hasNewElevator,
      hasNewWindows,
      hasNewInstallations,
      hasThermostat,
      hasInternet,
      hasAlarm,
      hasAirCon,
      urbanQuality,
    };
    const calculated = result(calcValues);
    if (calculated) {
      setPrice(calculated.price);
      console.log('...RESULTS', calculated);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(calculated);
        }, 2000); // Simulating a 2-second calculation
      });
    }
  };

  const sendEmail = async (resprice: number) => {
    const calcValues = {
      flatOrHouse,
      city,
      street,
      houseNumber,
      countRooms,
      houseCondition,
      squareMeters,
      allFloorsCount,
      currentFloorNumber,
      hasElevator,
      hasBalcony,
      hasLoggia,
      hasTerrace,
      hasBasement,
      hasGarage,
      hasParking,
      builtYear,
      hasIsolation,
      hasNewElevator,
      hasNewWindows,
      hasNewInstallations,
      hasThermostat,
      hasInternet,
      hasAlarm,
      hasAirCon,
      urbanQuality,
      monthlyCosts,
      email,
      price: resprice,
    };
    console.log('..sending..', calcValues);
    // const { data } = await axios.put(
    //   `https://api.pictusweb.com/api/md/email`,
    //   //`http://localhost:2000/api/md/email`,
    //   {
    //     calcValues,
    //   },
    // );

    // console.log('ctc:', data);
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    if (email !== '') {
      console.log('is submitting FLAT');
      if (!isValid) return toast.error('Zadajte správny email');
      setIsLoading(true);

      const res = await startCalculation();
      console.log('resawait flat', res);
      if (res) {
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
      {/* <Suspense fallback={<SpinnerFullPage />}> */}
      <div className="relative grid h-[97.5vh] grid-rows-3 bg-white text-[30px] lg:h-screen">
        <div className="h-[min-content]">
          <Navbar />
        </div>
        <div className="z-10 flex h-auto  flex-col items-center justify-center  lg:h-[100%]">
          <form onSubmit={handleSubmitForm} ref={formRef}>
            {renderComponent(currentComponent)}
          </form>
        </div>
        <div className="z-0 h-[min-content]">
          <Footer />
        </div>
      </div>
      {/* </Suspense> */}
    </>
  );
};

export default Calculator;
