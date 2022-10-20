const getDatesDifference = (startDate: Date, endDate: Date): number => {
  return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
};

export default getDatesDifference;
