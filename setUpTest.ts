import '@testing-library/jest-dom'

// setupTests.ts
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {}, // deprecated
      removeListener: () => {}, // deprecated
      dispatchEvent: () => false,
    }),
  });
  