import { dbConnect } from "@/app/lib/actions";
import Notes from "@/app/lib/models/notes";
import { cookies } from "next/headers";
import { getUserFromToken } from "@/app/lib/actions";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  try {
    const cookieToken = cookies().get('token')
    await dbConnect();
    const req = await request.json();
    const userId = await getUserFromToken(cookieToken.value)
    
    const note = new Notes({
      title: req.title,
      description: req.description,
      userId: userId,
    });

    await note.save();
    revalidatePath("/notes")
    return new Response(JSON.stringify({ message: "ok" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (ex) {
    console.log(ex)
    return new Response(JSON.stringify({ error: ex}), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  }
}

export async function GET() {
    await dbConnect()
    const cookieToken = cookies().get('token')
    const userId = await getUserFromToken(cookieToken.value)
    const notes = await Notes.find({ userId: userId})
    if (notes.length) {
        return new Response(JSON.stringify(notes), {
            headers: {
                "Content-Type": "application/json",
            },
            status: 200,
        });
    }
}
