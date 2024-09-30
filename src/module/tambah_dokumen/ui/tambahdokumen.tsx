'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, FileInput, Flex, Group, Paper, Text } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'
// import React, { useState } from 'react'
import { IoDocumentText } from 'react-icons/io5'
import { MdEditDocument } from 'react-icons/md'

export default function TambahDokumen() {
  const router = useRouter()
  // const [value, setValue] = useState<File | null>(null);
  return (
    <Box>
      <Box mb={20}>
        <Paper withBorder p={"xs"}>
          <Group>
            <ActionIcon variant="transparent">
              <IoDocumentText color={WARNA.biruTua} size={30} />
            </ActionIcon>
            <Text fw={'-moz-initial'} size='25px'
              pb={10}
              pt={10}
              c={WARNA.biruTua}
            >Dokumen</Text>
          </Group>
        </Paper>
      </Box>
      <Button variant='subtle' leftSection={<BiArrowBack />}  c={WARNA.biruTua} onClick={() => router.push("/dokumen")}>Kembali</Button>
      <Box mt={20}>
        <Paper withBorder p={50}>
          <Group gap={4} mb={5}>
            <ActionIcon variant='transparent'>
              <MdEditDocument color={WARNA.biruTua} size={50} />
            </ActionIcon>
            <Text>File Data</Text>
          </Group>
          <FileInput
            placeholder="Upload File"
          />
          <Flex direction={'row'} gap={"md"}>
            <Button mt={10} bg={WARNA.biruTua}>Simpan</Button>
          </Flex>
        </Paper>
      </Box>
    </Box>
  )
}
