'use client'
import { WARNA } from '@/module/_global';
import { Anchor, Box, Group, Table } from '@mantine/core'
import { useRouter } from 'next/navigation';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const dataGrup = [
   { number: 1, grup: "merak" },
   { number: 2, grup: "banteng" },
   { number: 3, grup: "unta" },
   { number: 4, grup: "serigala" },
   { number: 5, grup: "gajah" },
   { number: 6, grup: "alim" }
]

export default function IsiGrup() {
   const router = useRouter();
   const rows = dataGrup.map((dataGrup) => (
      <Table.Tr key={dataGrup.grup}>
         <Table.Td>{dataGrup.number}</Table.Td>
         <Table.Td>{dataGrup.grup}</Table.Td>
         <Table.Td>
            <Group >
               <Anchor underline="never">
               <FaEdit onClick={()=>router.push("/editgrup")} color={WARNA.biruTua} size={30} />
               <MdDelete color={WARNA.biruTua} size={30} />
               </Anchor>
            </Group>
         </Table.Td>
      </Table.Tr>

   ));
   return (
      <Box>
         <Box pt={20} >
            <Table withTableBorder >
               <Table.Thead>
                  <Table.Tr>
                     <Table.Th style={{justifyContent: "center"}}>No</Table.Th>
                     <Table.Th style={{justifyContent: "center"}} pr={600}>Grup</Table.Th>
                     <Table.Th style={{justifyContent: "center"}} >
                           Action
                        </Table.Th>
                  </Table.Tr>
               </Table.Thead>
               <Table.Tbody>{rows}</Table.Tbody>
            </Table>
         </Box>
      </Box>
   )
}
