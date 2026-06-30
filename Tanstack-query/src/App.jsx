import { useQuery } from '@tanstack/react-query'
import { fetchPost } from './API.js'


function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPost,
  })

if (isLoading) return ‹p>Loading ... ‹/ p>
if (isError) return <p>Error : {error.message || "Something went wrong!"} </ p>
  
  return (
    <>
      {data?.map((element) => {
        const { id, title, body } = element;
        return (
          <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </li>
        )
      })}
    </>
  )
}

export default App
