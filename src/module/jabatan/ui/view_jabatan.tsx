"use client"
import { WARNA } from "@/module/_global";
import { ActionIcon, Button, Flex, Group, Paper, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FaUserTie } from "react-icons/fa6";
import TabJabatan from "./tab_jabatan";


export default function ViewJabatan() {
  const router = useRouter()
  return (
    <>
      <Paper withBorder p={"xs"}>
        <Flex justify="space-between" align={"center"}>
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
        <Button bg={WARNA.biruTua} radius={30} onClick={() => router.push('/tambahjabatan')}>Tambah</Button>
        </Flex>
      </Paper>
      <TabJabatan />
    </>
  )
}
