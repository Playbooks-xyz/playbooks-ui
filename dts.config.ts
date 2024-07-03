const config = {
  compilationOptions: {
    preferredConfigPath: './tsconfig.json',
  },
  entries: [
    {
      filePath: "./src/index.tsx",
      outFile: "./dist/src/index.d.ts",
      noCheck: false,
    },
    {
      filePath: "./src/interface/accordions.tsx",
      outFile: "./dist/src/interface/accordions.d.ts",
      noCheck: false,
    },
    {
      filePath: "./src/interface/alerts.tsx",
      outFile: "./dist/src/interface/alerts.d.ts",
      noCheck: false,
    },
  ],
};

module.exports = config;
