import { comments } from "./data";

// GET http://localhost:3000/comments
export const GET = async () => {
  return Response.json(comments);
};

// POST http://localhost:3000/comments
// body:
// {
//    "text": "New Comment"
// }
export const POST = async (request: Request) => {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};
