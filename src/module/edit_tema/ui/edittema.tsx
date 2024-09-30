'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, ColorInput, Flex, Group, Paper, Stack, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { IoColorPalette } from 'react-icons/io5'


export default function EditTema() {
   const router = useRouter()
   const [warna1, setWarna1] = useState("")
   const [warna2, setWarna2] = useState("")
   const [warna3, setWarna3] = useState("")
   const [warna4, setWarna4] = useState("")
   const [warna5, setWarna5] = useState("")
   const [warna6, setWarna6] = useState("")
   return (
      <Box>
         <Box mb={20}>
            <Paper withBorder p={"xs"}>
               <Group>
                  <ActionIcon variant="transparent">
                     <IoColorPalette color={WARNA.biruTua} size={30} />
                  </ActionIcon>
                  <Text fw={'-moz-initial'} size='25px'
                     pb={10}
                     pt={10}
                     c={WARNA.biruTua}
                  >Edit Tema</Text>
               </Group>
            </Paper>
         </Box>
         <Box>
         <Button c={WARNA.biruTua} variant='subtle' radius={30} leftSection={<BiArrowBack />} onClick={() => router.push("/tema")}>Kembali</Button>
         </Box>
         <Box mt={20}>
            <Card withBorder>
               <Group>
                  <Stack >
                     <TextInput label="Name Tema" placeholder='Name Tema' />
                     <ColorInput
                        label="Warna 1"
                        value={warna1}
                        placeholder="Warna 1"
                        onChange={setWarna1}
                     />
                     <ColorInput
                        label="Warna 2"
                        value={warna2}
                        placeholder="Warna 2"
                        onChange={setWarna2}
                     />
                     <ColorInput
                        label="Warna 3"
                        value={warna3}
                        placeholder="Warna 3"
                        onChange={setWarna3}
                     />
                     <ColorInput
                        label="Warna 4"
                        value={warna4}
                        placeholder="Warna 4"
                        onChange={setWarna4}
                     />
                     <ColorInput
                        label="Warna 5"
                        value={warna5}
                        placeholder="Warna 5"
                        onChange={setWarna5}
                     />
                     <ColorInput
                        label="Warna 6"
                        value={warna6}
                        placeholder="Warna 6"
                        onChange={setWarna6}
                     />
                     <Box mt={10}>
                        <Text>Pallete Warna</Text>
                        <Flex direction={"row"} gap={"sm"}>
                           <Box p={20} bg={warna1} h={30} w={30} style={{
                              borderRadius: 1000
                           }} />
                           <Box p={20} bg={warna2} h={30} w={30} style={{
                              borderRadius: 1000
                           }} />
                           <Box p={20} bg={warna3} h={30} w={30} style={{
                              borderRadius: 1000
                           }} />
                           <Box p={20} bg={warna4} h={30} w={30} style={{
                              borderRadius: 1000
                           }} />
                           <Box p={20} bg={warna5} h={30} w={30} style={{
                              borderRadius: 1000
                           }} />
                           <Box p={20} bg={warna6} h={30} w={30} style={{
                              borderRadius: 1000
                           }} />
                        </Flex>
                     </Box>
                  </Stack>
               </Group>
            </Card>
         </Box>
      </Box>
   )
}
