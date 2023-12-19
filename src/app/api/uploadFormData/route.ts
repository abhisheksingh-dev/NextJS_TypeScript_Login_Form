export async function POST({ request }: { request: Request }) {
    const formData = await request.json()
    return Response.json(formData);
}