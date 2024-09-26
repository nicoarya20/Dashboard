'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Box, Button, Card, Group, Paper, Select, Stack, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { HiMiniPresentationChartBar } from 'react-icons/hi2'

export default function TambahKegiatan() {
  const router = useRouter()
  return (
    <Box>
      <Box>
        <Paper withBorder p={"xs"}>
          <Group>
            <ActionIcon variant="transparent">
              <HiMiniPresentationChartBar color={WARNA.biruTua} size={30} />
            </ActionIcon>
            <Text fw={'-moz-initial'} size='25px'
              pb={10}
              pt={10}
              c={WARNA.biruTua}
            >Tambah Kegiatan</Text>
          </Group>
        </Paper>
      </Box>
      <Box mt={20}>
        <Card withBorder >
          <Group>
            <Stack gap={"xs"}>
              <Text>Kegiatan</Text>
              <Select
                placeholder='Pilih Kegiatan'
                data={['Segera', 'Dikerjakan', 'Selesai', 'Batal']}
              />
              <Text>Nama Kegiatan</Text>
              <TextInput
              placeholder='Nama Kegiatan'
              />
              <Text>Jam Kegiatan</Text>
              <TextInput
              placeholder='Jam Terlaksana'
              />
              <Text>Tanggal Kegiatan</Text>
              <TextInput
              placeholder='Tanggal Terlaksana'
              />
              <Text>Deskripsi</Text>
              <TextInput
              placeholder='Deskripsi Kegiatan'
              />
              <Button bg={WARNA.biruTua}>Simpan</Button>
              <Button bg={WARNA.biruTua} onClick={()=>router.push("/kegiatan")}>Kembali</Button>
            </Stack>
          </Group>

        </Card>

      </Box>
    </Box>
  )
}
