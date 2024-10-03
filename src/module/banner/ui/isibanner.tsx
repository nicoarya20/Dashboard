'use client'
import { LayoutModal, LayoutModalViewFile, WARNA } from '@/module/_global';
import LayoutDrawer from '@/module/_global/layout/layout_drawer';
import { ActionIcon, Anchor, Box, Button, Flex, Group, Image, Paper, SimpleGrid, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaFile, FaPencil, FaTrash } from 'react-icons/fa6';
import { RiLayoutTop2Fill } from 'react-icons/ri';


function IsiBanner() {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isOpenModalView, setOpenModalView] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [idDataStorage, ] = useState('')
  const [isExtension, ] = useState('')
  return (
    <Box>
      <Box>
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
              >Banner</Text>
            </Group>
            <Button bg={WARNA.biruTua} radius={20} onClick={() => router.push("/banner/tambahbanner")} >Tambah</Button>
          </Flex>
        </Paper>
      </Box>
      <Box pt={20}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 5 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
          onClick={() => {setOpenDrawer(true)}}
        >
          <Box pl={10}>
            <Flex direction={'column'}>
              <Text mb={5}>Banner 1</Text>
              <Image radius={20} src={"/assets/img/banner/Banner-1.png"} alt='' />
            </Flex>
          </Box>
          <Box pl={10}>
            <Flex direction={'column'}>
              <Text mb={5}>Banner 2</Text>
              <Image radius={20} src={"/assets/img/banner/Banner-1.png"} alt='' />
            </Flex>
          </Box>
          <Box pl={10}>
            <Flex direction={'column'}>
              <Text mb={5}>Banner 3</Text>
              <Image radius={20} src={"/assets/img/banner/Banner-1.png"} alt='' />
            </Flex>
          </Box>
          <Box pl={10}>
            <Flex direction={'column'}>
              <Text mb={5}>Banner 4</Text>
              <Image radius={20} src={"/assets/img/banner/Banner-1.png"} alt='' />
            </Flex>
          </Box>
          <Box pl={10}>
            <Flex direction={'column'}>
              <Text mb={5}>Banner 5</Text>
              <Image radius={20} src={"/assets/img/banner/Banner-1.png"} alt='' />
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>

      <LayoutDrawer
        opened={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title={<Text lineClamp={1}>{"Menu"}</Text>}
      >
        <SimpleGrid
          m={20}
          cols={{ base: 3, sm: 3, lg: 3 }}
        >
          <Box>
            <Anchor underline='never' onClick={() => router.push("/banner/editbanner")}>
              <Flex direction="column" align="center" justify="center">
                <FaPencil size={30} color={WARNA.biruTua} />
                <Text c={"dark"} mt={10} ta="center">Edit</Text>
              </Flex>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline='never' onClick={() => { setOpenModalView(true) }}>
              <Flex direction="column" align="center" justify="center">
                <FaFile size={30} color={WARNA.biruTua} />
                <Text c={"dark"} mt={10} ta="center">Lihat File</Text>
              </Flex>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline='never' onClick={() => { setOpen(true) }}>
              <Flex direction="column" align="center" justify="center">
                <FaTrash size={30} color={WARNA.biruTua} />
                <Text c={"dark"} mt={10} ta="center">Hapus</Text>
              </Flex>
            </Anchor>
          </Box>
        </SimpleGrid>
      </LayoutDrawer>
      <LayoutModal opened={isOpen} onClose={() => setOpen(false)}
        description='Apakah Anda yakin ingin menghapus banner?'
        onYes={() => { setOpen(false) }} />
      
      <LayoutModalViewFile opened={isOpenModalView} onClose={() => setOpenModalView(false)} file={idDataStorage} extension={isExtension} fitur='task' />
    </Box>
  );
}

export default IsiBanner;
