const convertEnToPe = (value: string | number): string => {
  return String(value).replace(/\d/g, (digit) => {
    return "۰۱۲۳۴۵۶۷۸۹"[Number(digit)];
  });
};

export default convertEnToPe;
