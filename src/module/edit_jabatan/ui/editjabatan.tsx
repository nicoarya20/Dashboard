"use client"
import { WARNA } from "@/module/_global";
import { ActionIcon, Box, Button, Card, Group, Paper, Select, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FaUserTie } from "react-icons/fa6";
const dataGrup = [
   {
      value: 'grup 1',
      label: 'Grup 1',
   },
   {
      value: 'grup 2',
      label: 'Grup 2',
   },
   {
      value: 'grup 3',
      label: 'Grup 3',
   },
   {
      value: 'grup 4',
      label: 'Grup 4',
   }
]

const dataJabatan = [
   {
      value: 'anggota',
      label: 'Anggota',
   },
   {
      value: 'staff',
      label: 'Staff',
   },
   {
      value: 'bendahara',
      label: 'Bendahara',
   },
   {
      value: 'kepala divisi',
      label: 'Kepala Divisi',
   }
]
export default function EditJabatan() {
   const router = useRouter()
   return (
      <Box>
         <Box>
            <Paper withBorder p={"xs"}>
               <Group>
                  <ActionIcon variant="transparent">
                     <FaUserTie color={WARNA.biruTua} size={25} />
                  </ActionIcon>
                  <Text fw={'-moz-initial'} size='25px'
                     pb={10}
                     pt={10}
                     c={WARNA.biruTua}
                  >Edit Jabatan</Text>
               </Group>
            </Paper>
         </Box>
         <Box mt={20}>
            <Card withBorder>
               <Group>
                  <Stack>
                     <Select
                        label={<Text>Grup</Text>}
                        placeholder="Pilih Grup"
                        data={dataGrup.map((item) => ({
                           value: item.value,
                           label: item.label
                        }))}
                     />
                     <Select
                        label={<Text>Jabatan</Text>}
                        placeholder="Pilih Jabatan"
                        data={dataJabatan.map((item) => ({
                           value: item.value,
                           label: item.label
                        }))}
                     />
                  <Button  bg={WARNA.biruTua} radius={15} fullWidth>Simpan</Button>
                  <Button  bg={WARNA.biruTua} radius={15} fullWidth onClick={() => router.push('/jabatan')} >Kembali</Button>
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
