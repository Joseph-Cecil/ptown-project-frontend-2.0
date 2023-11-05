import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { ActionToggle } from '../components/LightDarkThemeButton';




export function Home() {
  const [opened, { toggle }] = useDisclosure();
  console.log(" I am rendering the appshell")

  return (<>
    <AppShell
      header={{ height: 60}}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" style={{display: "flex", justifyContent: "space-between"}}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
         <ActionToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main style={{height:50}}></AppShell.Main>
    </AppShell>
    </>
  );
}