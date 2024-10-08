import { comments } from "../data";

// GET http://localhost:3000/comments/[id]
export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );

  return Response.json(comment);
};

// PATCH http://localhost:3000/comments/[id]
// body:
// {
//    "text": "Updated Comment"
// }
export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();

  const { text } = body;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;

  return Response.json(comments[index]);
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));

    const deletedComment = comments[index];

    comments.splice(index, 1);
    return Response.json(deletedComment);
};
