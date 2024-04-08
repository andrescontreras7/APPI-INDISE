let storedData = {};

module.exports = {
  getStoredData: () => storedData,
  setStoredData: (data) => storedData = data
};