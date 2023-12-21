import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Loader,
} from '@mantine/core';
import classes from './AuthenticationImage.module.css';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { useState, useEffect } from 'react';
import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const [login, {isLoading}] = useLoginMutation();

  const {userInfo} = useSelector((state) => state.auth);

  useEffect(() => {
    if(userInfo) {
      navigate("/orders")
    }
  }, [navigate, userInfo]);
  

  const submitHandler = async (e) => {
    
    e.preventDefault();
    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCredentials({...res}));
      
      navigate('/orders')
      toast("Successfully Logged in, Lets go make Money")
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  return (
    <div className={classes.wrapper} style={{marginTop:100}}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Sprall-Buy!
        </Title>

        <TextInput label="Email" placeholder="kwadwosmart@gmail.com" size="md" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}}/>
        <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" value={password} onChange={(e) => {setPassword(e.currentTarget.value)}} />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        {isLoading && (<Loader size={30}/>)}
        <Button fullWidth mt="xl" size="md" onClick={submitHandler}>
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor fw={700} onClick={() => { navigate("/auth/register")}}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}