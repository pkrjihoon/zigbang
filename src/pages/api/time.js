// pages/api/time.js

// const getTime = (req, res) => {
//     const currentTime = new Date().toISOString();
//     res.status(200).json({ currentTime });
//   };
  
//   export default getTime;
  

  // pages/api/time.js  


// pages/api/time.js
const getTime = (req, res) => {
  try {
    console.log('Request received for /api/time');

    const currentTime = new Date().toISOString();
    res.status(200).json({ currentTime });
  } catch (error) {
    console.error('Error handling /api/time request:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default getTime;

