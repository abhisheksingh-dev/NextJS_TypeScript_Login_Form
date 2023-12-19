export async function GET({ params }: { params: { request: Request } }) {
    return Response.json({ name: 'Abhishek Singh', params: params.request })
}
