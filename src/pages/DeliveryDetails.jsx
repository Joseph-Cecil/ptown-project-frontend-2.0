import { TextInput, SimpleGrid, Group, Title, Button, Notification } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function DeliveryDetails() {

    const location = useLocation();
    const navigate = useNavigate()
    const orderData = location.state?.orderData || {};

    
    const [deliveryData, setDeliveryData] = useState({
      areaName: '',
      streetName: '',
      houseNum: '',
      phoneNum: null,
    });


useEffect(() => {
    if (location.state) {
        setDeliveryData((prevData) => ({ ...prevData, ...location.state.orderData }));
    }
  }, [location.state]);

  const handleSubmit = async () => {
   //Put a mantine notification here to validate whether the necessary values have been input
   navigate("/success");

   // Extract only the necessary data properties
   const simplifiedData = {
    areaName: deliveryData.streetName,
    houseNum: deliveryData.houseNum,
    phoneNum: deliveryData.phoneNum,
    name: orderData.name || '',
    order: orderData.order || '',
    price: orderData.price || null,
    location: orderData.location || '',
  };
  console.log('Simplified data:', simplifiedData);

  // Send the complete order data to your server
  try {
    // Send the complete order data to your server
    await axios.post('http://localhost:5000/orders', simplifiedData);
    
    // Display Mantine notification for successful submission
    Notification.success({
      title: 'Success!',
      description: 'Order submitted successfully.',
    });

    // Navigate to "/success" after the notification
    navigate("/success");

    console.log('Order submitted successfully');
  } catch (error) {
    // Display Mantine notification for submission error
    Notification.error({
      title: 'Error!',
      description: 'There was an error submitting the form.',
    });

    console.error('Error submitting form:', error);
  }


};




  return (<>
    <form onSubmit={handleSubmit} style={{marginTop: 150, overflow:"hidden"}}>
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
        fw={900}
        ta="center"
      >
        Delivery Details
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Street Name"
          placeholder="Eg. Mercedes Street, kindly check the plate infront of your house"
          name="areaName"
          variant="filled"
          onChange={(e) => setDeliveryData({ ...deliveryData, streetName: e.currentTarget.value })}
        />
        <TextInput
          label="House Number"
        //   required={false}
          placeholder="Eg. GB123, kindly check the plate infront of your house"
          name="email"
          variant="filled"
          onChange={(e) => setDeliveryData({ ...deliveryData, houseNum: e.currentTarget.value })}
        />
      </SimpleGrid>

      <TextInput
        label="Phone Number"
        required
        type='Number'
        placeholder="Eg. 0556659523"
        mt="md"
        name="phoneNum"
        variant="filled"
        onChange={(e) => setDeliveryData({ ...deliveryData, phoneNum: e.currentTarget.value })}
        value={deliveryData.phoneNum}
      />
    
      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          Next
        </Button>
      </Group>
    </form>
    
    </>
  );
}