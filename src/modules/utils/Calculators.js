import dateFormat from "dateformat";

export const calculateDateOfBirthValue = (pesel) => {
  const peselArray = Array.from(pesel).map(Number);
  if (peselArray.length === 11) {
    let year = 1900 + peselArray[0] * 10 + peselArray[1];
    if (peselArray[2] >= 2 && peselArray[2] < 8)
      year += Math.floor(peselArray[2] / 2) * 100;
    if (peselArray[2] >= 8) year -= 100;

    const month = (peselArray[2] % 2) * 10 + peselArray[3];
    const day = peselArray[4] * 10 + peselArray[5];

    const dateOfBirth = new Date(year, month - 1, day);
    return dateFormat(dateOfBirth, "dd - mm - yyyy");
  }
  return "";
};

export const calculateBmiValue = (height, weight) => {
  if (height && weight > 10) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return `${parseFloat(bmi, 10).toFixed(2)}`;
  }
  return "0";
};

export const calculateAge = (dateOfBirth) => {
  if (dateOfBirth) {
    const from = dateOfBirth.split(/-| - /);
    const birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
    const ageDate = Date.now() - birthdateTimeStamp; // This is the difference in milliseconds
    return Math.floor(ageDate / 31557600000); // Divide to get difference in years
  }
  return "";
};
