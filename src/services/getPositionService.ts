export const getPosition = async (): Promise<GeolocationPosition> => {

  const options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 3600000
  };

  return new Promise((resolve, reject) => 
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
}