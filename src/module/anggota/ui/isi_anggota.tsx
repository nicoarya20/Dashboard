'use client'
import { WARNA } from "@/module/_global";
import { ActionIcon, Anchor, Box, Button, Flex, Grid, GridCol, Group, Paper, Select, SimpleGrid, Table, Text, TextInput } from "@mantine/core";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { PiUsersFourFill } from "react-icons/pi";


export default function IsiAnggota() {
   const elements = [
      { number: 1, grup: "Grup 1", jabatan: "Anggota", userrole: "Admin", nama: "Haryono", email: "haryono@gmail.com", tlp: "+6281345678910" },
      { number: 2, grup: "Grup 2", jabatan: "Staff", userrole: "Wakil Super Admin", nama: "Haryanto", email: "haryanto@gmail.com", tlp: "+6281345678910" },
      { number: 3, grup: "Grup 3", jabatan: "Kepala Devisi", userrole: "Wakil Admin", nama: "Handoko", email: "handoko@gmail.com", tlp: "+6281345678910" },
      { number: 4, grup: "Grup 4", jabatan: "Staff", userrole: "User", nama: "Hartanto", email: "hartanto@gmail.com", tlp: "+6281345678910" },
      { number: 5, grup: "Grup 5", jabatan: "Anggota", userrole: "Admin", nama: "Triyono", email: "triyono@gmail.com", tlp: "+6281345678910" },
      { number: 6, grup: "Grup 6", jabatan: "Kepala Divisi", userrole: "Wakil Admin", nama: "Triyanto", email: "triyanto@gmail.com", tlp: "+6281345678910" },
      { number: 7, grup: "Grup 7", jabatan: "Anggota", userrole: "User", nama: "Samsul", email: "samsul@gmail.com", tlp: "+6281345678910" },
      { number: 8, grup: "Grup 8", jabatan: "Staff", userrole: "Admin", nama: "Mariono", email: "mariono@gmail.com", tlp: "+6281345678910" }
   ];

   const rows = elements.map((element) => (
      <Table.Tr key={element.number}>
         <Table.Td>{element.number}</Table.Td>
         <Table.Td>{element.jabatan}</Table.Td>
         <Table.Td>{element.grup}</Table.Td>
         <Table.Td>{element.userrole}</Table.Td>
         <Table.Td>{element.nama}</Table.Td>
         <Table.Td>{element.email}</Table.Td>
         <Table.Td>{element.tlp}</Table.Td>
      </Table.Tr>
   ));
   return (
      <Box>
         <Paper withBorder p={"xs"}>
            <Group>
            <ActionIcon variant="transparent">
            <PiUsersFourFill color={WARNA.biruTua} size={30} />
            </ActionIcon>
            <Text fw={'-moz-initial'} size='25px'
               pb={10}
               pt={10}
               c={WARNA.biruTua}
            >Anggota</Text>
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
                        pt={10} pr={10}
                        label={<Text>Jabatan</Text>}
                        placeholder="Pilih Jabatan"
                        data={['Anggota', 'Staff', 'Kepala Divisi']}
                     />
                     <Select
                        pt={10} pr={10}
                        label={<Text>User Role</Text>}
                        placeholder="Pilih Role"
                        data={['Wakil Super Admin', 'Admin', 'User', 'Wakil Admin']}
                     />
                     <TextInput
                        pt={10} pr={10}
                        label={<Text>Nama</Text>}
                        placeholder="Nama"
                     />
                     <TextInput
                        pt={10} pr={10}
                        label={<Text>Email</Text>}
                        placeholder="Email"
                     />
                     <TextInput
                        pt={10} pr={10}
                        label={<Text>No. Telpon</Text>}
                        placeholder="+62 8XX XXX XXX"
                     />
                     <Box pt={10} pb={15} pr={10} >
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
                                 <Text fw={'-moz-initial'} size='25px' c={'white'} ta={'center'} >Tambah Anggota</Text>
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
                        <Table.Th style={{justifyContent: "center"}}>No</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Jabatan</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Grup</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>User Role</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Nama</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Email</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>No.Telp</Table.Th>
                     </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
               </Table>
            </Paper>
         </Box>

      </Box>
   )
}
