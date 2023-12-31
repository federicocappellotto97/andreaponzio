module.exports = {
  plugins: [],
  tailwindFunctions: ['cva', 'cx'],
  trailingComma: 'es5',
  useTabs: false,
  tabWidth: 2,
  semi: false,
  printWidth: 120,
  singleQuote: true,
  importOrder: [
    'next|react|framer-motion|zustand',
    '<THIRD_PARTY_MODULES>',
    '^@config/(.*)$ | ^@lib/(.*)$ | ^@stores/(.*)$',
    '^@graphql/(.*)$',
    '^@components/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
