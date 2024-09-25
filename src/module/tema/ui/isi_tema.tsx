'use client'
import { WARNA } from '@/module/_global'
import { BarChart } from '@mantine/charts'
import { ActionIcon, Box, ColorPicker, Flex, Group, Paper, Text } from '@mantine/core'
import React, { useState } from 'react'
import { IoColorPalette } from 'react-icons/io5'

const dataBar = [

   {
      month: "Januari",
      divisi: 8,
      kegiatan: 5,
      pengumuman: 10,
      anggota: 20,
      jabatan: 5,
      grup: 20
   },
   {
      
      month: "Februari",
      divisi: 10,
      kegiatan: 7,
      pengumuman: 12,
      anggota: 22,
      jabatan: 7,
      grup: 22
   },
   {
      
      month: "Maret",
      divisi: 12,
      kegiatan: 9,
      pengumuman: 14,
      anggota: 24,
      jabatan: 9,
      grup: 24
   },
   {
      
      month: "April",
      divisi: 14,
      kegiatan: 11,
      pengumuman: 16,
      anggota: 26,
      jabatan: 11,
      grup: 26
   },
   {
      
      month: "Mei",
      divisi: 16,
      kegiatan: 13,
      pengumuman: 18,
      anggota: 28,
      jabatan: 13,
      grup: 28
   },
   {
     
      month: "Juni",
      divisi: 18,
      kegiatan: 15,
      pengumuman: 20,
      anggota: 30,
      jabatan: 15,
      grup: 30
   }
]

export default function IsiTema() {
   const [value, onChange] = useState('rgba(47, 119, 150, 0.7)')
   return (
      <Box>
         <Box>
            <Paper withBorder p={"xs"}>
               <Group>
                  <ActionIcon variant="transparent">
                     <IoColorPalette color={WARNA.biruTua} size={30} />
                  </ActionIcon>
                  <Text fw={'-moz-initial'} size='25px'
                     pb={10}
                     pt={10}
                     c={WARNA.biruTua}
                  >Tema</Text>
               </Group>
            </Paper>
         </Box>
         <Box pt={20}>
            <Paper withBorder p={20}>
               <Flex justify='center' align='center' direction={"column"} >
                  <ColorPicker format='rgba' value={value} onChange={onChange} />
                  <Text>{value}</Text>
               </Flex>
            </Paper>
         </Box>
         <Box pt={10}>
            <Paper withBorder p={10} >
                  <Text pb={10} fw={'bold'} ta={'center'}>Perkembangan Sistem Perbekal Darmasaba</Text>
                  <BarChart
                  p={10}
                  h={500}
                  data={dataBar}
                  dataKey="month"
                  type='percent'
                  series={[
                     {  name: 'divisi', color: 'blue.5'},
                     {  name: 'kegiatan', color: 'violet.5'},
                     {  name: 'pengumuman', color: 'teal.5'},
                     {  name: 'anggota', color: 'blue.5'},
                     {  name: 'jabatan', color: 'violet.5'},
                     {  name: 'grup', color: 'teal.5'},
                  ]}
                  tickLine='y'
                  />
            </Paper>
         </Box>
      </Box>
   )
}
