import { useEffect, useRef } from "react";

const UploadWidget = ({ onUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    if (!window.cloudinary) {
      console.error("❌ Cloudinary widget not found. Add script in index.html");
      return;
    }

    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "YOUR_CLOUD_NAME", // TODO: replace with your Cloudinary cloud name
        uploadPreset: "portfolio", // TODO: create an unsigned upload preset in Cloudinary
        sources: ["local", "url", "camera"],
        multiple: true,
        resourceType: "auto",
        maxFiles: 5,
        folder: "portfolio_projects",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("✅ Upload success:", result.info);
          if (onUpload) onUpload(result);
        }
      }
    );
  }, [onUpload]);

  return (
    <button
      type="button"
      onClick={() => widgetRef.current.open()}
      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
    >
      Upload Media
    </button>
  );
};

export default UploadWidget;
