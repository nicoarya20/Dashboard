'use client'
import { Box, Tabs } from '@mantine/core'
import React from 'react'
import IsiGrup from './isi_grup'
import TidakAktifGrup from './tidak_aktif_grup'

export default function TabGrup() {
  return (
   <Box mt={20}>
   <Tabs defaultValue="aktif">
   <Tabs.List>
     <Tabs.Tab value="aktif" >
       Aktif
     </Tabs.Tab>
     <Tabs.Tab value="tidak aktif" >
       Tidak Aktif
     </Tabs.Tab>
   </Tabs.List>

   <Tabs.Panel value="aktif">
     <IsiGrup/>
   </Tabs.Panel>

   <Tabs.Panel value="tidak aktif">
     <TidakAktifGrup/>
   </Tabs.Panel>
   </Tabs>
   </Box>
  )
}
