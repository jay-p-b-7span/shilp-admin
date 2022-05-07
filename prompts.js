module.exports = [
  {
    name: "setupChoice",
    type: "list",
    message: "Select Setup Type",
    choices: [
      {
        name: "Default",
        value: "default",
      },
      {
        name: "Custom",
        value: "custom",
      },
    ],
    default: "default",
  },
];
