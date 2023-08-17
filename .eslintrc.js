module.exports = {
  root: true,
  extends: ['@jvega/eslint-config'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
}
