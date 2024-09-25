import { WARNA } from "@/module/_global";
import { ActionIcon, Box, Group, Paper, SimpleGrid, Text } from "@mantine/core";
import { IoDocumentText } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";


export default function IsiDokumen() {
  return (
    <Box>
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
      <Box pt={20}>
        <SimpleGrid cols={6}>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 1</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 2</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 3</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 4</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 5</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 6</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 7</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 8</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 9</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 10</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 11</Text>
            </Group>
          </Box>
          <Box pl={10}>
            <Group>
            <FaFolder color={WARNA.biruTua} size={30} />
            <Text>Dokumen 12</Text>
            </Group>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
