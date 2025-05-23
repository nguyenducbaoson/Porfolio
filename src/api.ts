import axios from "axios"
import type { SendEmailResponse } from "./models/Email"

const api = "https://localhost:7147/api";

export const sendMailAsync = async (
  email: string,
  name: string,
  message: string
): Promise<SendEmailResponse> => {
  try {
    const response = await axios.post<SendEmailResponse>(`${api}/Email/send-email`, {
      email: email,
      name: name,
      message: message
    });

    return response.data;
  } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    return {
      status: "error",
      message: error.response?.data?.message || "An error occurred while sending email."
    };
  }

  return {
    status: "error",
    message: "An unknown error occurred."
  };
}
};