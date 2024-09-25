'use client'
import { WARNA } from "@/module/_global";
import { ActionIcon, Anchor, Box, Button, Flex, Grid, GridCol, Group, Paper, Select, SimpleGrid, Table, Text, TextInput } from "@mantine/core";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { PiUsersFourFill } from "react-icons/pi";


export default function IsiAnggotaTidakAktif() {
   const elements = [
      { number: 1, grup: "Grup 1", jabatan: "Anggota tidak aktif", userrole: "Admin", nama: "Haryono", email: "haryono@gmail.com", tlp: "+6281345678910" },
      { number: 2, grup: "Grup 2", jabatan: "Staff", userrole: "Wakil Super Admin", nama: "Haryanto", email: "haryanto@gmail.com", tlp: "+6281345678910" },
      { number: 3, grup: "Grup 3", jabatan: "Kepala Devisi", userrole: "Wakil Admin", nama: "Handoko", email: "handoko@gmail.com", tlp: "+6281345678910" },
      { number: 4, grup: "Grup 4", jabatan: "Staff", userrole: "User", nama: "Hartanto", email: "hartanto@gmail.com", tlp: "+6281345678910" },
      { number: 5, grup: "Grup 5", jabatan: "Anggota", userrole: "Admin", nama: "Triyono", email: "triyono@gmail.com", tlp: "+6281345678910" },
      { number: 6, grup: "Grup 6", jabatan: "Kepala Divisi", userrole: "Wakil Admin", nama: "Triyanto", email: "triyanto@gmail.com", tlp: "+6281345678910" },
      { number: 7, grup: "Grup 7", jabatan: "Anggota", userrole: "User", nama: "Samsul", email: "samsul@gmail.com", tlp: "+6281345678910" },
      { number: 8, grup: "Grup 8", jabatan: "Staff", userrole: "Admin", nama: "Mariono", email: "mariono@gmail.com", tlp: "+6281345678910" }
   ];

   const rows = elements.map((element) => (
      <Table.Tr key={element.jabatan}>
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
         <Box pr={5} pt={10} >
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
         </Box>
      </Box>
   )
}
