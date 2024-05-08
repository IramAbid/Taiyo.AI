// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './store/store';
import ContactPage from './pages/ContactPage';
import ChartMap from './pages/ChartMaps';
import './App.css';
import SideBar from './components/Sidebar/SideBar';
const currentState = store.getState();

const queryClient = new QueryClient();
console.log('Current Redux Store State:', currentState);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className='bg-custom-color h-full'>
            <SideBar/>
            <Routes>
              <Route path="/contactPage" element={<ContactPage />} />
              
              <Route path="/ChartMaps" element={<ChartMap />} />
              </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
