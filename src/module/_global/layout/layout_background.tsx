'use client'
import { ActionIcon, Anchor, AppShell, Box, Burger, Flex, Group, Image, NavLink, Text } from '@mantine/core';
import { useDisclosure, useShallowEffect } from '@mantine/hooks';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaUserTie } from 'react-icons/fa6';
import { HiMegaphone, HiMiniPresentationChartBar, HiMiniUserGroup } from 'react-icons/hi2';
import { IoCalendarSharp, IoColorPalette, IoDocumentText, IoHome } from 'react-icons/io5';
import { MdEditDocument, MdGroupAdd } from 'react-icons/md';
import { PiChatsFill, PiUsersFourFill } from 'react-icons/pi';
import { WARNA } from '../fun/WARNA';
import { FaUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { RiLayoutTop2Fill } from "react-icons/ri";

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
  {
    id: 9,
    name: 'Banner',
    icon: <RiLayoutTop2Fill color={WARNA.biruTua} size={30} />,
    link: '/banner'
  }
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
    icon: <IoDocumentText color={WARNA.biruTua} size={30} />,
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
  const [opened, { toggle }] = useDisclosure();
  useShallowEffect(() => {
    setActive(pathname);
  });
  const router = useRouter()
  return (
    <>
      <AppShell
        header={{ height: 80 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header bg={'#19345E'}>
          <Flex mt={8} direction="row" justify="space-between" align="center" >
            <Group h="100%" px="md">
              <Burger color={WARNA.bgWhite} opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Image src={'/assets/img/logo/logo-1.png'} alt={'logo'} width={60} height={60} />
              <Text c={'white'} pt={10} fz={25}
              >PERBEKEL DARMASABA</Text>
            </Group>
            <Group mr={20}>
              <Anchor underline='never'>
                <Flex direction={"row"} align={"center"} justify={"center"} gap={"xl"}>
                  <Group>
                    <FaUser color="white" size={20} />
                    <Text fw={"bold"} fz={"sm"} c={"white"}>User</Text>
                  </Group>
                  <Group>
                    <FiLogOut color="white" size={20} />
                    <Text fw={"bold"} fz={"sm"} c={"white"} onClick={() => router.push("/login")}>LogOut</Text>
                  </Group>
                </Flex>
              </Anchor>
            </Group>

          </Flex>
        </AppShell.Header>
        <AppShell.Navbar p="md">
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
            leftSection={<HiMiniUserGroup color={WARNA.biruTua} size={30} />}
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
        </AppShell.Navbar>
        <AppShell.Main>
          <Box p={20}>
            {children}
          </Box>
        </AppShell.Main>
      </AppShell>
    </>
  )
}
