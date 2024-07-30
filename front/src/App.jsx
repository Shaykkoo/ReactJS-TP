import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/admin';

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Box>
  );
}

export default App;
