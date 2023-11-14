import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import classes from './AuthenticationImage.module.css';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate()
  return (
    <div className={classes.wrapper} style={{marginTop:100}}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Sprall-Buy!
        </Title>

        <TextInput label="Username" placeholder="Kwadwo Smart" size="md" />
        <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor href="#" fw={700} onClick={(event) => {event.preventDefault(); navigate("/register")}}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}