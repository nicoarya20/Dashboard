'use client'
import { WARNA } from '@/module/_global'
import { Box, Button, Paper, Select, TextInput, Text, Flex, Group, ActionIcon } from '@mantine/core'
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
                     >Anggota</Text>
                  </Group>
               </Flex>
            </Paper>
         </Box>
         <Box>
            <Paper withBorder pl={10}>
               <Select
                  pt={10} pr={10}
                  label={<Text>Grup</Text>}
                  placeholder="Pilih Grup"
                  data={['Dinas']}
               />
               <Select
                  pt={10} pr={10}
                  label={<Text>Jabatan</Text>}
                  placeholder="Pilih Jabatan"
                  data={['Anggota', 'Staff', 'Kepala Divisi']}
               />
               <Select
                  pt={10} pr={10}
                  label={<Text>User Role</Text>}
                  placeholder="Pilih Role"
                  data={['Wakil Super Admin', 'Admin', 'User', 'Wakil Admin']}
               />
               <TextInput
                  pt={10} pr={10}
                  label={<Text>Nama</Text>}
                  placeholder="Nama"
               />
               <TextInput
                  pt={10} pr={10}
                  label={<Text>Email</Text>}
                  placeholder="Email"
               />
               <TextInput
                  pt={10} pr={10}
                  label={<Text>No. Telpon</Text>}
                  placeholder="+62 8XX XXX XXX"
               />
               <Box pt={10} pb={15} pr={10} >
                  <Flex direction={"column"}>
                     <Button mb={10} bg={WARNA.biruTua} fullWidth>
                        Simpan
                     </Button>
                     <Button bg={WARNA.biruTua} fullWidth onClick={() => router.push('/anggota')}>
                        Back
                     </Button>
                  </Flex>
               </Box>
            </Paper>
         </Box>
      </Box>
   )
}
