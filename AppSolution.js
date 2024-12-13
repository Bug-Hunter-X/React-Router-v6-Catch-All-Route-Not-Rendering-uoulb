```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Solution: Ensure the catch-all route is the last route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { /* ... */ }
function About() { /* ... */ }
function NotFound() { return <div>404 Not Found</div>; }
export default App;
```