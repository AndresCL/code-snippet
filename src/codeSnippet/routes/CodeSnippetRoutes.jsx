import { Navigate, Route, Routes } from 'react-router-dom';
import { CodeSnippetPage, SnippetsListPage } from '../pages';

export const CodeSnippetRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <CodeSnippetPage/> }/>
      <Route path="/list" element={ <SnippetsListPage/> }/>

      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
