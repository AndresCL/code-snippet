import { SearchResults } from './ui/SearchResults';
import { SnippetAdder } from './ui/SnippetAdder';

export const CodeSnippet = () => {
  return (
    <div className="flex flex-col items-center justify-start py-8 backdrop-opacity-95 w-full h-screen bg-[url('https://img.freepik.com/free-vector/white-background-with-triangle-patterns_1017-18410.jpg?w=1800&t=st=1673715601~exp=1673716201~hmac=0048740336a5120ae6b2cfa649e2202a8291cfa43ea01c30e5357b431560c2e0')] bg-cover bg-center">
      <div className="w-6/12 mb-6">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Code Snippet</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Store your code snippets and save time.</p>
      </div>

      <SearchResults />
      <SnippetAdder/>
    </div>
  )
}
