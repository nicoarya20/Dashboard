"use client"
import { WARNA } from "@/module/_global";
import { ActionIcon, Box, Button, Flex, Group, Paper, Select, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FaUserTie } from "react-icons/fa6";
const dataGrup = [
   {
      value: 'grup 1',
      label: 'Grup 1',
   },
   {
      value: 'grup 2',
      label: 'Grup 2',
   },
   {
      value: 'grup 3',
      label: 'Grup 3',
   },
   {
      value: 'grup 4',
      label: 'Grup 4',
   }
]

const dataJabatan = [
   {
      value: 'anggota',
      label: 'Anggota',
   },
   {
      value: 'staff',
      label: 'Staff',
   },
   {
      value: 'bendahara',
      label: 'Bendahara',
   },
   {
      value: 'kepala divisi',
      label: 'Kepala Divisi',
   }
]
export default function TambahJabatan() {
   const router = useRouter()
   return (
      <Box>
         <Box>
         <Paper withBorder p={"xs"}>
            <Group>
            <ActionIcon variant="transparent">
            <FaUserTie color={WARNA.biruTua} size={25} />
            </ActionIcon>
            <Text fw={'-moz-initial'} size='25px'
               pb={10}
               pt={10}
               c={WARNA.biruTua}
            >Tambah Jabatan</Text>
            </Group>
         </Paper>
         </Box>
         <Box mt={20}>
            <Paper withBorder pl={10}>
               <Select
                  pt={10} pr={10}
                  label={<Text>Grup</Text>}
                  placeholder="Pilih Grup"
                  data={dataGrup.map((item) => ({
                     value: item.value,
                     label: item.label
                  }))}
               />
               <Select
                  pt={10} pr={10}
                  label={<Text>Jabatan</Text>}
                  placeholder="Pilih Jabatan"
                  data={dataJabatan.map((item) => ({
                     value: item.value,
                     label: item.label
                  }))}
               />
               <Flex direction={'column'} mr={10}>
               <Button mt={10} mb={10} bg={WARNA.biruTua} radius={15} fullWidth>Simpan</Button>
               <Button mt={10} mb={10} bg={WARNA.biruTua} radius={15} fullWidth onClick={() => router.push('/jabatan')} >Back</Button>
               </Flex>
               
            </Paper>
         </Box>
      </Box>
   )
}
