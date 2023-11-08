import React, { FC, useCallback, useEffect, useState } from "react";
import { DeleteImage } from "../services/deleteImageService";
import {
  ApprovePrompt,
  getPrompts,
  RejectPrompt,
  UploadImage,
} from "../services/promptService.ts";
import { promptType } from "../types/promptType.ts";
import { AxiosError } from "axios";
import { AnimatePresence, motion } from "framer-motion";

export const ManagePromptsPage: FC = () => {
  const [prompts, setPrompts] = useState<promptType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmApprove, setConfirmApprove] = useState<string | null>(null);
  const [confirmReject, setConfirmReject] = useState<string | null>(null);
  const [confirmPanic, setConfirmPanic] = useState<boolean>(false);

  const handlePanic = useCallback(async () => {
    setConfirmPanic(true);
  }, []);

  const confirmApprovePrompt = (promptId: string) => {
    setConfirmApprove(promptId);
  };

  const confirmRejectPrompt = (promptId: string) => {
    setConfirmReject(promptId);
  };

  const handleApprove = async (promptId: string) => {
    if (confirmApprove === promptId) {
      try {
        await ApprovePrompt(promptId);
        setConfirmApprove(null);
        await fetchSilentPrompts();
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            localStorage.removeItem("API_KEY");
          }
        }
      }
    }
  };

  const handleUpload: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement?.files ? inputElement.files[0] : null; // Get the selected file

    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const dataURL = e?.target?.result as string;

        // Extract only the Base64-encoded data without the data URI prefix
        const base64Image = dataURL.split(',')[1];
        const imageBase64 = base64Image;

        await UploadImage(imageBase64);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleReject = async (promptId: string) => {
    if (confirmReject === promptId) {
      try {
        await RejectPrompt(promptId);
        setConfirmReject(null);
        await fetchSilentPrompts();
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            localStorage.removeItem("API_KEY");
          }
        }
      }
    }
  };

  const handlePanicConfirmation = async () => {
    setConfirmPanic(false);
    if (confirm("Press okay to delete the current prompt")) {
      await DeleteImage();
    }
  };

  const fetchPrompts = async () => {
    try {
      setLoading(true);
      const prompts = await getPrompts();
      setPrompts(prompts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          localStorage.removeItem("API_KEY");
        }
      }
    }
  };

  const fetchSilentPrompts = async () => {
    try {
      const prompts = await getPrompts();
      setPrompts(prompts);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          localStorage.removeItem("API_KEY");
        }
      }
    }
  };

  useEffect(() => {
    const ApiKey = localStorage.getItem("API_KEY");

    if (!ApiKey) {
      const key = prompt("Please enter your API key");
      if (key) {
        localStorage.setItem("API_KEY", key);
      }
    } else {
      fetchPrompts().catch(console.log);
      setInterval(() => {
        fetchSilentPrompts().catch(console.log);
      }, 10000);
    }
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen p-4">
      <div className="mb-4">
        <motion.button
          onClick={handlePanic}
          className="bg-red-500 text-white p-10 w-32 h-32 rounded-full shadow-md hover:bg-red-600 focus:outline-none transition-colors duration-200 ease-in-out"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          Panic
        </motion.button>
      </div>

      <div className="mb-4">
        <p className="text-xl font-semibold text-white">Upload custom image:</p>
        <input type="file" onChange={handleUpload} />
      </div>

      {loading ? (
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-200"
          ></motion.div>
          <p className="text-white text-lg mt-4">Loading Prompts...</p>
        </div>
      ) : (
        <div className="flex flex-col mt-4">
          <p className="text-xl font-semibold text-white">Prompts:</p>
          <motion.ul className="mt-2">
            <AnimatePresence mode={"popLayout"}>
              {prompts.map((prompt) => (
                <motion.li
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  key={prompt._id}
                  className="border-b py-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-white">{prompt.prompt}</span>
                    <div className="space-x-2">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => confirmApprovePrompt(prompt._id)}
                        className="bg-green-500 text-white px-2 py-1 rounded-md shadow-md"
                      >
                        Approve
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => confirmRejectPrompt(prompt._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md shadow-md"
                      >
                        Reject
                      </motion.button>
                    </div>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      )}

      {/* Approve Confirmation Dialog */}
      {confirmApprove && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 flex items-center justify-center z-10"
        >
          <div className="bg-gray-900 bg-opacity-75 fixed inset-0"></div>
          <div className="bg-white p-4 rounded-md z-20">
            <p className="text-lg text-black">Confirm Approve?</p>
            <div className="flex justify-end mt-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1 }}
                onClick={() => setConfirmApprove(null)}
                className="bg-gray-300 px-4 py-2 rounded-md ml-2"
              >
                Cancel
              </motion.button>
              <button
                onClick={() => handleApprove(confirmApprove)}
                className="bg-green-500 text-white px-4 py-2 rounded-md ml-2"
              >
                Approve
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Reject Confirmation Dialog */}
      {confirmReject && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 flex items-center justify-center z-10"
        >
          <div className="bg-gray-900 bg-opacity-75 fixed inset-0"></div>
          <div className="bg-white p-4 rounded-md z-20">
            <p className="text-lg text-black">Confirm Reject?</p>
            <div className="flex justify-end mt-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1 }}
                onClick={() => setConfirmReject(null)}
                className="bg-gray-300 px-4 py-2 rounded-md ml-2"
              >
                Cancel
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1 }}
                onClick={() => handleReject(confirmReject)}
                className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
              >
                Reject
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Panic Confirmation Dialog */}
      {confirmPanic && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 flex items-center justify-center z-10"
        >
          <div className="bg-gray-900 bg-opacity-75 fixed inset-0"></div>
          <div className="bg-white p-4 rounded-md z-20">
            <p className="text-lg text-black">Enable Panic MODE?</p>
            <div className="flex justify-end mt-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1 }}
                onClick={() => setConfirmPanic(false)}
                className="bg-gray-300 px-4 py-2 rounded-md ml-2"
              >
                NO
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1 }}
                onClick={handlePanicConfirmation}
                className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
              >
                PANIC!
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
