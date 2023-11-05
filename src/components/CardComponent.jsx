import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
function CardComponent() {

  const navigate = useNavigate();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{marginTop:180}}>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>You Can call this number to fasten your order</Text>
        <Badge color="pink" variant="light">
          0543737012
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Yoy Order Consist of Order: {}
      </Text>

      <Button onClick={() => {navigate("/")}} variant="light" color="blue" fullWidth mt="md" radius="md">
        Back To HomePage
      </Button>
    </Card>
  );
}

export default CardComponent;
