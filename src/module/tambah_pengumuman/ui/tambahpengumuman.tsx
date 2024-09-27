'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, Group, Paper, Stack, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiMegaphone } from 'react-icons/hi2'

export default function TambahPengumuman() {
   const router = useRouter()
   return (
      <Box>
         <Box>
            <Paper withBorder p={"xs"}>
               <Group>
                  <ActionIcon variant='transparent'>
                     <HiMegaphone color={WARNA.biruTua} size={30} />
                  </ActionIcon>
                  <Text fw={'-moz-initial'} size='25px'
                     pb={10}
                     pt={10}
                     c={WARNA.biruTua}
                  >Tambah Pengumuman</Text>
               </Group>
            </Paper>
         </Box>
         <Button mt={10} bg={WARNA.biruTua} radius={20} onClick={() => router.push("/pengumuman")}>Kembali</Button>
         <Box mt={20}>
            <Card withBorder>
               <Group>
                  <Stack gap={"md"}>
                     <TextInput
                        label="Nama"
                        placeholder='Masukkan Nama'
                     />
                     <TextInput
                        label="Hari"
                        placeholder='Masukkan Hari'
                     />
                     <TextInput
                        label="Jam"
                        placeholder='Masukkan Jam'
                     />
                     <TextInput
                        label="Pengumuman"
                        placeholder='Masukkan Isi Pengumuman'
                     />
                     <Button bg={WARNA.biruTua} radius={20}>Simpan</Button>
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
