module.exports = {
  coverageEnvVar: 'COVERAGE',
  excludes: [
    '*/app/**/*',
    '*/tests/**/*'
  ],
  useBabelInstrumenter: true,
  reporters: [
    'html',
    'lcov',
    'text-summary'
  ]
}
