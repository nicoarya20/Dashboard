'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Anchor, Box, Button, Flex, Group, Paper, SimpleGrid, Table, Text, TextInput } from '@mantine/core'
import React from 'react'
import { MdGroupAdd } from 'react-icons/md'

const dataGrup = [
   { number: 1, grup: "merak" },
   { number: 2, grup: "banteng" },
   { number: 3, grup: "unta" },
   { number: 4, grup: "serigala" },
   { number: 5, grup: "gajah" },
   { number: 6, grup: "alim" }
]

export default function IsiGrup() {
   const rows = dataGrup.map((dataGrup) => (
      <Table.Tr key={dataGrup.grup}>
         <Table.Td>{dataGrup.number}</Table.Td>
         <Table.Td>{dataGrup.grup}</Table.Td>
      </Table.Tr>

   ));
   return (
      <Box>
         <Paper withBorder p={"xs"}>
            <Group>
               <ActionIcon variant="transparent">
                  <MdGroupAdd color={WARNA.biruTua} size={30} />
               </ActionIcon>
               <Text fw={'-moz-initial'} size='25px'
                  pb={10}
                  pt={10}
                  c={WARNA.biruTua}
               >Grup</Text>
            </Group>
         </Paper>
         <Box pt={20} >
            <SimpleGrid cols={2}>
               <Box>
                  <Paper withBorder p={20}>
                     <Text fw={"bold"} pb={20} c={WARNA.biruTua}>Tambah Grup</Text>
                     <Text pb={5}>
                        Grup
                     </Text>
                     <TextInput placeholder='Grup' pb={15} />
                     <Button bg={WARNA.biruTua} fullWidth>Tambah</Button>
                  </Paper>
               </Box>
               <Box>
               <Box bg={WARNA.biruTua}>
                  <Flex direction={"row"} justify={"space-around"} pb={20} pt={10}>
                     <Paper bg={WARNA.biruTua}>
                        <Anchor underline="never">
                           <Text c={'white'} fw={"bold"}>Aktif</Text>
                        </Anchor>
                     </Paper>
                     <Paper bg={WARNA.biruTua}>
                        <Anchor underline="never">
                           <Text c={'white'} fw={"bold"}>Tidak Aktif</Text>
                        </Anchor>
                     </Paper>
                  </Flex>
               </Box>
                  <Table withTableBorder withColumnBorders withRowBorders>
                     <Table.Thead>
                        <Table.Tr>
                           <Table.Th>No</Table.Th>
                           <Table.Th pr={600}>Grup</Table.Th>
                        </Table.Tr>
                     </Table.Thead>
                     <Table.Tbody>{rows}</Table.Tbody>
                  </Table>
               </Box>
            </SimpleGrid>
         </Box>
      </Box>
   )
}