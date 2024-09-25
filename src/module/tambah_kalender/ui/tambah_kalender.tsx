import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Group, Paper, Text } from '@mantine/core'
import React from 'react'
import { IoCalendarSharp } from 'react-icons/io5'

export default function TambahKalender() {
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
         >Tambah Kalender</Text>
       </Group>
     </Paper>
   </Box>
   </Box>
  )
}
