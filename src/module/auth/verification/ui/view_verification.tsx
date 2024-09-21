"use client";
import { LayoutLogin, WARNA } from "@/module/_global";

import { Anchor, Box, Button, Card, Center, Flex, Group, PinInput, Stack, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";



export default function ViewVerification() {
  const router = useRouter()

  return (
    <Stack h={"100vh"} justify={"center"}>
      <Card withBorder  padding={"sm"}>
        <Box p={10}>
          <LayoutLogin>
            <Stack pt={30} align="center">
              <Box p={10}>
                <Center>
                  <Flex direction={"column"}>
                    <Title order={5} c={WARNA.biruTua} ta={"center"}>
                      Verifikasi Nomor Telepon
                    </Title>
                    <Text fz={12} c={WARNA.biruTua}>
                      Masukkan kode yang kami kirimkan melalui WhatsApp
                    </Text>
                    <Text fz={12} c={WARNA.biruTua} fw={"bold"} ta={"center"}>
                      08123456789
                    </Text>
                  </Flex>
                </Center>
                <Box pt={30}>
                  <PinInput
                    style={{ justifyContent: "center" }}
                    placeholder=""
                    type={"number"}
                    size="lg"
                    styles={{
                      input: {
                        color: WARNA.biruTua,
                        // backgroundColor: WARNA.biruTua,
                        borderRadius: 15,
                        borderColor: WARNA.biruTua,
                      },
                    }}

                  />
                </Box>
                <Box mt={40}>
                  <Button
                    c={"white"}
                    bg={WARNA.biruTua}
                    size="md"
                    radius={30}
                    fullWidth
                    onClick={() => {
                      router.push("/beranda")
                    }}
                  >
                    Lanjut
                  </Button>
                </Box>
                <Group justify="center" mt={5}>
                  <Text fz={12} c={WARNA.biruTua}>
                    Tidak menerima kode verifikasi? {""}
                    <Anchor c={WARNA.biruTua}
                      fz={12}

                    >
                      Kirim Ulang
                    </Anchor>
                  </Text>
                </Group>
              </Box>
            </Stack>
          </LayoutLogin>
        </Box>
      </Card>
    </Stack>
  );
}
