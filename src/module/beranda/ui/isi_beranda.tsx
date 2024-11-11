'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Card, Center, Flex, Group, Paper, SimpleGrid, Stack, Text, } from '@mantine/core'
import { useShallowEffect } from '@mantine/hooks'
import Link from 'next/link'
import { useState } from 'react'
import { FaUserTie } from 'react-icons/fa6'
import { HiMiniPresentationChartBar, HiMiniUserGroup } from 'react-icons/hi2'
import { IoHome } from 'react-icons/io5'
import { IconType } from 'react-icons/lib'
import { MdGroupAdd } from 'react-icons/md'
import { PiUsersFourFill } from 'react-icons/pi'

const jsonData = [
  {
    id: 1,
    title: "divisi",
    value: 0,
    path: "/divisi"
  },
  {
    id: 2,
    title: "kegiatan",
    value: 0,
    path: "/kegiatan"
  },
  {
    id: 3,
    title: "anggota",
    value: 0,
    path: "/anggota"
  },
  {
    id: 4,
    title: "group",
    value: 0,
    path: "/grup"
  },
  {
    id: 5,
    title: "jabatan",
    value: 0,
    path: "/jabatan"
  }
]

const objectIcon = [
  {
    id: 1,
    icon: HiMiniUserGroup
  },
  {
    id: 2,
    icon: HiMiniPresentationChartBar
  },
  {
    id: 3,
    icon: PiUsersFourFill
  }
  ,
  {
    id: 4,
    icon: MdGroupAdd
  }
  ,
  {
    id: 5,
    icon: FaUserTie
  }
]

export default function IsiBeranda() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, setDataMenu] = useState<any[] | null>(null)

  async function loadData() {
    // ngambil data
    setDataMenu(jsonData)
  }

  useShallowEffect(() => {
    loadData()
  }, [])


  return (
    <Stack>
      {/* <pre>
        {JSON.stringify(dataMenu, null, 2)}
      </pre> */}
      <Card withBorder padding={"xs"}>
        <Group>
          <ActionIcon variant='transparent'>
            <IoHome size={30} color={WARNA.biruTua} />
          </ActionIcon>
          <Text
            fw={'-moz-initial'}
            size='25px'
            pb={10}
            pt={10}
            c={WARNA.biruTua}
          >
            Hello, Welcome Dev !
          </Text>
        </Group>
      </Card>

      <SimpleGrid cols={{ lg: 4, md: 3, sm: 2 }} >
        {jsonData.map((v, k) => <ItemMenu key={k} data={v} />)}
      </SimpleGrid>

      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', }} >
        <Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', }}>
          <Text fz={20} c='dimmed'>Tidak Ada Pengumuman</Text>
        </Paper>
      </Box>
    </Stack>
  )
}

function ItemMenu({ data }: { data: typeof jsonData[0] }) {
  return <Card withBorder padding="lg" component={Link} href={(data.path === "divisi") ? "/beranda" : data.path}>
    <Flex>
      <Center w={100}>
        <CustonIcon data={data.id} />
      </Center>
      <Stack flex={1}>
        <Text fw="bold">{data.title}</Text>
        <Text fw={"bolder"} fz={30}>{data.value}</Text>
      </Stack>
    </Flex>
  </Card>
}

function CustonIcon({ data }: { data: number }) {
  const Icon: IconType = objectIcon.find((v) => v.id === data)?.icon as IconType
  return <Box c={WARNA.biruTua}>
    <Icon size={53} />
  </Box>
}

{/* <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 5 }}
        >
          <Card shadow="sm" padding="lg">
              <Group>
                <ActionIcon
                  size={90}
                  radius={100}
                  bg={'white'}
                >
                  <HiMiniUserGroup size={50} color={WARNA.biruTua} />
                </ActionIcon>
                <Flex direction={"column"}>
                  <Text fw="bold">Divisi</Text>
                  <Text fw={"bolder"} fz={30}>8</Text>
                </Flex>
              </Group>
            </Card>
          <Box className='bdr'>
            <Card shadow="sm" padding="lg">
              <Group>
                <ActionIcon
                  size={90}
                  radius={100}
                  bg={'white'}>
                  <HiMiniPresentationChartBar size={50} color={WARNA.biruTua} />
                </ActionIcon>
                <Flex direction={"column"}>
                  <Text fw={"bold"} >Kegiatan</Text>
                  <Text fw={"bolder"} fz={30}>0</Text>
                </Flex>
              </Group>
            </Card>
          </Box>
          <Box >
            <Card shadow="sm" padding="lg" className='bdr'>
              <Group >
                <ActionIcon
                  size={90}
                  radius={100}
                  bg={'white'}>
                  <PiUsersFourFill size={50} color={WARNA.biruTua} />
                </ActionIcon>
                <Flex direction={"column"}>
                  <Text fw={'bold'}>Anggota</Text>
                  <Text fw={"bolder"} fz={30}>0</Text>

                </Flex>
              </Group>
            </Card>
          </Box>
          <Box>
            <Card shadow='sm' padding='lg'>
              <Group>
                <ActionIcon
                  size={90}
                  radius={100}
                  bg={'white'}
                >
                  <MdGroupAdd size={50} color={WARNA.biruTua} />
                </ActionIcon>
                <Flex direction={"column"}>
                  <Text fw={'bold'}>Grup</Text>
                  <Text fw={'bolder'} fz={30}>0</Text>
                </Flex>
              </Group>
            </Card>
          </Box>
          <Box >
            <Card shadow='sm' padding='lg'>
              <Group>
                <ActionIcon
                  size={90}
                  radius={100}
                  bg={'white'}
                >
                  <FaUserTie size={50} color={WARNA.biruTua} />
                </ActionIcon>
                <Flex direction={"column"}>
                  <Text fw={'bold'}>Jabatan</Text>
                  <Text fw={'bolder'} fz={30}>0</Text>
                </Flex>
              </Group>
            </Card>
          </Box>
        </SimpleGrid> */}
