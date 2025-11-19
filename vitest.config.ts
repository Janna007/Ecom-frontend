import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts', 'src/**/*.{test,spec}.{ts,tsx}'],
    exclude: [...configDefaults.exclude, 'dist/**', 'temp/**'],
    environment: 'jsdom',
    globals: true,
    setupFiles:'./setUpTest.ts'
  },
})