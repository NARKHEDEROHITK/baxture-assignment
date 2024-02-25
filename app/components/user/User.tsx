"use client";
import {
    Anchor,
    Button,
    Card,
    Flex,
    Grid,
    Image,
    Title,
  } from "@mantine/core";
  import { IconAt, IconPhoneCall, IconStar, IconTrash, IconUserMinus, IconUserPlus, IconWorld } from "@tabler/icons-react";
const User = (item:any) => {
    
 const{id, name, phone,email,website,onDelete,onFollow,follow } = item
  return (
    <Grid.Col
    span={{ base: 12, sm: 6, lg: 3 }}
  >
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Image
        mx="auto"
        style={{
          width: "120px",
          height: "120px",
        }}
        radius={"50%"}
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
        alt={name}
      />

      <Title component={'p'} order={5} mt={"md"} fz={"lg"} fw={500} ta={"center"}>
        {name} {follow && <IconStar style={{marginRight:"5px"}}  size={16} />}
      </Title>

      <Flex justify={"flex-start"} align={"center"} mt={5} c="dimmed">
      <IconAt style={{marginRight:"5px"}}  size={16} />
        <Anchor
          c="dimmed"
          href={`mailto: ${email}`}
          target="_blank"
          underline="hover"
        >
          {email}
        </Anchor>
      </Flex>
      <Flex justify={"flex-start"} align={"center"} mt={5} c="dimmed">
      <IconPhoneCall style={{marginRight:"5px"}}  size={16} />
        <Anchor
          c="dimmed"
          href={`tel:${phone}`}
          target="_blank"
          underline="hover"
        >
         {phone}
        </Anchor>
      </Flex>
      <Flex justify={"flex-start"} align={"center"} mt={5} c="dimmed" >
      
        <IconWorld style={{marginRight:"5px"}}  size={16} />
        <Anchor
          c="dimmed"
          href={website}
          target="_blank"
          underline="hover"
        >
          {website}
        </Anchor>
      </Flex>
      <Flex justify={"space-between"} gap={5} mt={"md"}>
      <Button onClick={()=>onFollow(id)} fullWidth variant={follow && "default"}  leftSection={follow ? <IconUserMinus size={16} />:<IconUserPlus size={16} />}>Follow</Button>
      <Button onClick={()=>onDelete(id)} fullWidth variant="outline"  leftSection={<IconTrash size={16} />}>Delete</Button>
      </Flex>
     
    </Card>
  </Grid.Col>
  )
}

export default User
