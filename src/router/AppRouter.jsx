import { Route, Routes } from 'react-router-dom';
import { CodeSnippetRoutes } from '../CodeSnippet/routes/CodeSnippetRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={ <CodeSnippetRoutes/> } />
    </Routes>
  )
}
