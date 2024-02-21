"use server";
import { resend } from "@/lib/resend";
import { registerFormFieldType } from "@/types/forms";

export const email = async (formData: registerFormFieldType) => {
  await resend.emails.send({
    from: "bshop@example.com",
    to: formData.email,
    subject: "Inscription",
    html: `<p>Bonjour, vous venez de rejoindre notre site. Nous vous souhaitons la bienvenue.</p>`,
  });
};
