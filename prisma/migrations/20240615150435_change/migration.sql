/*
  Warnings:

  - You are about to drop the column `defualtShippingAddress` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `defualtShippingAddress`,
    ADD COLUMN `defaultShippingAddress` INTEGER NULL;
