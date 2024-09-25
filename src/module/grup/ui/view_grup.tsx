'use client'
import { ActionIcon, Box, Button, Flex, Group, Paper, Text } from "@mantine/core";
import IsiGrup from "./isi_grup";
import { MdGroupAdd } from "react-icons/md";
import { WARNA } from "@/module/_global";
import TabGrup from "./tab_grup";
import { useRouter } from "next/navigation";


export default function ViewGrup() {
  const router = useRouter()
  return (
    <Box>
    <Paper withBorder p={"xs"}>
      <Flex justify="space-between" align={"center"}>
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
       <Button bg={WARNA.biruTua} radius={30} onClick={() => router.push('/tambahgrup')}>Tambah</Button>
       </Flex>
    </Paper>
    <TabGrup/>
    </Box>
  )
}
