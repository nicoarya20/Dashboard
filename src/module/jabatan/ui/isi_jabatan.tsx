'use client'
import { WARNA } from "@/module/_global";
import { ActionIcon, Anchor, Box, Button, Flex, Grid, GridCol, Group, Paper, Select, SimpleGrid, Table, Text, TextInput } from "@mantine/core";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";


export default function IsiJabatan() {
   const elements = [
      { number: 1, grup: "Grup 1", jabatan: "Anggota" },
      { number: 2, grup: "Grup 2", jabatan: "Staff" },
      { number: 3, grup: "Grup 3", jabatan: "Kepala Devisi" },
      { number: 4, grup: "Grup 4", jabatan: "Staff" },
      { number: 5, grup: "Grup 5", jabatan: "Anggota" },
      { number: 6, grup: "Grup 6", jabatan: "Kepala Divisi" },
      { number: 7, grup: "Grup 7", jabatan: "Anggota" },
      { number: 8, grup: "Grup 8", jabatan: "Staff" }
   ];

   const rows = elements.map((element) => (
      <Table.Tr key={element.number}>
         <Table.Td>{element.number}</Table.Td>
         <Table.Td>{element.jabatan}</Table.Td>
         <Table.Td>{element.grup}</Table.Td>
      </Table.Tr>
   ));
   return (
      <Box>
         <Paper withBorder p={"xs"}>
            <Group>
            <ActionIcon variant="transparent">
            <FaUserTie color={WARNA.biruTua} size={25} />
            </ActionIcon>
            <Text fw={'-moz-initial'} size='25px'
               pb={10}
               pt={10}
               c={WARNA.biruTua}
            >Jabatan</Text>
            </Group>
         </Paper>
         <Box pt={20} >
            <SimpleGrid cols={2}>
               <Box>
                  <Paper withBorder pl={10}>
                     <Select
                        pt={10} pr={10}
                        label={<Text>Grup</Text>}
                        placeholder="Pilih Grup"
                        data={['Dinas']}
                     />
                     <Select
                        pt={30} pr={10}
                        label={<Text>Jabatan</Text>}
                        placeholder="Pilih Jabatan"
                        data={['Anggota', 'Staff', 'Kepala Divisi']}
                     />
                     <Select
                        pt={30} pr={10}
                        label={<Text>User Role</Text>}
                        placeholder="Pilih Role"
                        data={['Wakil Super Admin', 'Admin', 'User', 'Wakil Admin']}
                     />
                     <Box pt={20} pb={15} pr={10} >
                        <Button bg={WARNA.biruTua} fullWidth>
                           Simpan
                        </Button>
                     </Box>
                  </Paper>
               </Box>
               <Box>
                  <Grid>
                     <GridCol span={6}>
                        <Anchor underline="never">
                           <Paper withBorder p={185} bg={WARNA.biruTua} style={{ justifyContent: "center" }}>
                              <Group style={{ justifyContent: "center" }}>
                                 <BsFillPlusCircleFill size={50} color={"white"} />
                                 <Text fw={'-moz-initial'} size='25px' c={'white'} ta={'center'} >Tambah Jabatan</Text>
                              </Group>
                           </Paper>
                        </Anchor>
                     </GridCol>
                     <GridCol span={6} >
                        <Anchor underline="never">
                           <Paper withBorder p={197} bg={WARNA.biruTua} style={{ justifyContent: "center" }}>
                              <Group style={{ justifyContent: "center" }}>
                                 <FiFilter size={50} color={"white"} />
                                 <Text fw={'-moz-initial'} size='25px' c={'white'} ta={'center'} >Filter</Text>
                              </Group>
                           </Paper>
                        </Anchor>
                     </GridCol>
                  </Grid>
               </Box>
            </SimpleGrid>
         </Box>
         <Box pr={5} pt={10} >
            <Paper withBorder>
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
               <Table>
                  <Table.Thead>
                     <Table.Tr pl={10}>
                        <Table.Th style={{ justifyContent: "center" }}>No</Table.Th>
                        <Table.Th  style={{ justifyContent: "center" }}>Jabatan</Table.Th>
                        <Table.Th style={{ justifyContent: "center" }}>Grup</Table.Th>
                     </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
               </Table>
            </Paper>
         </Box>

      </Box>
   )
}
