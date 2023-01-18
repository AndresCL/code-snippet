import { useForm } from './hooks/useForm';
import { Tags } from './Tags';

export const SnippetAdder = () => {

  // Initialize form with custom hook
  const { codeSnippet, onInputChange, onResetForm } = useForm({
    codeSnippet: ''
  });

  const onSaveCode = (event) => {

    event.preventDefault();
    if (codeSnippet.trim().length  <= 1) return;

    // Save the new code snippet on the localStorage
    let codeSnippetSaved = JSON.parse(localStorage.getItem('codeSnippets'));
    localStorage.setItem('codeSnippets', 
      codeSnippetSaved
      ? JSON.stringify([
        ...codeSnippetSaved,
        codeSnippet
      ])
      : JSON.stringify([codeSnippet]));
    
    // Reset form
    onResetForm();
  }

  return (
    <div className="w-6/12">
      <form onSubmit={onSaveCode} aria-label="form">
        <label htmlFor="codeSnippet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add a new code snippet</label>
        <textarea
          id="codeSnippet"
          name="codeSnippet"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={onInputChange}
          placeholder="Type or paste your code..."
          value={codeSnippet}></textarea>

        <Tags/>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2">
            Save Snippet
        </button>
      </form>
    </div>
  )
}
