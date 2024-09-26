'use client'
import { WARNA } from "@/module/_global";
import { ActionIcon, Anchor, Box, Button, Flex, Group, Paper, SimpleGrid, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import { RiProgress2Line } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";


export default function IsiTugas() {
  const router = useRouter()
  return (
    <Box>
      <Box>
        <Paper withBorder p={"xs"}>
          <Flex justify={"space-between"} align={"center"}>
          <Group>
            <ActionIcon variant="transparent">
              <MdEditDocument color={WARNA.biruTua} size={30} />
            </ActionIcon>
            <Text fw={'-moz-initial'} size='25px'
              pb={10}
              pt={10}
              c={WARNA.biruTua}
            >Tugas</Text>
          </Group>
          <Button bg={WARNA.biruTua} radius={20} onClick={()=>router.push("/tambahtugas")}>Tambah</Button>
          </Flex>
        </Paper>
      </Box>
      <Box pt={20}>
        <SimpleGrid  cols={{ base: 1, sm: 2, lg: 4 }} spacing={"sm"} verticalSpacing={"sm"}>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Title size={"25"} c={"white"}>
                  <ActionIcon variant="transparent">
                    <RiProgress2Line color="white" size={20} />
                  </ActionIcon>
                  Segera</Title>
                <Group pt={10} pl={20}>
                  <Flex direction={"column"} >
                    <Text fw={"bolder"} size="md" c={'white'}>Total Kegiatan</Text>
                    <Text fw={"bolder"} size="md" c={"white"}>6</Text>
                  </Flex>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Title size={"25"} c={"white"}>
                  <ActionIcon variant="transparent">
                    <IoTimerOutline color="white" size={20} />
                  </ActionIcon>
                  Dikerjakan</Title>
                <Group pt={10} pl={20}>
                  <Flex direction={"column"} >
                    <Text fw={"bolder"} size="md" c={'white'}>Total Kegiatan</Text>
                    <Text fw={"bolder"} size="md" c={"white"}>6</Text>
                  </Flex>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Title size={"25"} c={"white"}>
                  <ActionIcon variant="transparent">
                    <FaRegCircleCheck color="white" size={20} />
                  </ActionIcon>
                  Selesai</Title>
                <Group pt={10} pl={20}>
                  <Flex direction={"column"} >
                    <Text fw={"bolder"} size="md" c={'white'}>Total Kegiatan</Text>
                    <Text fw={"bolder"} size="md" c={"white"}>6</Text>
                  </Flex>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Title size={25} c={"white"}>
                  <ActionIcon variant="transparent">
                    <RiCloseCircleFill color="white" size={20} />
                  </ActionIcon>
                  Batal
                </Title>
                <Group pt={10} pl={20}>
                  <Flex direction={"column"} >
                    <Text fw={"bolder"} size="md" c={'white'}>Total Kegiatan</Text>
                    <Text fw={"bolder"} size="md" c={"white"}>6</Text>
                  </Flex>
                </Group>
              </Paper>
            </Anchor>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
