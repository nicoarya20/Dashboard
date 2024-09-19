'use client'
import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar, NavLink, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react'

export function AllLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm' }}
      // padding={'md'}
    >
      <AppShellHeader bg={'#19345E'}>
        <Text c={'white'} pt={10} fz={25}>Perbekal Desa Darmasaba</Text>

      </AppShellHeader>
      <AppShellNavbar>
        <NavLink
          h={100}
          label={<Text c={'#19345E'} fz={20}
            onClick={() => router.push("/division")}
          >Divisi</Text>}
        />
        <NavLink
          h={100}
          label={<Text c={'#19345E'} fz={20}>Kegiatan</Text>}
        />
        <NavLink
          h={100}
          label={<Text c={'#19345E'} fz={20}>Pengumuman</Text>}
        />
        <NavLink
          h={100}
          label={<Text c={'#19345E'} fz={20}>Anggota</Text>}
        />
        <NavLink
          h={100}
          label={<Text c={'#19345E'} fz={20}>Jabatan</Text>}
        />
        <NavLink
          h={100}
          label={<Text c={'#19345E'} fz={20}>Grup</Text>}
        />
        <NavLink
          h={100}
          label={<Text c={'#19345E'} fz={20}>Tema</Text>}
        />
      </AppShellNavbar>
      <AppShellMain>
        {children}
      </AppShellMain>
    </AppShell>
  );
}
