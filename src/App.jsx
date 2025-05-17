
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import VideoDetailPage from './pages/VideoDetailPage'
import AddVideoPage from './pages/AddVideoPage'

function App() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex="1" py="4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:id" element={<VideoDetailPage />} />
          <Route path="/add-video" element={<AddVideoPage />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App