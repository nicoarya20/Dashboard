'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, Group, Paper, Stack, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoCalendarSharp } from 'react-icons/io5'

export default function EditKalender() {
   const router = useRouter()
   return (
      <Box>
         <Box>
            <Paper withBorder p={"xs"}>
               <Group>
                  <ActionIcon variant="transparent">
                     <IoCalendarSharp color={WARNA.biruTua} size={30} />
                  </ActionIcon>
                  <Text fw={'-moz-initial'} size='25px'
                     pb={10}
                     pt={10}
                     c={WARNA.biruTua}
                  >Edit Kalender</Text>
               </Group>
            </Paper>
         </Box>
         <Button mt={10} bg={WARNA.biruTua} radius={20} onClick={() => router.push("/kalender")}>Kembali</Button>
         <Box mt={20}>
            <Card withBorder>
               <Group>
                  <Stack>
                     <TextInput
                        label="Nama"
                        placeholder='Masukkan Nama'
                     />
                     <TextInput
                        label="Jam"
                        placeholder='Masukkan Jam'
                     />
                     <TextInput
                        label="Tanggal"
                        placeholder='Masukkan Tanggal'
                     />
                     <TextInput
                        label="Deskripsi"
                        placeholder='Masukkan Deskripsi'
                     />
                     <Button bg={WARNA.biruTua} radius={20}>Simpan</Button>
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
