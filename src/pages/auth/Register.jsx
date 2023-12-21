import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Anchor,
  } from '@mantine/core';
  import classes from './AuthenticationImage.module.css';
  import { useNavigate } from 'react-router-dom';
  import {useDispatch, useSelector} from "react-redux"
  import { useState, useEffect } from 'react';
  import { useRegisterMutation, useLoginMutation } from '../../slices/usersApiSlice';
  import { setCredentials } from '../../slices/authSlice';
  import { toast } from 'react-toastify';
  import { Loader } from '@mantine/core';
  
  export function Register() {
    
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

 
    // const [register, {isLoading}] = useRegisterMutation();
    const [login, {isLoading}] = useLoginMutation();

    const {userInfo} = useSelector((state) => state.auth);

    
  useEffect(() => {
    if(userInfo) {
      navigate("/orders")
    }
  }, [navigate, userInfo]);
    

  const submitButtonHandler = async (e) => {
    
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error("Passwords do match, please try again")
    }else{
  
    try {
      const res = await login({name, email, password}).unwrap();
      dispatch(setCredentials({...res}));
      
      toast("Successfully Logged in, Lets go make Money")
      navigate('/orders')
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }
}
    
  
    return (
      <div className={classes.wrapper} style={{marginTop:80}}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Create An Account
          </Title>
  
          <TextInput label="Name" placeholder="Kwadwo Smart" size="md" value={name} onChange={(e) => setName(e.target.value)} />
          <TextInput type= 'email' label="Email" placeholder="kwadwosmart123@gmail.com" size="md" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          <PasswordInput type="password" label="Password" placeholder="Your password" mt="md" size="md" value={password} onChange={(e) => {setPassword(e.target.value)}} />
          <PasswordInput type="password" label="Confirm Password" placeholder="confirm password" mt="md" size="md" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>

          {isLoading && <Loader size={30}/>}
          <Button fullWidth mt="xl" size="md" onClick={submitButtonHandler}>
            Register
          </Button>
  
          <Text ta="center" mt="md">
            Already have an account?{' '}
            <Anchor fw={700} onClick={() => { navigate("/auth")}}>
              Login
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  }