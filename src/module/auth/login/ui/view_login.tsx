"use client"

import { WARNA } from "@/module/_global"
import { Box, Button, Card, Center, Image, Stack, Text, TextInput} from "@mantine/core"
import { useRouter } from "next/navigation"

function ViewLogin() {
   const router = useRouter()

   return (
      <Stack h={"100vh"} justify={"center"} >
         <Card withBorder  padding={"lg"}  >
            <Box p={10}>
               <Stack pt={30} align="center" >
                  <Box p={100}>
                     <Center>
                        <Image w={102} h={103} src={"/assets/img/logo/logo-1.png"} alt='' />
                     </Center>
                     <Text ta={"center"} fz={20} fw={"bold"} c={WARNA.biruTua} >PERBEKEL DESA DARMASABA</Text>
                     <TextInput
                        styles={{
                           input: {
                              color: WARNA.biruTua,
                              borderRadius: WARNA.biruTua,
                              borderColor: WARNA.biruTua
                           },
                        }}
                        size="md"
                        type="number"
                        radius={30}
                        leftSection={<Text>+62</Text>}
                        placeholder="XXX XXX XXX"
                        pb={50}
                     />
                     <Button bg={WARNA.biruTua} radius={30} fullWidth onClick={() => router.push('/verification')}>login</Button>
                  </Box>
               </Stack>
            </Box>
         </Card>

      </Stack>
   )
}

export default ViewLogin;