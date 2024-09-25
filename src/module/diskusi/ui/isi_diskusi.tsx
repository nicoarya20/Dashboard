import { WARNA } from "@/module/_global";
import { ActionIcon, Anchor, Avatar, Box, Group, Paper, SimpleGrid, Text, } from "@mantine/core";
import { PiChatsFill } from "react-icons/pi";


export default function IsiDiskusi() {
  return (
    <Box>
      <Box>
        <Paper withBorder p={"xs"}>
          <Group>
            <ActionIcon variant='transparent'>
              <PiChatsFill color={WARNA.biruTua} size={30} />
            </ActionIcon>
            <Text fw={'-moz-initial'} size='25px'
              pb={10}
              pt={10}
              c={WARNA.biruTua}
            >Diskusi</Text>
          </Group>
        </Paper>
      </Box>
      <Box pt={20}>
        <SimpleGrid cols={3} spacing={"sm"} verticalSpacing={"sm"} >
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Group>
                <Avatar src={"/assets/img/avatar/ppwa.jpg"} alt='' />
                <Text fw={"bolder"}  c={"white"}>
                  Marsel Masdianto</Text>
                  </Group>
                <Group pt={10} >
                    <Text fw={"inherit"} size="md" c={'white'}>Test Dulu Ga Sih</Text>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Group>
                <Avatar src={"/assets/img/avatar/ppwa.jpg"} alt='' />
                <Text fw={"bolder"}  c={"white"}>
                  Marsel Masdianto</Text>
                  </Group>
                <Group pt={10} >
                    <Text fw={"inherit"} size="md" c={'white'}>Test Dulu Ga Sih</Text>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Group>
                <Avatar src={"/assets/img/avatar/ppwa.jpg"} alt='' />
                <Text fw={"bolder"}  c={"white"}>
                  Marsel Masdianto</Text>
                  </Group>
                <Group pt={10} >
                    <Text fw={"inherit"} size="md" c={'white'}>Test Dulu Ga Sih</Text>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Group>
                <Avatar src={"/assets/img/avatar/ppwa.jpg"} alt='' />
                <Text fw={"bolder"}  c={"white"}>
                  Marsel Masdianto</Text>
                  </Group>
                <Group pt={10} >
                    <Text fw={"inherit"} size="md" c={'white'}>Test Dulu Ga Sih</Text>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Group>
                <Avatar src={"/assets/img/avatar/ppwa.jpg"} alt='' />
                <Text fw={"bolder"}  c={"white"}>
                  Marsel Masdianto</Text>
                  </Group>
                <Group pt={10} >
                    <Text fw={"inherit"} size="md" c={'white'}>Test Dulu Ga Sih</Text>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Group>
                <Avatar src={"/assets/img/avatar/ppwa.jpg"} alt='' />
                <Text fw={"bolder"}  c={"white"}>
                  Marsel Masdianto</Text>
                  </Group>
                <Group pt={10} >
                    <Text fw={"inherit"} size="md" c={'white'}>Test Dulu Ga Sih</Text>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Group>
                <Avatar src={"/assets/img/avatar/ppwa.jpg"} alt='' />
                <Text fw={"bolder"}  c={"white"}>
                  Marsel Masdianto</Text>
                  </Group>
                <Group pt={10} >
                    <Text fw={"inherit"} size="md" c={'white'}>Test Dulu Ga Sih</Text>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Group>
                <Avatar src={"/assets/img/avatar/ppwa.jpg"} alt='' />
                <Text fw={"bolder"}  c={"white"}>
                  Marsel Masdianto</Text>
                  </Group>
                <Group pt={10} >
                    <Text fw={"inherit"} size="md" c={'white'}>Test Dulu Ga Sih</Text>
                </Group>
              </Paper>
            </Anchor>
          </Box>
          <Box>
            <Anchor underline="never">
              <Paper withBorder p={30} style={{ justifyContent: "center" }} bg={WARNA.biruTua}>
                <Group>
                <Avatar src={"/assets/img/avatar/ppwa.jpg"} alt='' />
                <Text fw={"bolder"}  c={"white"}>
                  Marsel Masdianto</Text>
                  </Group>
                <Group pt={10} >
                    <Text fw={"inherit"} size="md" c={'white'}>Test Dulu Ga Sih</Text>
                </Group>
              </Paper>
            </Anchor>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
