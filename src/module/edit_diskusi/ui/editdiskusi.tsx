'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, Group, Paper, Stack, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { PiChatsFill } from 'react-icons/pi'

export default function EditDiskusi() {
   const router = useRouter()
   return (
      <Box>
         <Box mb={20}>
            <Paper withBorder p={"xs"}>
               <Group>
                  <ActionIcon variant='transparent'>
                     <PiChatsFill color={WARNA.biruTua} size={30} />
                  </ActionIcon>
                  <Text fw={'-moz-initial'} size='25px'
                     pb={10}
                     pt={10}
                     c={WARNA.biruTua}
                  >Edit Diskusi</Text>
               </Group>
            </Paper>
         </Box>
         <Button variant='subtle' leftSection={<BiArrowBack />} c={WARNA.biruTua} radius={20} onClick={() => router.push("/diskusi")}>Kembali</Button>
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
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
