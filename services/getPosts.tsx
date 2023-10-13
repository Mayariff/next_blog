export async function getAllPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
    {
      next: { revalidate: 30 }
    } as RequestInit | undefined
  );
  if (!res.ok) throw Error("Failed request to server");
  return res.json();
}

export async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 30 }
    } as RequestInit | undefined
  );
  if (!res.ok) throw Error("Failed request to server");
  return res.json();
}

export async function getPostBySearch(search: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`,
    {
      next: { revalidate: 30 }
    } as RequestInit | undefined
  );
  if (!res.ok) throw Error("Failed request to server");
  return res.json();
}