import { WARNA } from "@/module/_global";
import { ActionIcon, Box, Button, Flex, Group, Paper, Select, Text } from "@mantine/core";
import { MdGroupAdd } from "react-icons/md";

export default function TambahGrup() {
   return (
      <Box>
         <Box mb={20}>
            <Paper withBorder p={"xs"}>
            <Group>
               <ActionIcon variant="transparent">
                  <MdGroupAdd color={WARNA.biruTua} size={30} />
               </ActionIcon>
               <Text fw={'-moz-initial'} size='25px'
                  pb={10}
                  pt={10}
                  c={WARNA.biruTua}
               >Tambah Grup</Text>
            </Group>
            </Paper>
         </Box>
         <Box>
            <Paper withBorder pl={10}>
               <Select
                  pt={10} pr={10} mb={10}
                  label={<Text>Grup</Text>}
                  placeholder="Pilih Grup"
                  data={['Merak', 'Banteng', 'Unta', 'Serigala', 'Gajah', 'Alim']}
               />
               <Flex direction={"column"} mr={10}>
               <Button bg={WARNA.biruTua} radius={30} mb={10}  fullWidth>Simpan</Button>
               <Button bg={WARNA.biruTua} radius={30} mb={10}  fullWidth>Back</Button>
               </Flex>
            </Paper>
         </Box>
      </Box>
   )
}
