import { useQuery } from '@tanstack/react-query'
import { fetchPost } from './API.js'


function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPost,
    
    // Data kitni der tak "fresh" mana jayega.
    // Is duration ke andar TanStack Query dobara API call nahi karega
    // (jab tak manually refetch na karo).
    staleTime: 1000000, // 1,000,000 ms ≈ 16 min 40 sec

    // Jab query ko koi component use nahi kar raha hota,
    // to cache kitni der tak memory me rahegi.
    // Is time ke baad cache delete (garbage collect) ho jayegi.
    gcTime: 1000, // 1 second

    // Har 1 second baad automatically API ko dobara call karega.
    // Isse data continuously update hota rahega.
    refetchInterval: 1000, // 1 second

    // Agar browser tab background me bhi ho,
    // tab bhi refetchInterval ke hisaab se API call hoti rahegi.
    // false hota to background me polling ruk jaati.
    refetchIntervalInBackground: true,
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
