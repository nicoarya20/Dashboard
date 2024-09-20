'use client'
import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Box, NavLink, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaUserTie } from 'react-icons/fa6';
import { HiMegaphone, HiMiniPresentationChartBar, HiMiniUserGroup } from 'react-icons/hi2';
import { IoColorPalette, IoHome } from 'react-icons/io5';
import { MdGroupAdd } from 'react-icons/md';
import { PiUsersFourFill } from 'react-icons/pi';

const dataLayout = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <IoHome size={30} />,
    link: '/dashboard',
  },
  {
    id: 2,
    name: 'Divisi',
    icon: <HiMiniUserGroup size={30} />,
    link: '/division',
  },
  {
    id: 3,
    name: 'Kegiatan',
    icon: <HiMiniPresentationChartBar  size={30} />,
    link: '/dashboard',
  },
  {
    id: 4,
    name: 'Pengumuman',
    icon: <HiMegaphone size={30} />,
    link: '/dashboard',
  },
  {
    id: 5,
    name: 'Anggota',
    icon: <PiUsersFourFill size={30} />,
    link: '/dashboard',
  },
  {
    id: 6,
    name: 'Jabatan',
    icon: <FaUserTie size={30} />,
    link: '/dashboard',
  },
  {
    id: 7,
    name: 'Grup',
    icon: <MdGroupAdd size={30} />,
    link: '/dashboard',
  },
  {
    id: 1,
    name: 'Tema',
    icon: <IoColorPalette size={30} />,
    link: '/dashboard',
  },
]

export function LayoutBackground({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm' }}
    // padding={'md'}
    >
      <AppShellHeader bg={'#19345E'}>
        <Text c={'white'} pt={10} fz={25}
        >Perbekal Desa Darmasaba</Text>

      </AppShellHeader>
      <AppShellNavbar>
        {dataLayout.map((v, i) => {
          return (
            <Box key={i}>
              <NavLink
                h={100}
                label={<Text c={'#19345E'} fz={20}
                >{v.name}</Text>}
                leftSection={v.icon}
                onClick={() => router.push(`${v.link}`)}
              />
            </Box>
          )
        })}
      </AppShellNavbar>
      <AppShellMain>
        {children}
      </AppShellMain>
    </AppShell>
  );
}
