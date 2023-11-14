import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import {
  IconHome2
} from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";

function CardComponent() {
  const navigate = useNavigate()
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{marginTop:180}}>
      <Card.Section>
        <Image
          src="https://th.bing.com/th/id/OIP.A3_kEtzb1hh7SvWs3rn3-gHaHa?pid=ImgDet&rs=1"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Your Order has been placed successfully</Text>
        <Badge color="pink" variant="light">
          Success
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        We'll call you to confirm your Order. You can also reach us on 0543737012 to fasten your Order
      </Text>

      <Button onClick={()=>{navigate("/")}} variant="light" color="blue" fullWidth mt="md" radius="md">
        <IconHome2/>Home Page
      </Button>
    </Card>
  );
}

export default CardComponent;
