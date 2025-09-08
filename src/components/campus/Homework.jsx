import React, { useEffect, useState } from 'react'
import { getHomeworklist } from './api';

function Homework() {
    const [data, setData] = useState(null);
    useEffect(() => {
    getHomeworklist()
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default Homework