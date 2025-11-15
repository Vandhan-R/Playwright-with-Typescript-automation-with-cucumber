module.exports = {
  default: {
    require: [
      "features/support/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: ["progress"]
  }
};
