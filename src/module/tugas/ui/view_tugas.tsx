'use client'
import { WARNA } from "@/module/_global";
import { ActionIcon, Box, Button, Flex, Group, Paper, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdEditDocument } from "react-icons/md";
import TabTugas from "./tab_tugas";

export default function ViewTugas() {
  const router = useRouter()
  return (
    <Box>
    <Paper withBorder p={"xs"}>
      <Flex justify={"space-between"} align={"center"}>
        <Group>
          <ActionIcon variant="transparent">
            <MdEditDocument color={WARNA.biruTua} size={30} />
          </ActionIcon>
          <Text fw={'-moz-initial'} size='25px'
            pb={10}
            pt={10}
            c={WARNA.biruTua}
          >Tugas</Text>
        </Group>
        <Button bg={WARNA.biruTua} radius={20} onClick={() => router.push("/tambahtugas")}>Tambah</Button>
      </Flex>
    </Paper>
    <Box mt={20}>
    <TabTugas/>
    </Box>
  </Box>
  )
}
