'use client'
import { WARNA } from "@/module/_global";
import { ActionIcon, Anchor, Box, Button, Center, Flex, Group, Paper, Table, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PiChatsFill } from "react-icons/pi";

const dataDiskusi = [
  {
    id: "1",
    number: "1",
    nama: "Khoirul",
    waktu: "13:00",
    hari: "Senin",
    komentar: "Ini Komentar"
  },
  {
    id: "2",
    number: "2",
    nama: "Khoirul",
    waktu: "13:00",
    hari: "Senin",
    komentar: "Ini Komentar"
  },
  {
    id: "3",
    number: "3",
    nama: "Khoirul",
    waktu: "13:00",
    hari: "Senin",
    komentar: "Ini Komentar"
  },
  {
    id: "4",
    number: "4",
    nama: "Khoirul",
    waktu: "13:00",
    hari: "Senin",
    komentar: "Ini Komentar"
  },
  {
    id: "5",
    number: "5",
    nama: "Khoirul",
    waktu: "13:00",
    hari: "Senin",
    komentar: "Ini Komentar"
  },
]


export default function IsiDiskusi() {
  const router = useRouter()

  const rows = dataDiskusi.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.number}</Table.Td>
      <Table.Td>{element.nama}</Table.Td>
      <Table.Td>{element.waktu}</Table.Td>
      <Table.Td>{element.hari}</Table.Td>
      <Table.Td>{element.komentar}</Table.Td>
      <Table.Td>
        <Group justify="center">
          <Anchor underline="never">
            <FaEdit onClick={()=>router.push("/editdiskusi")} color={WARNA.biruTua} size={30} />
            <MdDelete color={WARNA.biruTua} size={30} />
          </Anchor>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Box>
      <Box>
        <Paper withBorder p={"xs"}>
          <Flex justify={"space-between"} align={"center"}>
            <Group>
              <ActionIcon variant='transparent'>
                <PiChatsFill color={WARNA.biruTua} size={30} />
              </ActionIcon>
              <Text fw={'-moz-initial'} size='25px'
                pb={10}
                pt={10}
                c={WARNA.biruTua}
              >Diskusi</Text>
            </Group>
            <Button bg={WARNA.biruTua} radius={20} onClick={() => router.push("/tambahdiskusi")}>Tambah</Button>
          </Flex>
        </Paper>
      </Box>
      <Box pt={20}>
        <Table withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th align="center" style={{justifyContent: "center"}}>No</Table.Th>
              <Table.Th align="center" style={{justifyContent: "center"}}>Nama</Table.Th>
              <Table.Th align="center" style={{justifyContent: "center"}}>Waktu</Table.Th>
              <Table.Th align="center" style={{justifyContent: "center"}}>Hari</Table.Th>
              <Table.Th align="center" style={{justifyContent: "center"}}>Komentar</Table.Th>
              <Table.Th align="center" style={{justifyContent: "center"}}>
                <Center>
                  Action
                </Center>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Box>
    </Box>
  )
}
