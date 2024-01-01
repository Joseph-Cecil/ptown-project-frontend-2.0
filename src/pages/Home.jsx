import { useDisclosure } from '@mantine/hooks';
import { AppShell, Avatar, Burger, Button, Group, Popover, Skeleton, Text } from '@mantine/core';
import { ActionToggle } from '../components/LightDarkThemeButton';
import {useDispatch, useSelector} from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import {useNavigate} from 'react-router-dom';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';





export function Home() {
  const [opened, { toggle }] = useDisclosure();
  const {userInfo} = useSelector((state) => (state.auth));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/auth');
      toast("Logged Out Successfully")
      console.log("I have been clicked")
    } catch (err) {
      console.log(err);    }
  }

  const signInHandler = () => {
    navigate("/auth");
  }

  const registerHandler = () => {
    navigate("/auth/register");
  }

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
          {userInfo ? (<div style={{marginTop:120}}><Popover width={300} offset={10} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
      <div style={{cursor:"pointer"}}><Avatar justify="center" mt="xl" variant="filled" radius="md" size="md" src="" /></div>
      </Popover.Target>
      <Popover.Dropdown>
        <Text>{userInfo.name}</Text>
        <hr></hr>
        <Text>{userInfo.email}</Text>
        <hr></hr>
        <br></br>
        <Button variant='filled' onClick={logoutHandler}>Sign Out</Button>
      </Popover.Dropdown>
    </Popover></div>) : (
            <><div style={{marginTop: 100}}><Button variant='filled' onClick={signInHandler}>Sign In</Button> {" "} <Button variant='filed' onClick={registerHandler}>Register</Button></div></>
          )}
          
          
      </AppShell.Navbar>
      <AppShell.Main></AppShell.Main>
    </AppShell>
    </>
  );
}