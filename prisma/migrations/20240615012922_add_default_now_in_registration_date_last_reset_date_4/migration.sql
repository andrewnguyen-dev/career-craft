/*
  Warnings:

  - Made the column `lastResetDate` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `registrationDate` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "lastResetDate" SET NOT NULL,
ALTER COLUMN "registrationDate" SET NOT NULL;
