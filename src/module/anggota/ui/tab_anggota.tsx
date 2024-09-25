import { Box, Tabs } from '@mantine/core'
import React from 'react'
import IsiAnggota from './isi_anggota'
import IsiAnggotaTidakAktif from './isi_anggota_tidak_aktif'

export default function TabAnggota() {
   return (
      <Box mt={20}>
         <Tabs defaultValue="aktif">
            <Tabs.List>
               <Tabs.Tab value="aktif">
                  Aktif
               </Tabs.Tab>
               <Tabs.Tab value="tidak aktif">
                 Tidak Aktif
               </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="aktif">
              <IsiAnggota/>
            </Tabs.Panel>

            <Tabs.Panel value="tidak aktif">
             <IsiAnggotaTidakAktif/>
            </Tabs.Panel>
         </Tabs>
      </Box>
   )
}

