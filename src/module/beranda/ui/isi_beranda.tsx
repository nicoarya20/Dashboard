'user client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Card, Flex, Group, Paper, SimpleGrid, Text, } from '@mantine/core'
import React from 'react'
import { FaUserTie } from 'react-icons/fa6'
import { HiMiniPresentationChartBar, HiMiniUserGroup } from 'react-icons/hi2'
import { IoHome } from 'react-icons/io5'
import { MdGroupAdd } from 'react-icons/md'
import { PiUsersFourFill } from 'react-icons/pi'

export default function IsiBeranda() {
  return (
    <Box>
      <Card withBorder padding={"xs"}>
        <Group>
          <ActionIcon variant='transparent'>
            <IoHome color={WARNA.biruTua} size={30} />
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
      <Box pt={20}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 5 }}
        >
          <Box>
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
          </Box>
          <Box>
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
          <Box>
            <Card shadow="sm" padding="lg">
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
        </SimpleGrid>
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', }} >
          <Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', }}>
            <Text fz={20} c='dimmed'>Tidak Ada Pengumuman</Text>
          </Paper>
        </Box>
      </Box>
    </Box >
  )
}
