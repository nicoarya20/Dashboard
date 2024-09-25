'use client'
import { WARNA } from '@/module/_global'
import { ActionIcon, Anchor, Box, Button, Flex, Group, Paper, SimpleGrid, Table, Text, TextInput } from '@mantine/core'
import React from 'react'
import { MdGroupAdd } from 'react-icons/md'

const dataGrup = [
   { number: 1, grup: "merak" },
   { number: 2, grup: "banteng" },
   { number: 3, grup: "unta" },
   { number: 4, grup: "serigala" },
   { number: 5, grup: "gajah" },
   { number: 6, grup: "alim" }
]

export default function TidakAktifGrup() {
   const rows = dataGrup.map((dataGrup) => (
      <Table.Tr key={dataGrup.grup}>
         <Table.Td>{dataGrup.number}</Table.Td>
         <Table.Td>{dataGrup.grup}</Table.Td>
      </Table.Tr>

   ));
   return (
      <Box pt={20}>
         <Table withTableBorder withColumnBorders withRowBorders>
            <Table.Thead>
               <Table.Tr>
                  <Table.Th>No</Table.Th>
                  <Table.Th pr={600}>Grup</Table.Th>
               </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
         </Table>
      </Box>
   )
}
