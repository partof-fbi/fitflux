const hitungWaktu = (
  setDetikDurasiAkhir,
  detikDurasiAkhir,
  setMenitDurasiAkhir,
  menitDurasiAkhir
) => {
  setDetikDurasiAkhir((detikDurasiAkhir) => {
    if (detikDurasiAkhir === 59) {
      setDetikDurasiAkhir(0);
      setMenitDurasiAkhir(
        (menitDurasiAkhir) => menitDurasiAkhir + 1
      );
    } else {
      return detikDurasiAkhir + 1;
    }
  });
};

export { hitungWaktu };