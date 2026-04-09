-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "recoverPassword" TEXT,
    "creationDate" DATETIME NOT NULL,
    "updateDate" DATETIME NOT NULL,
    "deletionDate" DATETIME
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "confirmToken" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "updateDate" DATETIME NOT NULL,
    "deletionDate" DATETIME,
    CONSTRAINT "VerificationToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_mail_key" ON "users"("mail");

-- CreateIndex
CREATE INDEX "user_id_idx" ON "VerificationToken"("userId");
