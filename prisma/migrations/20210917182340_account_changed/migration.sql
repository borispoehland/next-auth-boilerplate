/*
  Warnings:

  - You are about to drop the column `access_token` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `Account` table. All the data in the column will be lost.
  - Added the required column `providerType` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "access_token",
DROP COLUMN "expires_at",
ADD COLUMN     "accessToken" TEXT,
ADD COLUMN     "accessTokenExpires" INTEGER,
ADD COLUMN     "providerType" TEXT NOT NULL;
