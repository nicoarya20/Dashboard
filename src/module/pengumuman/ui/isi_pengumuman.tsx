'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Flex, Group, Paper, SimpleGrid, Text } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiMegaphone } from 'react-icons/hi2'

export default function IsiPengumuman() {
  const router = useRouter()
  return (
    <Box>
      <Paper withBorder p={"xs"}>
        <Flex justify={"space-between"} align={"center"}>
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
        <Button bg={WARNA.biruTua} radius={20} onClick={()=>router.push("/tambahpengumuman")}>Tambah</Button>
        </Flex>
      </Paper>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
      {[...Array(6)].map((_, i) => (
          <Box pt={20} key={i}>
            <Paper withBorder p={100}>
              <Text ta="center" c="dimmed">Tidak Ada Pengumuman</Text>
            </Paper>
          </Box>
        ))}
    </SimpleGrid>
      
    </Box> 
  )
}
