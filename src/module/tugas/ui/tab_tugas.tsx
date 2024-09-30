import { Tabs } from "@mantine/core";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { RiProgress2Line } from "react-icons/ri";
import IsiTugasSegera from "./isi_tugas_segera";
import IsiTugasDikerjakan from "./isi_tugas_dikerjakan";
import IsiTugasSelesai from "./isi_tugas_selesai";
import IsiTugasBatal from "./isi_tugas_batal";

export default function TabTugas() {
  return (
   <Tabs defaultValue="segera">
   <Tabs.List>
     <Tabs.Tab value="segera" leftSection={<RiProgress2Line/>}>
       Segera
     </Tabs.Tab>
     <Tabs.Tab value="dikerjakan" leftSection={<IoTimerOutline />}>
       Dikerjakan
     </Tabs.Tab>
     <Tabs.Tab value="selesai" leftSection={<FaRegCircleCheck/>}>
       Selesai
     </Tabs.Tab>
     <Tabs.Tab value="batal" leftSection={<IoMdCloseCircleOutline/>}>
       Batal
     </Tabs.Tab>
   </Tabs.List>

   <Tabs.Panel value="segera">
     <IsiTugasSegera/>
   </Tabs.Panel>

   <Tabs.Panel value="dikerjakan">
     <IsiTugasDikerjakan/>
   </Tabs.Panel>

   <Tabs.Panel value="selesai">
     <IsiTugasSelesai/>
   </Tabs.Panel>

   <Tabs.Panel value="batal">
     <IsiTugasBatal/>
   </Tabs.Panel>
 </Tabs>
  )
}
