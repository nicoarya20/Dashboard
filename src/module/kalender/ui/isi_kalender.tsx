'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Center, Flex, Group, Paper, Table, Text } from '@mantine/core'
import { Calendar } from '@mantine/dates'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { IoCalendarSharp } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'


export default function IsiKalender() {
  const dataKalender = [
    {
      number: 1,
      nama: "Makin",
      jam: "10.00",
      tanggal: "10-09-2024",
      deskripsi: "Deskripsi 1",
    },
    {
      number: 2,
      nama: "Niko",
      jam: "10.00",
      tanggal: "10-09-2024",
      deskripsi: "Deskripsi 1",
    },
    {
      number: 3,
      nama: "Nila",
      jam: "10.00",
      tanggal: "10-09-2024",
      deskripsi: "Deskripsi 1",
    },
    {
      number: 4,
      nama: "Miko",
      jam: "10.00",
      tanggal: "10-09-2024",
      deskripsi: "Deskripsi 1",
    },
    {
      number: 5,
      nama: "Maki",
      jam: "10.00",
      tanggal: "10-09-2024",
      deskripsi: "Deskripsi 1",
    },
    {
      number: 6,
      nama: "Madi",
      jam: "10.00",
      tanggal: "10-09-2024",
      deskripsi: "Deskripsi 1",
    }
  ];

  const rows = dataKalender.map((element) => (
    <Table.Tr key={element.number}>
      <Table.Td>{element.number}</Table.Td>
      <Table.Td>{element.nama}</Table.Td>
      <Table.Td>{element.jam}</Table.Td>
      <Table.Td>{element.tanggal}</Table.Td>
      <Table.Td>{element.deskripsi}</Table.Td>
      <Table.Td>
        <Group justify='center'>
        <FaEdit color={WARNA.biruTua} size={30} />
        <MdDelete color={WARNA.biruTua} size={30} />
        </Group>
      </Table.Td>
    </Table.Tr>
  ));
  const router = useRouter()
  return (
    <Box>
      <Box>
        <Paper withBorder p={"xs"}>
          <Flex justify='space-between' align={'center'}>
          <Group>
            <ActionIcon variant="transparent">
              <IoCalendarSharp color={WARNA.biruTua} size={30} />
            </ActionIcon>
            <Text fw={'-moz-initial'} size='25px'
              pb={10}
              pt={10}
              c={WARNA.biruTua}
            >Kalender</Text>
          </Group>
          <Button bg={WARNA.biruTua} radius={30} onClick={() => router.push('/tambahkalender')}>Tambah</Button>
          </Flex>
        </Paper>
      </Box>
      <Box pt={20}>
        <Paper withBorder p={20} >
          <Flex justify='center' align='center' direction={"column"} >
            <Calendar
              pb={10}
              styles={{
                calendarHeaderControl: {
                  fontSize: '14px',
                  width: '30px',
                  height: '30px'
                },
              }}
            />
          </Flex>
        </Paper>
      </Box>
      <Box pt={20}>
        <Paper withBorder p={20} >
          <Table withTableBorder >
            <Table.Thead>
              <Table.Tr pl={10}>
                <Table.Th align='center'>No</Table.Th>
                <Table.Th align='center' style={{ justifyContent: "center" }}>Nama</Table.Th>
                <Table.Th align='center' style={{ justifyContent: "center" }}>Waktu</Table.Th>
                <Table.Th align='center' style={{ justifyContent: "center" }}>Tanggal</Table.Th>
                <Table.Th align='center' style={{ justifyContent: "center" }}>Deskripsi</Table.Th>
                <Table.Th align='center' style={{ justifyContent: "center" }}>
                  <Center>Action</Center>
                </Table.Th>

              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Paper>
      </Box>

    </Box>
  )
}
