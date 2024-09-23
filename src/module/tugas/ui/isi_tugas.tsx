import { WARNA } from "@/module/_global";
import { ActionIcon, Box, Group, Paper, Text } from "@mantine/core";
import { MdEditDocument } from "react-icons/md";


export default function IsiTugas() {
  return (
    <Box>
      <Box>
      <Paper withBorder p={"xs"}>
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
         </Paper>
      </Box>
    </Box>
  )
}
