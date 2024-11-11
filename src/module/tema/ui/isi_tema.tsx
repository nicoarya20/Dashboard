'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Anchor, Box, Button, Center, ColorSwatch, Flex, Group, Paper, Table, Text } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { FaEdit } from 'react-icons/fa'
import { IoColorPalette } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'

const dataColor = [

   {
      tema: "Tema 1",
      color: "Warna",
      color1: <ColorSwatch color={"#19345E"} />,
      color2: <ColorSwatch color="#F4F9FD"/>,
      color3: <ColorSwatch color="#384288"/>,
      color4: <ColorSwatch color="#FCAA4B"/>,
      color5: <ColorSwatch color="#FCAA4B"/>,
      color6: <ColorSwatch color="#DCEED8"/>
   },
   {

      tema: "Tema 2",
      color: "Warna",
      color1: <ColorSwatch color="#508D4E"/>,
      color2: <ColorSwatch color="#F4F9FD"/>,
      color3: <ColorSwatch color="#3C8754"/>,
      color4: <ColorSwatch color="#FCAA4B"/>,
      color5: <ColorSwatch color="#FCAA4B"/>,
      color6: <ColorSwatch color="#DCEED8"/>
   },
   {

      tema: "Tema 3",
      color: "Warna",
      color1: <ColorSwatch color="#19345E" />,
      color2: <ColorSwatch color="#F4F9FD"/>,
      color3: <ColorSwatch color="#384288"/>,
      color4: <ColorSwatch color="#FCAA4B"/>,
      color5: <ColorSwatch color="#FCAA4B"/>,
      color6: <ColorSwatch color="#DCEED8"/>
   },
   {

      tema: "Tema 4",
      color: "Warna",
      color1: <ColorSwatch color="#508D4E"/>,
      color2: <ColorSwatch color="#F4F9FD"/>,
      color3: <ColorSwatch color="#3C8754"/>,
      color4: <ColorSwatch color="#FCAA4B"/>,
      color5: <ColorSwatch color="#FCAA4B"/>,
      color6: <ColorSwatch color="#DCEED8"/>
   }
]

export default function IsiTema() {
   const router = useRouter()
   const rows = dataColor.map((element) => (
      <Table.Tr key={element.tema}>
         <Table.Td  style={{justifyContent: "center"}}>{element.tema}</Table.Td>
         <Table.Td style={{justifyContent: "center"}}>{element.color}</Table.Td>
         <Table.Td style={{justifyContent: "center"}}>{element.color1}</Table.Td>
         <Table.Td style={{justifyContent: "center"}}>{element.color2}</Table.Td>
         <Table.Td style={{justifyContent: "center"}}>{element.color3}</Table.Td>
         <Table.Td style={{justifyContent: "center"}}>{element.color4}</Table.Td>
         <Table.Td style={{justifyContent: "center"}}>{element.color5}</Table.Td>
         <Table.Td style={{justifyContent: "center"}}>{element.color6}</Table.Td>
         <Table.Td>
        <Group justify='center'>
          <Anchor underline='never'>
            <FaEdit onClick={()=>router.push("/edittema")} color={WARNA.biruTua} size={30} />
            <MdDelete color={WARNA.biruTua} size={30} />
          </Anchor>
        </Group>
      </Table.Td>
      </Table.Tr>
   ));
   return (
      <Box>
         <Box>
            <Paper withBorder p={"xs"}>
               <Flex justify={"space-between"} align={"center"}>
               <Group>
                  <ActionIcon variant="transparent">
                     <IoColorPalette color={WARNA.biruTua} size={30} />
                  </ActionIcon>
                  <Text fw={'-moz-initial'} size='25px'
                     pb={10}
                     pt={10}
                     c={WARNA.biruTua}
                  >Tema</Text>
               </Group>
               <Button bg={WARNA.biruTua} radius={20} onClick={()=>router.push('/tambahtema')}>Tambah</Button>
               </Flex>
            </Paper>
         </Box>
         <Box pt={20}>
            <Paper withBorder p={20}>
               <Table>
                  <Table.Thead>
                     <Table.Tr>
                        <Table.Th style={{justifyContent: "center"}}>Tema</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Warna</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Komponen Warna 1</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Komponen Warna 2</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Komponen Warna 3</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Komponen Warna 4</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Komponen Warna 5</Table.Th>
                        <Table.Th style={{justifyContent: "center"}}>Komponen Warna 6</Table.Th>
                        <Table.Th>
                           <Center>
                              Action
                           </Center>
                        </Table.Th>
                     </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
               </Table>
            </Paper>
         </Box>
      </Box>
   )
}
