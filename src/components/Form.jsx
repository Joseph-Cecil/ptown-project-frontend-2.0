import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

export function FormComponent() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
        fw={900}
        ta="center"
      >
        Make An Order
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Location"
        //   required={false}
          placeholder="Where Should I Buy Your Order"
          name="email"
          variant="filled"
          {...form.getInputProps('location')}
        />
      </SimpleGrid>

      <TextInput
        label="Price"
        type='Number'
        placeholder="Enter Total price of Your Order. Eg.10"
        mt="md"
        name="price"
        variant="filled"
        {...form.getInputProps('number')}
      />
      <Textarea
        mt="md"
        label="Order"
        placeholder="Your Order."
        maxRows={10}
        minRows={5}
        autosize
        name="order"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          Next
        </Button>
      </Group>
    </form>
  );
}