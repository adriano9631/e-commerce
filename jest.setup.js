import "@testing-library/jest-dom/extend-expect";

import { server } from "./__mocks__/server";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

beforeEach(() => {
  useRouter.mockImplementation(() => ({
    query: {},
    pathname: "/",
    asPath: "/",
    events: {
      emit: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
    },
    push: jest.fn(() => Promise.resolve(true)),
    prefetch: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true)),
  }));
});

// jest.mock('next/router', () => require('next-router-mock'));
beforeAll(() => {
  server.listen();
  // jest.mock('next/link', () => ({ children }) => children);
  // jest.mock('next/router', () => require('next-router-mock'));
  // jest.mock('next/dist/client/router', () => ({
  //   __esModule: true,
  //   useRouter: () => ({
  //     query: {},
  //     pathname: '/',
  //     asPath: '/',
  //     events: {
  //       emit: jest.fn(),
  //       on: jest.fn(),
  //       off: jest.fn(),
  //     },
  //     push: jest.fn(() => Promise.resolve(true)),
  //     prefetch: jest.fn(() => Promise.resolve(true)),
  //     replace: jest.fn(() => Promise.resolve(true)),
  //   }),
  // }))
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());
