const config = {
  compilationOptions: {
    preferredConfigPath: './tsconfig.json'
  },
  entries: [
    {
      filePath: "./src/index.tsx",
      outFile: "./dist/index.d.ts",
      noCheck: false,
    },
    {
      filePath: "./src/test-title.tsx",
      outFile: "./dist/test-title.tsx",
      noCheck: false,
    },
    {
      filePath: "./src/test-text.tsx",
      outFile: "./dist/test-text.tsx",
      noCheck: false,
    },
  ],
};

module.exports = config;
