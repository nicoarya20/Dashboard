'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, Group, Paper, Stack, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'
import { PiChatsFill } from 'react-icons/pi'

export default function TambahDiskusi() {
   const router = useRouter()
   return (
      <Box>
         <Box>
            <Paper withBorder p={"xs"}>
               <Group>
                  <ActionIcon variant='transparent'>
                     <PiChatsFill color={WARNA.biruTua} size={30} />
                  </ActionIcon>
                  <Text fw={'-moz-initial'} size='25px'
                     pb={10}
                     pt={10}
                     c={WARNA.biruTua}
                  >Tambah Diskusi</Text>
               </Group>
            </Paper>
         </Box>
         <Box mt={20}>
            <Card withBorder>
               <Group>
                  <Stack gap={"xs"}>
                     <Text>Nama</Text>
                     <TextInput
                     placeholder='Nama'
                     />
                     <Text>Hari</Text>
                     <TextInput
                     placeholder='Hari'
                     />
                     <Text>Jam</Text>
                     <TextInput
                     placeholder='Jam'
                     />
                     <Text>Komentar</Text>
                     <TextInput
                     placeholder='Komentar'
                     />
                     <Button bg={WARNA.biruTua} radius={20}>Simpan</Button>
                     <Button bg={WARNA.biruTua} radius={20} onClick={()=>router.push("/diskusi")}>Kembali</Button>
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
