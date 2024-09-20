'user client'
import { LayoutBackground, WARNA } from '@/module/_global'
import { ActionIcon, Box, Card, Flex, Grid, GridCol, Group, Text, Title } from '@mantine/core'
import React from 'react'
import { HiMiniUserGroup } from 'react-icons/hi2'

export default function IsiDashboard() {
  return (
    <Box>
      <Card withBorder padding={"xs"}>
        <Text
          fw={'-moz-initial'}
          size='25px'
          pl={20}
          pb={10}
          pt={10}
          c={WARNA.biruTua}
        >
          Dashboard
        </Text>
      </Card>
      <Box pt={20}>
        {/* <Grid>
        <GridCol span={{ base: 12, md: 5, lg: 3}}>
          <Card withBorder bg={WARNA.biruTua}>
            <Flex>
            <Text></Text>
            <ActionIcon
            size={90}
            radius={100}
            bg={'white'}
            >
            <HiMiniUserGroup size={50} color={WARNA.biruTua} />
            </ActionIcon>
            </Flex>

            
          </Card>
        </GridCol>
       
      </Grid> */}

        <Grid>
          <GridCol span={4}>
            <Card shadow="sm" padding="lg">
              <Group>
            <ActionIcon
            size={90}
            radius={100}
            bg={'white'}
            >
            <HiMiniUserGroup size={50} color={WARNA.biruTua} />
            </ActionIcon>
              <Flex direction={"column"}>
              <Text fw="bold">Divisi</Text>
              <Text>500 Active users</Text>
              </Flex>
              </Group>
            </Card>
          </GridCol>
          <GridCol span={4}>
            <Card shadow="sm" padding="lg">
              <Text fw={500}>Revenue</Text>
              <Text>$10,000 this month</Text>
            </Card>
          </GridCol>
          <GridCol span={4}>
            <Card shadow="sm" padding="lg">
              <Text fw={500}>Orders</Text>
              <Text>1200 Completed orders</Text>
            </Card>
          </GridCol>
          

        </Grid>
      </Box>
    </Box>
  )
}
