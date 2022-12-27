import axios from "axios";
export const postRequest = async (url, data, contentType) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE}/api/${url}`,
      data,
      { headers: { "Content-Type": `${contentType}` } }
    );
    return res;
  } catch (err) {
    return {
      status: err.response.status,
      message: err.response.data ? err.response.data : err.message,
    };
  }
};

export const forceFileDownload = (response, title) => {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", title);
  document.body.appendChild(link);
  link.click();
};
