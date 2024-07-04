const config = {
  compilationOptions: {
    preferredConfigPath: './tsconfig.json',
  },
  entries: [
    {
      filePath: "./src/index.tsx",
      outFile: "./dist/index.d.ts"
    },
    {
      filePath: "./src/interface/accordions.tsx",
      outFile: "./dist/accordions.d.ts"
    },
    {
      filePath: "./src/interface/alerts.tsx",
      outFile: "./dist/alerts.d.ts"
    },
    {
      filePath: "./src/interface/avatars.tsx",
      outFile: "./dist/avatars.d.ts"
    },
  ],
};

module.exports = config;
