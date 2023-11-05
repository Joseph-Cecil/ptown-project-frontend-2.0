import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function FormComponent() {
  const history = useNavigate();
  const DEFAULT_FORM_OBJECT = {
    name: '',
    price: NaN,
    order:'',
    location: '',
    areaName: '',
    houseNum: '',
    phoneNum: NaN,
  };

  const [formData, setFormData] = useState(DEFAULT_FORM_OBJECT);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData )
    // Assuming formData is the data collected in Home component
    history('/delivery-details', { state: { orderData: formData } });
  };

  return (
    <form onSubmit={handleSubmit} style={{marginTop:120, overflow:"hidden"}}>
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
        required
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.currentTarget.value
            });
          }}
        />
        <TextInput
          label="Location (Optional)"
        //   required={false}
          placeholder="Where Should I Buy Your Order"
          name="location"
          variant="filled"
          onChange={(e) => {
            setFormData({
              ...formData,
              location: e.currentTarget.value
            });
          }}
        />
      </SimpleGrid>

      <TextInput
      required
        label="Price"
        type='Number'
        placeholder="Enter Total price of Your Order. Eg.10"
        mt="md"
        name="price"
        variant="filled"
        onChange={(e) => {
          setFormData({
            ...formData,
            price: e.currentTarget.value
          });
        }}
      />
      <Textarea
      required
        mt="md"
        label="Order"
        placeholder="Your Order."
        maxRows={10}
        minRows={5}
        autosize
        name="order"
        variant="filled"
        onChange={(e) => {
          setFormData({
            ...formData,
            order: e.currentTarget.value
          });
        }}
      />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          Next
        </Button>
      </Group>
    </form>
  );
}