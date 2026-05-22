"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function getTokenAction() {
  try {
    const nextHeaders = await headers();
    const tokenData = await auth.api.getToken({
      headers: nextHeaders
    });
    return tokenData?.token || null;
  } catch (err) {
    console.error("Error fetching token:", err);
    return null;
  }
}
