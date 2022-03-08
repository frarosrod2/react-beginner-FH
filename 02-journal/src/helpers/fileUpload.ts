export const fileUpload = async (file: any) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/daohtolsp/upload';
  // process.env.REACT_APP_CLOUDINARY_KEY +
  // ':' +
  // process.env.REACT_APP_CLOUDINARY_SECRET +

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });
    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    }
    throw await resp.json();
  } catch (error) {
    console.log(error);
  }
};
