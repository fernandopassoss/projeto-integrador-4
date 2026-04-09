/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - Added the required column `personId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "zipCode" TEXT NOT NULL,
    "addressLine" TEXT NOT NULL,
    "addressLineNumber" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "updateDate" DATETIME NOT NULL,
    "deletionDate" DATETIME,
    CONSTRAINT "addresses_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "persons" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "phone" TEXT NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "updateDate" DATETIME NOT NULL,
    "deletionDate" DATETIME
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "recoverPassword" TEXT,
    "personId" TEXT NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "updateDate" DATETIME NOT NULL,
    "deletionDate" DATETIME,
    CONSTRAINT "users_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_users" ("creationDate", "deletionDate", "id", "image", "isActive", "mail", "password", "recoverPassword", "updateDate") SELECT "creationDate", "deletionDate", "id", "image", "isActive", "mail", "password", "recoverPassword", "updateDate" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_mail_key" ON "users"("mail");
CREATE UNIQUE INDEX "users_personId_key" ON "users"("personId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "addresses_personId_key" ON "addresses"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "persons_cpf_key" ON "persons"("cpf");
