import { Container, Grid, Text, Button } from '@mantine/core';
import { useOrdersQuery } from '../../slices/usersApiSlice';

export function GetOrders() {
  // Use the useGetUserQuery hook to fetch orders
  const { data: orders, isLoading, isError } = useOrdersQuery();

  const OrderDetails = ({ orders }) => (
    <Container my="md" mt={40}>
      <Grid gutter="md">
        {orders.slice().reverse().map((order) => (
          <Grid.Col span={12} md={6} lg={4} key={order.id}>
            <div style={{ border: '1px solid #E3E8EE', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
              <div style={{ marginBottom: '20px' }}>
                <Text size="lg" weight={700} style={{ marginBottom: '10px' }}>
                <b><h3>Order Summary</h3></b>
                </Text>
                <Text>
                  <strong>Order:</strong> {order.order} <br />
                  <strong>Price:</strong> {order.price} <br />
                  <strong>Location:</strong> {order.location} <br /><br/>
                </Text>
              </div>
              <div>
                <Text size="lg" weight={700} style={{ marginBottom: '10px' }}>
                  <hr/><b><h3>Customer Details</h3></b>
                </Text>
                <Text>
                  <strong>Name:</strong> {order.name} <br />
                  <strong>Area Name:</strong> {order.areaName} <br />
                  <strong>House Number:</strong> {order.houseNum} <br />
                  <strong>Phone Number:</strong> {order.phoneNum} <br />
                  <strong>Is Completed:</strong> {order.isCompleted ? 'Yes' : 'No'} <br />
                </Text>
                <Button style={{ marginTop: '10px' }} fullWidth>
                  View Details
                </Button>
              </div>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );

  if (isLoading) {
    // Loading state without placeholders
    return null;
  }

  if (isError) {
    // Error state
    return <div>Error loading orders</div>;
  }

  // Successfully loaded orders, render the data
  return <OrderDetails orders={orders} />;
}
