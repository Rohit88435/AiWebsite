import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { serverUrl } from "../App";
import { useState } from "react";

function LiveSite() {
  const { id } = useParams();
  const [html, setHtml] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleGetWebsite = async () => {
      try {
        console.log("Fetching website with slug:", id);
        const result = await axios.get(
          `${serverUrl}/api/website/getbyslug/${id}`,
        );
        console.log("Response data:", result.data);
        if (result.data.latestCode) {
          setHtml(result.data.latestCode);
          setErr("");
        } else {
          setErr("No code found for this website");
        }
      } catch (error) {
        console.log("Error fetching website:", error);
        setErr("Site Not Found or Error Loading");
      } finally {
        setLoading(false);
      }
    };
    handleGetWebsite();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  if (err) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white flex-col gap-4">
        <p>{err}</p>
        <p className="text-sm text-gray-400">Checking slug: {id}</p>
      </div>
    );
  }

  const testHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial; text-align: center; padding: 50px; background: linear-gradient(to right, #667eea, #764ba2); color: white; }
        h1 { font-size: 2.5em; }
      </style>
    </head>
    <body>
      <h1>✅ Website Loaded Successfully!</h1>
      <p>The iframe is working correctly.</p>
    </body>
    </html>
  `;

  return (
    <div>
      {html && html.trim() ? (
        <iframe
          title="Live site"
          srcDoc={html}
          className="h-screen w-screen border-none"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      ) : (
        <iframe
          title="Test"
          srcDoc={testHTML}
          className="h-screen w-screen border-none"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      )}
    </div>
  );
}

export default LiveSite;
