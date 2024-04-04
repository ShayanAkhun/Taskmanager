import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "user is unauthorized", status: 401 });
    }
    const { title, date, description, completed, important } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing fields required",
        status: 400,
      });
    }

    if (title.lenght < 3) {
      return NextResponse.json({
        error: "Title must be atleast 3 charaters long",
        status: 400,
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("Error creating a task", error);
    return NextResponse.json({ error: "Error creating Task", status: 500 });
  }
}

export async function GET(req: Request) {
  try {
  } catch (error) {
    console.log("Error getting a task", error);
    return NextResponse.json({ error: "Error getting Task", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
  } catch (error) {
    console.log("Error updating a task", error);
    return NextResponse.json({ error: "Error updating Task", status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
  } catch (error) {
    console.log("Error deleting a task", error);
    return NextResponse.json({ error: "Error deleting Task", status: 500 });
  }
}
