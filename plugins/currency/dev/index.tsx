import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { currencyPlugin, CurrencyPage } from '../src/plugin';

createDevApp()
  .registerPlugin(currencyPlugin)
  .addPage({
    element: <CurrencyPage />,
    title: 'Root Page',
    path: '/currency'
  })
  .render();
