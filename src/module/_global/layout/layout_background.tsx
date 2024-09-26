'use client'
import { ActionIcon, AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Box, Group, Image, NavLink, Text } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaUserTie } from 'react-icons/fa6';
import { HiMegaphone, HiMiniPresentationChartBar, HiMiniUserGroup } from 'react-icons/hi2';
import { IoColorPalette, IoHome } from 'react-icons/io5';
import { MdGroupAdd } from 'react-icons/md';
import { PiUsersFourFill } from 'react-icons/pi';
import { MdEditDocument } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { PiChatsFill } from "react-icons/pi";
import { IoCalendarSharp } from "react-icons/io5";
import { WARNA } from '../fun/WARNA';

const dataLayout = [
  {
    id: 3,
    name: 'Kegiatan',
    icon: <HiMiniPresentationChartBar color={WARNA.biruTua} size={30} />,
    link: '/kegiatan',
  },
  {
    id: 4,
    name: 'Pengumuman',
    icon: <HiMegaphone size={30} color={WARNA.biruTua} />,
    link: '/pengumuman',
  },
  {
    id: 5,
    name: 'Anggota',
    icon: <PiUsersFourFill color={WARNA.biruTua} size={30} />,
    link: '/anggota',
  },
  {
    id: 6,
    name: 'Jabatan',
    icon: <FaUserTie color={WARNA.biruTua} size={25} />,
    link: '/jabatan',
  },
  {
    id: 7,
    name: 'Grup',
    icon: <MdGroupAdd color={WARNA.biruTua} size={30} />,
    link: '/grup',
  },
  {
    id: 8,
    name: 'Tema',
    icon: <IoColorPalette color={WARNA.biruTua} size={30} />,
    link: '/tema',
  },
]

const dataBeranda = [
  {
    id: 1,
    name: 'Beranda',
    icon: <IoHome size={30} color={WARNA.biruTua} />,
    link: '/beranda',
  },
]
const dataDivisi = [
  {
    id: 1,
    name: 'Tugas',
    icon: <MdEditDocument color={WARNA.biruTua} size={30} />,
    link: '/tugas',
  },
  {
    id: 2,
    name: 'Dokumen',
    icon: <IoDocumentText color={WARNA.biruTua}  size={30} />,
    link: '/dokumen',
  },
  {
    id: 3,
    name: 'Diskusi',
    icon: <PiChatsFill color={WARNA.biruTua} size={30} />,
    link: '/diskusi',
  },
  {
    id: 4,
    name: 'Kalender',
    icon: <IoCalendarSharp color={WARNA.biruTua} size={30} />,
    link: '/kalender',
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
        <Group pl={10}>
          <ActionIcon size={50} variant='transparent' pt={5}>
            <Image width={50} height={50} src={"/assets/img/logo/logo-1.png"} alt='' />
          </ActionIcon>
          <Text c={'white'} pt={10} fz={25}
          >PERBEKEL DARMASABA</Text>

        </Group>
      </AppShellHeader>
      <AppShellNavbar>
        {dataBeranda.map((v, i) => {
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

              />
            </Box>
          )
        })}
        <NavLink
          label={<Text c={"dark"}>Divisi</Text>}
          leftSection={<HiMiniUserGroup color={WARNA.biruTua}  size={30}/>}
          childrenOffset={28}
          pl={20}
          h={60}
        >
          {dataDivisi.map((v, i) => {
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

              />
            </Box>
          )
        })}
        </NavLink>
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

              />
            </Box>
          )
        })}
      </AppShellNavbar>
      <AppShellMain>
        <Box p={20}>
        {children}
        </Box>
      </AppShellMain>
    </AppShell>
  );
}
