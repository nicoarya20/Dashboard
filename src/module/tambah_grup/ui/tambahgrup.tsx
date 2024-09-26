'use client'
import { WARNA } from "@/module/_global";
import { ActionIcon, Box, Button, Card, Group, Paper, Select, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdGroupAdd } from "react-icons/md";


export default function TambahGrup() {
   const router = useRouter()
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
            <Card withBorder>
               <Group>
                  <Stack>
                     <Select
                        label={<Text>Grup</Text>}
                        placeholder="Pilih Grup"
                        data={['Merak', 'Banteng', 'Unta', 'Serigala', 'Gajah', 'Alim']}
                     />
                        <Button bg={WARNA.biruTua} radius={30} fullWidth>Simpan</Button>
                        <Button bg={WARNA.biruTua} radius={30}  onClick={() => router.push('/grup')} fullWidth>Kembali</Button>
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
