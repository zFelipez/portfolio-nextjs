export async function GET() {
  const res = await fetch(
    "https://api.github.com/users/zFelipez/repos?sort=updated&per_page=3",
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    }
  );
  const data = await res.json();

  return Response.json(data)
}
