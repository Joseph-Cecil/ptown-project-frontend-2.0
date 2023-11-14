import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { ActionToggle } from '../components/LightDarkThemeButton';
import { Outlet } from 'react-router-dom';




export function Dashboard() {
  const [opened, { toggle }] = useDisclosure();
  console.log(" I am rendering the appshell")

  return (<>
    <AppShell
      header={{ height: 60}}
      navbar={{  breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" style={{display: "flex", justifyContent: "space-between"}}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
         <ActionToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar w="300px" p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main><Outlet/></AppShell.Main>
    </AppShell>
    </>
  );
}