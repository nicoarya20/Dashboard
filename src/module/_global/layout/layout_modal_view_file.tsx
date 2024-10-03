'use client'
import { Box, Button, Flex, Image, Modal, rem } from '@mantine/core';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const PdfToImage = dynamic(() => import('./../components/pdf_viewer').then((mod) => mod.default), { ssr: false });

export default function LayoutModalViewFile({ opened, onClose, extension, file }: { opened: boolean, onClose: () => void, extension: string, fitur: string, file: string }) {
   const [zoom, setZoom] = useState(1)

   const handleZoomIn = () => {
      setZoom(zoom + 0.1)
   }

   const handleZoomOut = () => {
      setZoom(zoom - 0.1)
   }

   return (
      <Modal styles={{
         body: {
            margin: 10,
         },
         content: {
            maxWidth: 1000,
         }
      }} opened={opened} onClose={onClose} withCloseButton={true} centered closeOnClickOutside={false} fullScreen>
         <Box
            pos="sticky"
            top={70}
            right={10}
            w={50}

            style={{
               background: 'white',
               zIndex: 999,
            }}
         >
            <Flex
               direction="column"
            >
               <Button mb={5} variant="outline" onClick={handleZoomIn}>
                  +
               </Button>
               <Button variant="outline" onClick={handleZoomOut}>
                  -
               </Button>
            </Flex>
         </Box>
         <Box pos={"relative"} style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'center',
            maxWidth: rem(550),
         }}>
            <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}>
               {
                  extension === 'pdf' ? <PdfToImage md={`https://wibu-storage.wibudev.com/api/files/${file}`} /> :
                     <Image
                        radius="md"
                        style={{
                           maxWidth: '100%',
                           maxHeight: '100%',
                        }}
                        fit="contain"
                        src={`https://wibu-storage.wibudev.com/api/files/${file}`}
                        alt={file}
                     />
               }
            </div>
         </Box>
      </Modal>
   );
}