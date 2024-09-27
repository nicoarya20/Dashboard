'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, ColorInput, Flex, Group, Paper, Stack, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { IoColorPalette } from 'react-icons/io5'


export default function TambahTema() {
   const router = useRouter()
   const [warna1, setWarna1] = useState("")
   const [warna2, setWarna2] = useState("")
   const [warna3, setWarna3] = useState("")
   const [warna4, setWarna4] = useState("")
   const [warna5, setWarna5] = useState("")
   const [warna6, setWarna6] = useState("")
   return (
      <Box>
         <Box>
            <Paper withBorder p={"xs"}>
               <Group>
                  <ActionIcon variant="transparent">
                     <IoColorPalette color={WARNA.biruTua} size={30} />
                  </ActionIcon>
                  <Text fw={'-moz-initial'} size='25px'
                     pb={10}
                     pt={10}
                     c={WARNA.biruTua}
                  >Tambah Tema</Text>
               </Group>
            </Paper>
         </Box>
         {/* <Box mt={10}>
            <Stack>
               
               <TextInput
                  label="Tema"
                  placeholder='Masukkan Tema'
               />
               <Text>Warna 1</Text>
               <Menu>
                  <Menu.Target>
                     <Paper component={ActionIcon}
                        bg={color} w={200} withBorder h={24} />
                  </Menu.Target>
                  <Menu.Dropdown>
                     <Stack w={200}>
                        {listColors.map((colorOption, i) => (
                           <Menu.Item
                              onClick={() => setColor(colorOption.value)}
                              key={i}
                              c={colorOption}
                           >
                              <FaCircle color={colorOption.value} style={{ marginRight: 10 }} />
                              {colorOption.label}
                           </Menu.Item>
                        ))}
                     </Stack>
                  </Menu.Dropdown>
               </Menu>
               <Text>Warna 2</Text>
               <Menu>
                  <Menu.Target>
                     <Paper component={ActionIcon}
                        bg={color1} w={200} withBorder h={24} />
                  </Menu.Target>
                  <Menu.Dropdown>
                     <Stack w={200}>
                        {listColors1.map((colorOption1, i) => (
                           <Menu.Item
                              onClick={() => setColor1(colorOption1.value1)}
                              key={i}
                              c={colorOption1}
                           >
                              <FaCircle color={colorOption1.value1} style={{ marginRight: 10 }} />
                              {colorOption1.label1}
                           </Menu.Item>
                        ))}
                     </Stack>
                  </Menu.Dropdown>
               </Menu>
            </Stack>
            <Text>Warna 3</Text>
               <Menu>
                  <Menu.Target>
                     <Paper component={ActionIcon}
                        bg={color2} w={200} withBorder h={24} />
                  </Menu.Target>
                  <Menu.Dropdown>
                     <Stack w={200}>
                        {listColors2.map((colorOption2, i) => (
                           <Menu.Item
                              onClick={() => setColor2(colorOption2.value2)}
                              key={i}
                              c={colorOption2}
                           >
                              <FaCircle color={colorOption2.value2} style={{ marginRight: 10 }} />
                              {colorOption2.label2}
                           </Menu.Item>
                        ))}
                     </Stack>
                  </Menu.Dropdown>
               </Menu>
               <Text>Warna 4</Text>
               <Menu>
                  <Menu.Target>
                     <Paper component={ActionIcon}
                        bg={color3} w={200} withBorder h={24} />
                  </Menu.Target>
                  <Menu.Dropdown>
                     <Stack w={200}>
                        {listColors3.map((colorOption3, i) => (
                           <Menu.Item
                              onClick={() => setColor3(colorOption3.value3)}
                              key={i}
                              c={colorOption3}
                           >
                              <FaCircle color={colorOption3.value3} style={{ marginRight: 10 }} />
                              {colorOption3.label3}
                           </Menu.Item>
                        ))}
                     </Stack>
                  </Menu.Dropdown>
               </Menu>
               <Text>Warna 5</Text>
               <Menu>
                  <Menu.Target>
                     <Paper component={ActionIcon}
                        bg={color3} w={200} withBorder h={24} />
                  </Menu.Target>
                  <Menu.Dropdown>
                     <Stack w={200}>
                        {listColors4.map((colorOption4, i) => (
                           <Menu.Item
                              onClick={() => setColor4(colorOption4.value4)}
                              key={i}
                              c={colorOption4}
                           >
                              <FaCircle color={colorOption4.value4} style={{ marginRight: 10 }} />
                              {colorOption4.label4}
                           </Menu.Item>
                        ))}
                     </Stack>
                  </Menu.Dropdown>
               </Menu>
               <Text>Warna 4</Text>
               <Menu>
                  <Menu.Target>
                     <Paper component={ActionIcon}
                        bg={color3} w={200} withBorder h={24} />
                  </Menu.Target>
                  <Menu.Dropdown>
                     <Stack w={200}>
                        {listColors3.map((colorOption3, i) => (
                           <Menu.Item
                              onClick={() => setColor3(colorOption3.value3)}
                              key={i}
                              c={colorOption3}
                           >
                              <FaCircle color={colorOption3.value3} style={{ marginRight: 10 }} />
                              {colorOption3.label3}
                           </Menu.Item>
                        ))}
                     </Stack>
                  </Menu.Dropdown>
               </Menu>
            </Box> */}

         <Box>
            <Button mt={10} mb={10}
               bg={WARNA.biruTua}
               radius={20}
               onClick={() => router.push("/tema")}>Back</Button>
            <Card withBorder>
               <Group>
                  <Stack mt={20}>
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
