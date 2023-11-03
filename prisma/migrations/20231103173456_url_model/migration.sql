-- CreateTable
CREATE TABLE "Url" (
    "key" TEXT NOT NULL,
    "long_url" TEXT NOT NULL,
    "short_url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_key_key" ON "Url"("key");
