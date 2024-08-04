const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        username: email,
        password: password
      });
  
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate('/'); 
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Invalid credentials');
    }
  };
  