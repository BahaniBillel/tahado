-- CreateTable
CREATE TABLE "categories" (
    "category_id" SERIAL NOT NULL,
    "category_name" VARCHAR(50),
    "parent_category_id" INTEGER,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "orderitems" (
    "item_id" SERIAL NOT NULL,
    "order_id" INTEGER,
    "product_id" INTEGER,
    "quantity" INTEGER,
    "subtotal" DECIMAL(10,2),

    CONSTRAINT "orderitems_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "orders" (
    "order_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "order_date" DATE,
    "total_amount" DECIMAL(10,2),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "paymentmethods" (
    "payment_method_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "payment_type" VARCHAR(50),
    "card_number" VARCHAR(16),
    "expiration_date" DATE,
    "billing_address" VARCHAR(200),

    CONSTRAINT "paymentmethods_pkey" PRIMARY KEY ("payment_method_id")
);

-- CreateTable
CREATE TABLE "productreviews" (
    "review_id" SERIAL NOT NULL,
    "product_id" INTEGER,
    "user_id" INTEGER,
    "rating" INTEGER,
    "review_text" TEXT,
    "review_date" DATE,

    CONSTRAINT "productreviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "products" (
    "gift_id" SERIAL NOT NULL,
    "giftname" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "category" VARCHAR(50),
    "url" VARCHAR,
    "occasion" VARCHAR,

    CONSTRAINT "products_pkey" PRIMARY KEY ("gift_id")
);

-- CreateTable
CREATE TABLE "shippingaddresses" (
    "address_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "address" VARCHAR(200),
    "city" VARCHAR(50),
    "state" VARCHAR(50),
    "postal_code" VARCHAR(20),
    "country" VARCHAR(50),

    CONSTRAINT "shippingaddresses_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password_hash" VARCHAR(100) NOT NULL,
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "address" VARCHAR(200),
    "phone_number" VARCHAR(20),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "wishlist" (
    "wishlist_id" SERIAL NOT NULL,
    "user_id" INTEGER,

    CONSTRAINT "wishlist_pkey" PRIMARY KEY ("wishlist_id")
);

-- CreateTable
CREATE TABLE "wishlistitems" (
    "wishlist_item_id" SERIAL NOT NULL,
    "wishlist_id" INTEGER,
    "product_id" INTEGER,

    CONSTRAINT "wishlistitems_pkey" PRIMARY KEY ("wishlist_item_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_category_id_fkey" FOREIGN KEY ("parent_category_id") REFERENCES "categories"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderitems" ADD CONSTRAINT "orderitems_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orderitems" ADD CONSTRAINT "orderitems_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("gift_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "paymentmethods" ADD CONSTRAINT "paymentmethods_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "productreviews" ADD CONSTRAINT "productreviews_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("gift_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "productreviews" ADD CONSTRAINT "productreviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shippingaddresses" ADD CONSTRAINT "shippingaddresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wishlist" ADD CONSTRAINT "wishlist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wishlistitems" ADD CONSTRAINT "wishlistitems_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("gift_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wishlistitems" ADD CONSTRAINT "wishlistitems_wishlist_id_fkey" FOREIGN KEY ("wishlist_id") REFERENCES "wishlist"("wishlist_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
