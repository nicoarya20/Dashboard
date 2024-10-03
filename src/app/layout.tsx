import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';


export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme='light' />
        <link rel="shortcut icon" href="/favicon.svg" />
        
      </head>
      <body>
        <MantineProvider defaultColorScheme='light'>{children}</MantineProvider>
      </body>
    </html>
  );
}