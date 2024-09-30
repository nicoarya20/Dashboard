'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, Group, Paper, Select, Stack, Text } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'
import { MdGroupAdd } from 'react-icons/md'

export default function EditGrup() {
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
                  >Edit Grup</Text>
               </Group>
            </Paper>
         </Box>
         <Button leftSection={<BiArrowBack />} c={WARNA.biruTua} mb={20} variant='subtle' radius={30} onClick={() => router.push('/grup')} >Kembali</Button>
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
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
