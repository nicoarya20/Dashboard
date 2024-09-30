'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Anchor, Box, Button, Flex, Group, Paper, Table, Text } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { FaEdit } from 'react-icons/fa'
import { HiMegaphone } from 'react-icons/hi2'
import { MdDelete } from 'react-icons/md'

const dataTugas = [
  { number: 1, jabatan: "Anggota tidak aktif", userrole: "Admin", nama: "Haryono", deskripsipengumuman: "pengumuman 1", tlp: "+6281345678910" },
  { number: 2, jabatan: "Staff", userrole: "Wakil Super Admin", nama: "Haryanto", deskripsipengumuman: "pengumuman 2", tlp: "+6281345678910" },
  { number: 3, jabatan: "Kepala Devisi", userrole: "Wakil Admin", nama: "Handoko", deskripsipengumuman: "pengumuman 3", tlp: "+6281345678910" },
  { number: 4, jabatan: "Staff", userrole: "User", nama: "Hartanto", deskripsipengumuman: "pengumuman 4", tlp: "+6281345678910" },
  { number: 5, jabatan: "Anggota", userrole: "Admin", nama: "Triyono", deskripsipengumuman: "pengumuman 5", tlp: "+6281345678910" },

];

const rows = dataTugas.map((element) => (
  <Table.Tr key={element.jabatan}>
    <Table.Td>{element.number}</Table.Td>
    <Table.Td>{element.jabatan}</Table.Td>
    <Table.Td>{element.userrole}</Table.Td>
    <Table.Td>{element.nama}</Table.Td>
    <Table.Td>{element.deskripsipengumuman}</Table.Td>
    <Table.Td>{element.tlp}</Table.Td>
    <Table.Td>
      <Group >
        <Anchor underline="never">
          <FaEdit color={WARNA.biruTua} size={30} />
          <MdDelete color={WARNA.biruTua} size={30} />
        </Anchor>
      </Group>
    </Table.Td>
  </Table.Tr>
));

export default function IsiPengumuman() {
  const router = useRouter()
  return (
    <Box>
      <Box>
        <Paper withBorder p={"xs"}>
          <Flex justify={"space-between"} align={"center"}>
            <Group>
              <ActionIcon variant='transparent'>
                <HiMegaphone color={WARNA.biruTua} size={30} />
              </ActionIcon>
              <Text fw={'-moz-initial'} size='25px'
                pb={10}
                pt={10}
                c={WARNA.biruTua}
              >Pengumuman</Text>
            </Group>
            <Button bg={WARNA.biruTua} radius={20} onClick={() => router.push("/tambahpengumuman")}>Tambah</Button>
          </Flex>
        </Paper>
      </Box>
      <Box>
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
