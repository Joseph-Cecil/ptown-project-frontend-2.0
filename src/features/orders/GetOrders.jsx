// import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';

// const PRIMARY_COL_HEIGHT = rem(300);

// export function GetOrders() {
//   const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

//   return (
//     <Container my="md" mt={40}>
//       <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
//         <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
//         <Grid gutter="md">
//           <Grid.Col>
//             <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
//           </Grid.Col>
//           <Grid.Col span={6}>
//             <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
//           </Grid.Col>
//           <Grid.Col span={6}>
//             <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
//           </Grid.Col>
//         </Grid>
//       </SimpleGrid>
//     </Container>
//   );
// }



import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
import { useOrdersQuery } from '../../slices/usersApiSlice'; // Update with the correct path

const PRIMARY_COL_HEIGHT = rem(300);

// ... (import statements)

export function GetOrders() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  // Use the useGetUserQuery hook to fetch orders
  const { data: orders, isLoading, isError } = useOrdersQuery();

  if (isLoading) {
    // Loading state with Skeleton placeholders
    return (
      <Container my="md" mt={40}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    );
  }

  if (isError) {
    // Error state
    return <div>Error loading orders</div>;
  }

  // Successfully loaded orders, render the data
  return (
    <Container my="md" mt={40}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <div>
          {/* Render primary content with fetched orders */}
          {orders && (
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  <strong>Order:</strong> {order.order}<br />
                  <strong>Price:</strong> {order.price}<br />
                  <strong>Location:</strong> {order.location}<br />
                  <strong>Name:</strong> {order.name}<br />
                  <strong>Area Name:</strong> {order.areaName}<br />
                  <strong>House Number:</strong> {order.houseNum}<br />
                  <strong>Phone Number:</strong> {order.phoneNum}<br />
                  <strong>Is Completed:</strong> {order.isCompleted ? 'Yes' : 'No'}<br />
                </li>
              ))}
            </ul>
          )}
        </div>
        <Grid gutter="md">
          <Grid.Col>
            {/* Skeleton placeholder for secondary column */}
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Skeleton placeholder for secondary column */}
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Skeleton placeholder for secondary column */}
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
