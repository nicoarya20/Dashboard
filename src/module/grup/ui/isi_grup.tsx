'use client'
import { Box, Table } from '@mantine/core'

const dataGrup = [
   { number: 1, grup: "merak" },
   { number: 2, grup: "banteng" },
   { number: 3, grup: "unta" },
   { number: 4, grup: "serigala" },
   { number: 5, grup: "gajah" },
   { number: 6, grup: "alim" }
]

export default function IsiGrup() {
   const rows = dataGrup.map((dataGrup) => (
      <Table.Tr key={dataGrup.grup}>
         <Table.Td>{dataGrup.number}</Table.Td>
         <Table.Td>{dataGrup.grup}</Table.Td>
      </Table.Tr>

   ));
   return (
      <Box>
         <Box pt={20} >
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
      </Box>
   )
}
