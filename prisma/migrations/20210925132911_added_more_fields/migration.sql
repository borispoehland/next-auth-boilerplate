/*
  Warnings:

  - Added the required column `provider` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "provider" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
