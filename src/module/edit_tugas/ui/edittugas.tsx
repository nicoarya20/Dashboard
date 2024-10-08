'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, Group, Paper, Select, Stack, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'
import { MdEditDocument } from 'react-icons/md'

export default function EditTugas() {
   const router = useRouter()
   return (
      <Box>
         <Box mb={20}>
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
         <Button leftSection={<BiArrowBack />} variant='subtle' c={WARNA.biruTua} onClick={() => router.push("/tugas")}>Kembali</Button>
         <Box mt={20}>
            <Card withBorder >
               <Group>
                  <Stack gap={"xs"}>
                     <Text>
                        Tugas
                     </Text>
                     <Select
                        placeholder='Pilih Kegiatan'
                        data={['Segera', 'Dikerjakan', 'Selesai', 'Batal']}
                     />
                     <Text>Nama Tugas</Text>
                     <TextInput
                        placeholder='Nama Tugas'
                     />
                     <Text>Jam Tugas</Text>
                     <TextInput
                        placeholder='Jam Terlaksana'
                     />
                     <Text>Tanggal Tugas</Text>
                     <TextInput
                        placeholder='Tanggal Terlaksana'
                     />
                     <Text>Deskripsi</Text>
                     <TextInput
                        placeholder='Deskripsi Tugas'
                     />
                     <Button bg={WARNA.biruTua} radius={30} >Simpan</Button>
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
