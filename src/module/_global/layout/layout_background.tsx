'use client'
import { ActionIcon, AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Box, NavLink, Text } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaUserTie } from 'react-icons/fa6';
import { HiMegaphone, HiMiniPresentationChartBar, HiMiniUserGroup } from 'react-icons/hi2';
import { IoColorPalette, IoHome } from 'react-icons/io5';
import { MdGroupAdd } from 'react-icons/md';
import { PiUsersFourFill } from 'react-icons/pi';

const dataLayout = [
  {
    id: 1,
    name: 'Beranda',
    icon: <IoHome size={30} />,
    link: '/beranda',
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
    icon: <HiMiniPresentationChartBar size={30} />,
    link: '/kegiatan',
  },
  {
    id: 4,
    name: 'Pengumuman',
    icon: <HiMegaphone size={30} />,
    link: '/pengumuman',
  },
  {
    id: 5,
    name: 'Anggota',
    icon: <PiUsersFourFill size={30} />,
    link: '/anggota',
  },
  {
    id: 6,
    name: 'Jabatan',
    icon: <FaUserTie size={25} />,
    link: '/jabatan',
  },
  {
    id: 7,
    name: 'Grup',
    icon: <MdGroupAdd size={30} />,
    link: '/grup',
  },
  {
    id: 8,
    name: 'Tema',
    icon: <IoColorPalette size={30} />,
    link: '/tema',
  },
]

export function LayoutBackground({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState("");
  const pathname = usePathname();
  useShallowEffect(() => {
    setActive(pathname);
  });
  const router = useRouter()
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm' }}
      
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
                h={60}
                pl={20}
                label={active == v.link ? <Text c={"blue"}>{v.name}</Text> : <Text c={"dark"}>{v.name}</Text>}
                leftSection={
                  <ActionIcon variant="subtle" aria-label="Settings" color={active == v.link ? "blue" : "dark"}>
                    {v.icon}
                  </ActionIcon>
                }
                onClick={() => router.push(`${v.link}`)}
              // active
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
