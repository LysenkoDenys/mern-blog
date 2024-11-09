import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UpdatePost = () => {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    image: '',
  });
  const [content, setContent] = useState(''); // Store the content separately for debounced updates
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();
  const { postId } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  //===========================================
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'], // remove formatting button
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  //===========================================

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/getposts?postId=${postId}`); // Fetch post based on postId
        const data = await res.json();
        if (!res.ok) {
          setPublishError(data.message); // Handle publish error if fetch is unsuccessful
          return;
        }
        setFormData(data.posts[0]); // Set the form data if fetch is successful
        setContent(data.posts[0].content); // Set content state separately for debounced updates
      } catch (error) {
        console.log(error.message);
        setPublishError(error.message); // Handle fetch errors by setting the publishError
      }
    };
    fetchPost(); // Call fetchPost on mount to load the initial data
  }, [postId]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFormData((prevFormData) => ({ ...prevFormData, content })); // Update formData.content with debounced content
    }, 500);
    return () => clearTimeout(debounce); // Clear timeout if content changes again within 500ms
  }, [content]); // Only re-run when content changes

  const handlerUploadImage = async () => {
    if (!file) {
      // Check if a file is selected
      setImageUploadError('Please select an image'); // Set error if no file is selected
      return;
    }
    setImageUploadError(null); // Clear any previous image upload errors

    const storage = getStorage(app); // Get Firebase storage instance
    const fileName = `${new Date().getTime()}-${file.name}`; // Create a unique filename
    const storageRef = ref(storage, fileName); // Create a reference to the storage path
    const uploadTask = uploadBytesResumable(storageRef, file); // Start the upload task

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (
          (snapshot.bytesTransferred / snapshot.totalBytes) *
          100
        ).toFixed(0); // Calculate upload progress
        setImageUploadProgress(progress); // Set upload progress in state
      },
      (error) => {
        console.log(error); // Log any errors that occur during upload
        setImageUploadError('Image upload failed'); // Set error message for failed upload
        setImageUploadProgress(null); // Reset progress indicator if upload fails
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // Get the download URL on successful upload
          setFormData((prevFormData) => ({
            ...prevFormData,
            image: downloadURL,
          })); // Set the image URL in formData
          setImageUploadProgress(null); // Clear upload progress once upload completes
          setImageUploadError(null); // Clear any image upload errors after success
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `/api/post/updatepost/${formData._id}/${currentUser._id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' }, // Set headers for JSON content type
          body: JSON.stringify(formData), // Send formData in the body of the request
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message); // Handle publish error if response is unsuccessful
        return;
      }
      navigate(`/post/${data.slug}`); // Redirect to updated post page if response is successful
    } catch (error) {
      console.log(error); // Log any errors that occur during form submission
      setPublishError('Something went wrong'); // Set a generic error message for failed submission
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            } // Set title in formData on change
            value={formData.title} // Bind formData title to the input
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            } // Set category in formData on change
            value={formData.category} // Bind formData category to the select
          >
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
            <option value="nodejs">Node.js</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])} // Set file state on file input change
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handlerUploadImage}
            disabled={!!imageUploadProgress} // Disable button while image is uploading
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress}%`}
                />
              </div>
            ) : (
              'Upload image'
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          value={content} // Bind separate content state to ReactQuill
          placeholder="Write something smart, impress me..."
          className="h-72 mb-12"
          required
          modules={module}
          onChange={setContent} // Update content state on change for debounced update
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Update post
        </Button>
        {publishError && (
          <Alert color="failure" className="mt-5">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default UpdatePost;
