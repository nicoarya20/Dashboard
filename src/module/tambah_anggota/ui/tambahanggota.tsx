'use client'
import { WARNA } from '@/module/_global'
import { Box, Button, Paper, Select, TextInput, Text, Flex, Group, ActionIcon, Card, Stack } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'
import { PiUsersFourFill } from 'react-icons/pi'

export default function TambahAnggota() {
   const router = useRouter()
   return (
      <Box>
         <Box mb={20}>
            <Paper withBorder p={"xs"}>
               <Flex justify="space-between" align={"center"}>
                  <Group>
                     <ActionIcon variant="transparent">
                        <PiUsersFourFill color={WARNA.biruTua} size={30} />
                     </ActionIcon>
                     <Text fw={'-moz-initial'} size='25px'
                        pb={10}
                        pt={10}
                        c={WARNA.biruTua}
                     >Tambah Anggota</Text>
                  </Group>
               </Flex>
            </Paper>
         </Box>
         <Button radius={20} bg={WARNA.biruTua} onClick={() => router.push('/anggota')}>
            Kembali </Button>
         <Box mt={10}>
            <Card withBorder >
               <Group>
                  <Stack>
                     <Select
                        label={<Text>Grup</Text>}
                        placeholder="Pilih Grup"
                        data={['Dinas']}
                     />
                     <Select
                        label={<Text>Jabatan</Text>}
                        placeholder="Pilih Jabatan"
                        data={['Anggota', 'Staff', 'Kepala Divisi']}
                     />
                     <Select
                        label={<Text>User Role</Text>}
                        placeholder="Pilih Role"
                        data={['Wakil Super Admin', 'Admin', 'User', 'Wakil Admin']}
                     />
                     <TextInput
                        label={<Text>Nama</Text>}
                        placeholder="Nama"
                     />
                     <TextInput
                        label={<Text>Email</Text>}
                        placeholder="Email"
                     />
                     <TextInput
                        label={<Text>No. Telpon</Text>}
                        placeholder="+62 8XX XXX XXX"
                     />
                     <Button radius={20} bg={WARNA.biruTua} fullWidth>
                        Simpan
                     </Button>
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
