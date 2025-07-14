import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BiblePage from './pages/BiblePage';
import EventsPage from './pages/EventsPage';
import NotesPage from './pages/NotesPage';
import CommunityPage from './pages/CommunityPage';
import AdminPage from './pages/AdminPage';

const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/biblia" element={<BiblePage />} />
                <Route path="/eventos" element={<EventsPage />} />
                <Route path="/notas" element={<NotesPage />} />
                <Route path="/comunidad" element={<CommunityPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </Layout>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
