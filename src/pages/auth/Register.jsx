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
  
  export function Register() {

    const navigate = useNavigate();

    return (
      <div className={classes.wrapper} style={{marginTop:100}}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Create An Account
          </Title>
  
          <TextInput label="Username" placeholder="Kwadwo Smart" size="md" />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
          <Button fullWidth mt="xl" size="md">
            Register
          </Button>
  
          <Text ta="center" mt="md">
            Already have an account?{' '}
            <Anchor href="#" fw={700} onClick={(event) => {event.preventDefault(); navigate("/login")}}>
              Login
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  }