/*
  Warnings:

  - You are about to drop the column `attending` on the `RSVP` table. All the data in the column will be lost.
  - Added the required column `attendance` to the `RSVP` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RSVP" DROP COLUMN "attending",
ADD COLUMN     "attendance" BOOLEAN NOT NULL;
