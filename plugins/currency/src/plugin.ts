import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const currencyPlugin = createPlugin({
  id: 'currency',
  routes: {
    root: rootRouteRef,
  },
});

export const CurrencyPage = currencyPlugin.provide(
  createRoutableExtension({
    name: 'CurrencyPage',
    component: () =>
      import('./components/CurrencyExchangeComponent').then(m => m.CurrencyExchange),
    mountPoint: rootRouteRef,
  }),
);
