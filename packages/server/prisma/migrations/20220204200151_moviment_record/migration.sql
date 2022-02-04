-- CreateTable
CREATE TABLE "MovimentRecords" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "prevX" INTEGER NOT NULL,
    "prevY" INTEGER NOT NULL,
    "prevFinalPosition" TEXT NOT NULL,
    "actualX" INTEGER NOT NULL,
    "actualY" INTEGER NOT NULL,
    "actualFinalPosition" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
