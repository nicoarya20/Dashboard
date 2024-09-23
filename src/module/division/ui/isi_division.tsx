"use client"
import { WARNA } from '@/module/_global'
import { ActionIcon, Anchor, Box, Button, Card, Flex, Grid, GridCol, Group, Paper, Table, Text, Textarea, TextInput, } from '@mantine/core'
import React from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { HiMiniUserGroup } from 'react-icons/hi2';
import { TbReportAnalytics } from "react-icons/tb";


export default function IsiDivision() {
  const elements = [
    { number: 1, grup: "Grup 1", divisi: "Divisi 1", deskripsi: "Deskripsi 1", anggota: "Anggota 1" },
    { number: 2, grup: "Grup 2", divisi: "Divisi 2", deskripsi: "Deskripsi 2", anggota: "Anggota 2" },
    { number: 3, grup: "Grup 3", divisi: "Divisi 3", deskripsi: "Deskripsi 3", anggota: "Anggota 3" },
    { number: 4, grup: "Grup 4", divisi: "Divisi 4", deskripsi: "Deskripsi 4", anggota: "Anggota 4" },
    { number: 5, grup: "Grup 5", divisi: "Divisi 5", deskripsi: "Deskripsi 5", anggota: "Anggota 5" },
    { number: 6, grup: "Grup 6", divisi: "Divisi 6", deskripsi: "Deskripsi 6", anggota: "Anggota 6" },
    { number: 7, grup: "Grup 7", divisi: "Divisi 7", deskripsi: "Deskripsi 7", anggota: "Anggota 7" },
    { number: 8, grup: "Grup 8", divisi: "Divisi 8", deskripsi: "Deskripsi 8", anggota: "Anggota 8" },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.number}>
      <Table.Td>{element.number}</Table.Td>
      <Table.Td>{element.grup}</Table.Td>
      <Table.Td>{element.divisi}</Table.Td>
      <Table.Td>{element.deskripsi}</Table.Td>
      <Table.Td>{element.anggota}</Table.Td>
    </Table.Tr>
  ));


  return (
    <Box>
      <Paper withBorder p={"xs"}>
        <Group>
        <ActionIcon variant='transparent'>
        <HiMiniUserGroup color={WARNA.biruTua} size={30}  />
        </ActionIcon>
        <Text fw={'-moz-initial'} size='25px'
          pb={10}
          pt={10}
          c={WARNA.biruTua}
        >Divisi</Text>
        </Group>
      </Paper>
      <Grid>
        <GridCol span={{
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6,
          xl: 6
        }}>
          <Box p={20}>
            <Group>
              <Flex direction={"column"}>
                <Paper withBorder pr={180} >
                  <Flex direction={"column"} pl={15} pt={10} pb={20}>
                    <Text>Grup</Text>
                    <TextInput w={650} placeholder='Masukkan Grup' />
                    <Text pt={10}>Nama Divisi</Text>
                    <TextInput placeholder='Masukkan Divisi' />
                    <Text pt={10}>Deskripsi</Text>
                    <Textarea w={650} placeholder='Masukkan Deskripsi'
                      autosize
                      minRows={2}
                      maxRows={4} />
                    <Text pt={10} >Pilih Anggota</Text>
                    <TextInput pb={20} placeholder='Masukkan Anggota' />
                    <Button bg={WARNA.biruTua}>Simpan</Button>
                  </Flex>
                </Paper>
              </Flex>
            </Group>
          </Box>
        </GridCol>
        <GridCol span={{
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6,
          xl: 6
        }}>
          <Flex pt={20} direction={"row"}>
            <Anchor underline='never'>
              <Card bg={WARNA.biruTua} withBorder p={20} w={450} radius={10} h={150} style={{ justifyContent: "center" }}>
                <Group style={{ justifyContent: "center" }}>
                  <BsFillPlusCircleFill size={50} color={"white"} />
                  <Text fw={'-moz-initial'} size='25px' c={'white'} ta={'center'} >Tambah Divisi</Text>
                </Group>
              </Card>
            </Anchor>
            <Anchor underline='never'>
              <Card bg={WARNA.biruTua} withBorder p={20} w={500} radius={10} h={150} style={{ justifyContent: "center" }}>
                <Group style={{ justifyContent: "center" }}>
                  <FiFilter size={50} color={"white"} />
                  <Text ta={'center'} fw={'-moz-initial'} size='25px' c={'white'}>Filter</Text>
                </Group>
              </Card>
            </Anchor>
          </Flex>
          <Anchor underline='never'>
            <Card bg={WARNA.biruTua} withBorder p={20} w={950} radius={10} pt={20} h={175} style={{ justifyContent: "center" }}>
              <Group style={{ justifyContent: "center" }}>
                <TbReportAnalytics size={50} color='white' />
                <Text ta={'center'} fw={'-moz-initial'} size='25px' c={'white'}>Report</Text>
              </Group>
            </Card>
          </Anchor>
        </GridCol>
        <GridCol span={6}>
          <Box pl={20}>
            <Card bg={WARNA.biruTua} withBorder p={20} w={1905} radius={10} pt={20} h={600}>
              <Text pb={10} fw={'-moz-initial'} size='25px' c={'white'}>Divisi</Text>
              <Card bg={"white"} withBorder p={20} w={1860} radius={10} pt={20} h={600}>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>No</Table.Th>
                      <Table.Th>Grup</Table.Th>
                      <Table.Th>Divisi</Table.Th>
                      <Table.Th>Deskripsi</Table.Th>
                      <Table.Th>Anggota</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
                </Table>
              </Card>
            </Card>
          </Box>
        </GridCol>
      </Grid>

    </Box>
  )
}
