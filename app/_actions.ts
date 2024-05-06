'use server'

import { createApplication } from "@/lib/applications"

export const createApplicationAction = async (data) => {
  await createApplication(data);
}