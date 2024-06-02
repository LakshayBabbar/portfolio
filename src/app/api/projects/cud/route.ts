import Project from "@/models/projects";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import connectDb from "@/config/db";
connectDb();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_API_SECRET,
});

interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const title = data.get("title");
    const skills = data.get("skills");
    const img = data.get("img") as File;
    const link = data.get("link");
    const repo = data.get("repo");
    if (!img) {
      return NextResponse.json(
        {
          message: "No image found",
          success: false,
        },
        { status: 404 }
      );
    }
    const byteData = await img.arrayBuffer();
    const buffer = new Uint8Array(byteData);
    const imgPath: CloudinaryUploadResult = await new Promise(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "portfolio" }, function (error, result) {
            if (error) {
              reject(error);
              return NextResponse.json(
                {
                  message: `Error while uplading image: ${error.message}`,
                  success: false,
                },
                { status: 400 }
              );
            }
            resolve(result as CloudinaryUploadResult);
          })
          .end(buffer);
      }
    );
    const newProject = await new Project({
      title,
      skills,
      img: {
        public_id: imgPath.public_id,
        url: imgPath.secure_url,
      },
      link,
      repo,
    });
    await newProject.save();
    return NextResponse.json(
      {
        message: "Project created successfully",
        newProject,
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { _id, title, skills, link, repo } = await reqBody;
    const project = await Project.findOneAndUpdate(
      { _id },
      { title, skills, link, repo }
    );
    if (!project) {
      return NextResponse.json(
        {
          message: "Project not found",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Project is updated successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { id } = await reqBody;
    const project = await Project.findOne({ _id: id });
    if (!project) {
      return NextResponse.json(
        {
          message: "Project not found",
          success: false,
        },
        { status: 404 }
      );
    }
    await cloudinary.uploader.destroy(project.img.public_id);
    await Project.deleteOne({ _id: id });
    return NextResponse.json(
      {
        message: "Project is deleted successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}
