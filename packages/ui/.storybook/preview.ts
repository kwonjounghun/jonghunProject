import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import { ToastProvider } from '../src/providers/ToastProvider';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
      ],
    },
    docs: {
      toc: true,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
      <ToastProvider>
      <Story />
      </ToastProvider>
      </ThemeProvider>
    ),
  ],
};

export default preview; 