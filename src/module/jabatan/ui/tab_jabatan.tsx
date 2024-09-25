"use client"
import { Box, Tabs } from '@mantine/core'
import React from 'react'
import IsiJabatanTidakAktif from './isi_jabatan_tidak_aktif'
import IsiJabatan from './isi_jabatan'

export default function TabJabatan() {
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
              <IsiJabatan/>
            </Tabs.Panel>

            <Tabs.Panel value="tidak aktif">
             <IsiJabatanTidakAktif/>
            </Tabs.Panel>
         </Tabs>
      </Box>
   )
}
