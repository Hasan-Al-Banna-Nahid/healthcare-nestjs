-- CreateTable
CREATE TABLE "specialities" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "icon" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "specialities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_isDeleted_index" ON "specialities"("isDeleted");

-- CreateIndex
CREATE INDEX "idx_title_index" ON "specialities"("title");
