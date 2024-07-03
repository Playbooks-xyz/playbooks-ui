const config = {
  compilationOptions: {
    preferredConfigPath: './tsconfig.json',
  },
  entries: [
    {
      filePath: "./src/index.tsx",
      outFile: "./dist/index.d.ts",
      noCheck: false,
    },
    {
      filePath: "./src/interface/accordions.tsx",
      outFile: "./dist/accordions.d.ts",
      noCheck: false,
    },
  ],
};

module.exports = config;
