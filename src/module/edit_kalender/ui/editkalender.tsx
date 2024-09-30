'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, Group, Paper, Stack, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { IoCalendarSharp } from 'react-icons/io5'

export default function EditKalender() {
   const router = useRouter()
   return (
      <Box>
         <Box mb={20}>
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
         <Button variant='subtle' leftSection={<BiArrowBack />} radius={20} c={WARNA.biruTua} onClick={() => router.push("/kalender")}>Kembali</Button>
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
