'use client'
import { WARNA } from '@/module/_global';
import { ActionIcon, Box, Button, Card, Flex, Group, Paper, Select, Stack, Text, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';
import { HiMegaphone } from 'react-icons/hi2';

function EditPengumuman() {
  const router = useRouter();
  return (
    <Box mb={20}>
      <Box mb={20}>
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
          </Flex>
        </Paper>
      </Box>
      <Button variant='subtle' c={WARNA.biruTua} onClick={() =>router.push ("/pengumuman")} leftSection={<BiArrowBack/>}>Kembali</Button>
      <Box mt={20}>
        <Card withBorder>
          <Group>
            <Stack gap={"xs"}>
              <Text>
                Tugas
              </Text>
              <Select
                placeholder='Pilih Kegiatan'
                data={['Segera', 'Dikerjakan', 'Selesai', 'Batal']}
              />
              <Text>Nama Tugas</Text>
              <TextInput
                placeholder='Nama Kegiatan'
              />
              <Text>Jam Tugas</Text>
              <TextInput
                placeholder='Jam Terlaksana'
              />
              <Text>Tanggal Tugas</Text>
              <TextInput
                placeholder='Tanggal Terlaksana'
              />
              <Text>Deskripsi</Text>
              <TextInput
                placeholder='Deskripsi Kegiatan'
              />
              <Button bg={WARNA.biruTua} radius={30} >Simpan</Button>
            </Stack>
          </Group>
        </Card>
      </Box>
    </Box>

  );
}

export default EditPengumuman;
