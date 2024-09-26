"use client"
import { ActionIcon, Box, Button, Flex, Group, Paper, Text } from "@mantine/core";
import { WARNA } from "@/module/_global";
import { PiUsersFourFill } from "react-icons/pi";
import { useRouter } from "next/navigation";
import TabAnggota from "./tab_anggota";

export default function ViewAnggota() {
  const router = useRouter()
  return (
    <Box>
      <Box>
        <Paper withBorder p={"xs"}>
          <Flex justify="space-between" align={"center"}>
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
          <Button bg={WARNA.biruTua} radius={30} onClick={() => router.push('/tambahanggota')}>Tambah</Button>
          </Flex>
        </Paper>
      </Box>
     <TabAnggota/>
    </Box>
  )
}
