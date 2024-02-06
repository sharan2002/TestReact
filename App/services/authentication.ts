// authentication.ts
export const authenticateUser = async (username: string, password: string): Promise<any> => {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    });

    if (response.ok) {
      const userData = await response.json(); // Updated to directly return user data
      return userData;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  } catch (error) {
    throw new Error('Failed to authenticate user');
  }
    
};
