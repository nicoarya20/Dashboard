'use client'
import { WARNA } from "@/module/_global";
import { ActionIcon, Box, Button, Flex, Group, Paper, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import TabKegiatan from "./tab_kegiatan";

export default function ViewKegiatan() {
  const router = useRouter()
  return (
    <Box>
      <Box mb={20}>
        <Paper withBorder p={"xs"}>
          <Flex justify={"space-between"} align={"center"}>
            <Group>
              <ActionIcon variant="transparent">
                <HiMiniPresentationChartBar color={WARNA.biruTua} size={30} />
              </ActionIcon>
              <Text fw={'-moz-initial'} size='25px'
                pb={10}
                pt={10}
                c={WARNA.biruTua}
              >Kegiatan</Text>
            </Group>
            <Button bg={WARNA.biruTua} radius={20} onClick={() => router.push("/tambahkegiatan")}>Tambah</Button>
          </Flex>
        </Paper>
      </Box>
      <Box>
      <TabKegiatan />
      </Box>
    </Box>
  )
}
