'use client'
import { WARNA } from "@/module/_global";
import { Anchor, Box, Group, Table } from "@mantine/core";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const dataTugas = [
  { number: 1, jabatan: "Anggota tidak aktif", userrole: "Admin", nama: "Haryono", deskripsitugas: "tugas 1", tlp: "+6281345678910" },
  { number: 2, jabatan: "Staff", userrole: "Wakil Super Admin", nama: "Haryanto", deskripsitugas: "tugas 2", tlp: "+6281345678910" },
  { number: 3, jabatan: "Kepala Devisi", userrole: "Wakil Admin", nama: "Handoko", deskripsitugas: "tugas 3", tlp: "+6281345678910" },
  { number: 4, jabatan: "Staff", userrole: "User", nama: "Hartanto", deskripsitugas: "tugas 4", tlp: "+6281345678910" },
  { number: 5, jabatan: "Anggota", userrole: "Admin", nama: "Triyono", deskripsitugas: "tugas 5", tlp: "+6281345678910" },

];

const rows = dataTugas.map((element) => (
  <Table.Tr key={element.jabatan}>
    <Table.Td>{element.number}</Table.Td>
    <Table.Td>{element.jabatan}</Table.Td>
    <Table.Td>{element.userrole}</Table.Td>
    <Table.Td>{element.nama}</Table.Td>
    <Table.Td>{element.deskripsitugas}</Table.Td>
    <Table.Td>{element.tlp}</Table.Td>
    <Table.Td>
      <Group >
        <Anchor underline="never">
          <FaEdit  color={WARNA.biruTua} size={30} />
          <MdDelete color={WARNA.biruTua} size={30} />
        </Anchor>
      </Group>
    </Table.Td>
  </Table.Tr>
));

export default function IsiKegiatanBatal() {
  
  return (
    <Box>
      <Box pt={20}>
        <Table withTableBorder>
          <Table.Thead>
            <Table.Tr pl={10}>
              <Table.Th style={{ justifyContent: "center" }}>No</Table.Th>
              <Table.Th style={{ justifyContent: "center" }}>Jabatan</Table.Th>
              <Table.Th style={{ justifyContent: "center" }}>User Role</Table.Th>
              <Table.Th style={{ justifyContent: "center" }}>Nama</Table.Th>
              <Table.Th style={{ justifyContent: "center" }}>Deskripsi Tugas</Table.Th>
              <Table.Th style={{ justifyContent: "center" }}>No.Telp</Table.Th>
              <Table.Th style={{ justifyContent: "center" }} >
                Action
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Box>
    </Box>
  )
}
