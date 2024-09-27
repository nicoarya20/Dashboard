'use client'
import { WARNA } from "@/module/_global";
import { ActionIcon, Anchor, Box, Center, Group, Paper, Table } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function IsiJabatanTidakAktif() {
   const elements = [
      { number: 1, grup: "Grup 1", jabatan: "Anggotan tidak aktif" },
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
         <Table.Td>
            <Group >
               <Anchor underline="never">
               <FaEdit onClick={()=>router.push("/editjabatan")} color={WARNA.biruTua} size={30} />
               <MdDelete color={WARNA.biruTua} size={30} />
               </Anchor>
            </Group>
         </Table.Td>
      </Table.Tr>
   ));
   const router = useRouter()
   return (
      <Box>
         <Box pr={5} pt={20} >
            <Paper withBorder>
               <Table>
                  <Table.Thead>
                     <Table.Tr pl={10}>
                        <Table.Th style={{ justifyContent: "center" }}>No</Table.Th>
                        <Table.Th style={{ justifyContent: "center" }}>Jabatan</Table.Th>
                        <Table.Th style={{ justifyContent: "center" }}>Grup</Table.Th>
                        <Table.Th style={{justifyContent: "center"}} >
                           Action
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
