/*
  Warnings:

  - Made the column `emailAddress` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "emailAddress" SET NOT NULL;
