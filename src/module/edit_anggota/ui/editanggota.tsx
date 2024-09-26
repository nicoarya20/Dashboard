'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, Flex, Group, Paper, Select, Stack, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'
import { PiUsersFourFill } from 'react-icons/pi'

export default function EditAnggota() {
   const router = useRouter()
   return (
      <Box>
         <Box>
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
                     >Edit Anggota</Text>
                  </Group>
               </Flex>
            </Paper>
         </Box>
         <Box mt={20}>
            <Card withBorder>
               <Group>
                  <Stack>
                     <Select
                        label="Jabatan"
                        placeholder="Jabatan"
                        data={['Anggota', 'Staff', 'Kepala Devisi']}
                     />
                      <Select
                        label="Grup"
                        placeholder="Grup"
                        data={['Grup 1', 'Grup 2', 'Grup 3','Grup 4','Grup 5','Grup 6','Grup 7','Grup 8']}
                     />
                      <Select
                        label="User Role"
                        placeholder="User Role"
                        data={['Admin', 'Wakil Super Admin', 'Wakil Admin', 'User']}
                     />
                     <TextInput
                        label="Nama"
                        placeholder='Masukkan Nama'
                     />
                     <TextInput
                        label="Email"
                        placeholder='Masukkan Email'
                     />
                      <TextInput
                        label="No.Telpon"
                        placeholder='Masukkan No.Telpon'
                     />
                     <Button bg={WARNA.biruTua} radius={20}>Simpan</Button>
                     <Button bg={WARNA.biruTua} radius={20} onClick={()=>router.push("/anggota")}>Back</Button>
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
