/*
  Warnings:

  - You are about to drop the column `access_token` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `provider` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Account` table. All the data in the column will be lost.
  - Made the column `providerAccountId` on table `Account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `providerId` on table `Account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `providerType` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "access_token",
DROP COLUMN "expires_at",
DROP COLUMN "provider",
DROP COLUMN "type",
ALTER COLUMN "providerAccountId" SET NOT NULL,
ALTER COLUMN "providerId" SET NOT NULL,
ALTER COLUMN "providerType" SET NOT NULL;
