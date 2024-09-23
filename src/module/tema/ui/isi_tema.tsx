import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Group, Paper, Text } from '@mantine/core'
import React, { useState } from 'react'
import { IoColorPalette } from 'react-icons/io5'

export default function IsiTema() {
   const [value, onChange] = useState('rgba()')
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
            >Tema</Text>
            </Group>
         </Paper>
         </Box>
         <Box>

         </Box>
   </Box>
  )
}
