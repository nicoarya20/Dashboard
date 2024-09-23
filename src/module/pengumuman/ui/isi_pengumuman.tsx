import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Group, Paper, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { HiMegaphone } from 'react-icons/hi2'

export default function IsiPengumuman() {
  return (
    <Box>
      <Paper withBorder p={"xs"}>
        <Group>
          <ActionIcon variant='transparent'>
          <HiMegaphone color={WARNA.biruTua} size={30} />
          </ActionIcon>
        <Text fw={'-moz-initial'} size='25px'
          pb={10}
          pt={10}
          c={WARNA.biruTua}
        >Pengumuman</Text>
        </Group>
      </Paper>
      <SimpleGrid cols={3}>
      <Box pt={20}>
        <Paper p={250} withBorder >
          <Text ta={"center"} c={"dimmed"}>Tidak Ada Pengumuman</Text>
        </Paper>
      </Box>
      <Box pt={20}>
        <Paper p={250} withBorder >
          <Text ta={"center"} c={"dimmed"}>Tidak Ada Pengumuman</Text>
        </Paper>
      </Box>
      <Box pt={20}>
        <Paper p={250} withBorder >
          <Text ta={"center"} c={"dimmed"}>Tidak Ada Pengumuman</Text>
        </Paper>
      </Box>
      <Box pt={20}>
        <Paper p={250} withBorder >
          <Text ta={"center"} c={"dimmed"}>Tidak Ada Pengumuman</Text>
        </Paper>
      </Box>
      <Box pt={20}>
        <Paper p={250} withBorder >
          <Text ta={"center"} c={"dimmed"}>Tidak Ada Pengumuman</Text>
        </Paper>
      </Box>
      <Box pt={20}>
        <Paper p={250} withBorder >
          <Text ta={"center"} c={"dimmed"}>Tidak Ada Pengumuman</Text>
        </Paper>
      </Box>
    </SimpleGrid>
      
    </Box> 
  )
}
