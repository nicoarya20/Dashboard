'use client'
import { WARNA } from '@/module/_global';
import { ActionIcon, Box, Button, Flex, Group, Paper, rem, Text, TextInput } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';
import { RiLayoutTop2Fill } from 'react-icons/ri';

export default function Editbanner(props: Partial<DropzoneProps>) {
  const router = useRouter();
  return (
    <Box>
      <Box mb={20}>
        <Paper withBorder p={"xs"}>
          <Flex justify={"space-between"} align={"center"}>
            <Group>
              <ActionIcon variant='transparent'>
                <RiLayoutTop2Fill color={WARNA.biruTua} size={30} />
              </ActionIcon>
              <Text fw={'-moz-initial'} size='25px'
                pb={10}
                pt={10}
                c={WARNA.biruTua}
              >Edit Banner</Text>
            </Group>
          </Flex>
        </Paper>
      </Box>
      <Button variant='subtle' leftSection={<BiArrowBack />} radius={20} c={WARNA.biruTua} onClick={() => router.push("/banner")}>Kembali</Button>
      <Box >
        <Box p={20}>
          <Box>
            <Paper withBorder radius={20}>
              <Dropzone
                onDrop={(files) => console.log('accepted files', files)}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={5 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                {...props}
              >
                <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                  <Dropzone.Accept>
                    <IconUpload
                      style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                      stroke={1.5}
                    />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                    <IconX
                      style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                      stroke={1.5}
                    />
                  </Dropzone.Reject>
                  <Dropzone.Idle>
                    <IconPhoto
                      style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                      stroke={1.5}
                    />
                  </Dropzone.Idle>

                  <Box>
                    <Text size="xl" inline>
                      Upload File
                    </Text>
                    <Text size="sm" c="dimmed" inline mt={7}>
                      File Tidak Boleh Melebihi 500mb
                    </Text>
                  </Box>
                </Group>
              </Dropzone>
            </Paper>
            <Box>
              <TextInput
                mt={10}
                label={<Text>Judul Banner</Text>}
                placeholder='Judul Banner'
                styles={{
                  input: {
                    border: `1px solid ${"#D6D8F6"}`,
                    borderRadius: 10,
                  },
                }}
              />
            </Box>
            <Button size='lg' bg={WARNA.biruTua} radius={30} fullWidth mt={20}>Simpan</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
